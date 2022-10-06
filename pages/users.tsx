import { users } from "data/dummy-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Head from "next/head";
import Link from "next/link";

const UsersPage = () => {
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
        {users.map(({ id, name, imageUrl, createdAt }) => (
          <Link
            href={{
              pathname: "/user/[id]",
              query: { id },
            }}
            key={id}
          >
            <a className="border flex items-center justify-between pr-4">
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
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
