import { gql, useQuery } from "@apollo/client";
import { users } from "data/dummy-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { UsersListQuery } from "gql/graphql";
import Head from "next/head";
import Link from "next/link";

const USERS_LIST_QUERY = gql`
  query UsersList {
    userCollection(first: 100) {
      edges {
        node {
          id
          name
          imageUrl
          createdAt
        }
      }
    }
  }
`;

const UsersPage = () => {
  const { data, loading, error } = useQuery<UsersListQuery>(USERS_LIST_QUERY);

  return (
    <div>
      <Head>
        <title>Users | Grafnews</title>
      </Head>
      <h1 className="text-5xl font-bold">Users</h1>
      <div className="border-b-4 mt-6 max-w-sm border-black" />
      <p className="text-xl mt-4 text-gray-600">
        All the users that have joined Grafnews
      </p>
      <h3 className="mt-8 text-2xl font-semibold">Total ({users.length})</h3>
      <div className="space-y-4 mt-6">
        {(loading || !!error) && (
          <>
            <div className="animate-pulse bg-gray-200 p-4 border h-11 border-b-4 w-full" />
            <div className="animate-pulse bg-gray-200 p-4 border h-11 border-b-4 w-full" />
            <div className="animate-pulse bg-gray-200 p-4 border h-11 border-b-4 w-full" />
          </>
        )}
        {!loading && !error && !data?.userCollection?.edges?.length && (
          <div className="border border-black bg-gray-200 min-h-24 w-full flex flex-col space-y-6 items-center justify-center py-6">
            <div className="text-lg">No users yet.</div>
            <Link href="/login" passHref>
              <a>
                <button className="px-2 py-1 bg-black text-white hover:bg-gray-700">
                  Be the first one
                </button>
              </a>
            </Link>
          </div>
        )}
        {data?.userCollection?.edges?.map((edge) => {
          if (!edge?.node) {
            return null;
          }

          const { id, name, imageUrl, createdAt } = edge.node;

          return (
            <Link
              href={{
                pathname: "/user/[id]",
                query: { id },
              }}
              key={id}
            >
              <a className="border border-b-4 border-gray-300 flex items-center justify-between pr-4">
                <div className="flex items-center space-x-4">
                  <img src={imageUrl} className="h-12 w-12" alt={name} />
                  <span className="text-xl">{name}</span>
                </div>
                <div>
                  <time className="text-gray-600">
                    Joined {formatDistanceToNow(createdAt, { addSuffix: true })}
                  </time>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
