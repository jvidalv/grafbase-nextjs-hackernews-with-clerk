import { gql, useMutation } from "@apollo/client";
import {
  AuthenticateWithRedirectCallback,
  useAuth,
  useSession,
} from "@clerk/nextjs";
import LogoAnimated from "components/logo-animated";
import { UserMutation } from "gql/graphql";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const USER_CREATE_MUTATION = gql`
  mutation User(
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

const CallbackPage = () => {
  const { isSignedIn } = useAuth();
  const { session } = useSession();
  const { query, replace, isReady } = useRouter();
  const [mutateFunction, { data, loading, error }] =
    useMutation<UserMutation>(USER_CREATE_MUTATION);

  useEffect(() => {
    if (isSignedIn) {
      mutateFunction({
        variables: {
          name: session?.user?.username,
          email: session?.user?.emailAddresses[0]?.emailAddress,
          imageUrl: session?.user?.profileImageUrl,
          createdAt: Date.now(),
        },
      });
    }
  }, [
    isSignedIn,
    mutateFunction,
    session?.user?.emailAddresses,
    session?.user?.username,
  ]);

  useEffect(() => {
    if ((isSignedIn && isReady && !loading && data) || !!error) {
      const url = query?.origin ? (query?.origin as string) : "/";
      replace(url);
    }
  }, [data, error, isReady, isSignedIn, loading, query?.origin, replace]);

  return (
    <>
      <Head>
        <title>Loading Session | Grafnews</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="border border-black pt-6 pb-4 px-6 bg-gray-50 border-b-4">
          <LogoAnimated />
        </div>
        {!isSignedIn && (
          <AuthenticateWithRedirectCallback redirectUrl="/callback" />
        )}
      </div>
    </>
  );
};

export default CallbackPage;
