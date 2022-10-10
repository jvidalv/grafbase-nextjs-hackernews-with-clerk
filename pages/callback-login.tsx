import { ApolloError, gql, useApolloClient, useMutation } from "@apollo/client";
import {
  AuthenticateWithRedirectCallback,
  useAuth,
  useSession,
} from "@clerk/nextjs";
import { withServerSideAuth } from "@clerk/nextjs/ssr";
import LogoAnimated from "components/logo-animated";
import { UserCreateLoginMutation, UserUpdateLoginMutation } from "gql/graphql";
import useViewer from "hooks/use-viewer";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const USER_CREATE_MUTATION = gql`
  mutation UserCreateLogin(
    $name: String!
    $email: Email!
    $createdAt: Int!
    $imageUrl: String!
  ) {
    userCreate(
      input: {
        name: $name
        email: $email
        createdAt: $createdAt
        imageUrl: $imageUrl
      }
    ) {
      __typename
    }
  }
`;

const USER_UPDATE_MUTATION = gql`
  mutation UserUpdateLogin($id: ID!, $imageUrl: String!) {
    userUpdate(id: $id, input: { imageUrl: $imageUrl }) {
      __typename
    }
  }
`;

// Inserts or updates, for the viewer object
const CallbackLoginPage = () => {
  const client = useApolloClient();
  const { isSignedIn } = useAuth();
  const { session } = useSession();
  const { query, replace, isReady } = useRouter();
  const { viewer, loading: loadingViewer } = useViewer();
  const [mutateUserCreate] =
    useMutation<UserCreateLoginMutation>(USER_CREATE_MUTATION);
  const [mutateUserUpdate] =
    useMutation<UserUpdateLoginMutation>(USER_UPDATE_MUTATION);

  useEffect(() => {
    if (loadingViewer) {
      return;
    }

    if (isSignedIn) {
      const email = session?.user?.emailAddresses[0]?.emailAddress;
      // Update
      if (viewer) {
        mutateUserUpdate({
          variables: {
            id: viewer.id,
            imageUrl: session?.user?.profileImageUrl,
          },
        });
      } else {
        mutateUserCreate({
          variables: {
            name: session?.user?.username,
            email: email,
            imageUrl: session?.user?.profileImageUrl,
            createdAt: Date.now(),
          },
        });
      }

      client.refetchQueries({
        include: ["Viewer"],
      });

      localStorage.setItem("hasLoggedIn", "true");
    }
  }, [
    client,
    isSignedIn,
    loadingViewer,
    mutateUserCreate,
    mutateUserUpdate,
    session?.user?.emailAddresses,
    session?.user?.profileImageUrl,
    session?.user?.username,
    viewer,
  ]);

  useEffect(() => {
    if (isSignedIn && isReady && viewer) {
      const url = query?.origin ? (query?.origin as string) : "/";
      replace(url);
    }
  }, [isReady, isSignedIn, query?.origin, replace, viewer]);

  return (
    <>
      <Head>
        <title>Loading Session | Grafnews</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="border border-black pt-6 pb-4 px-6 bg-gray-50 border-b-4">
          <LogoAnimated />
        </div>
      </div>
    </>
  );
};

export default CallbackLoginPage;
