import { useAuth, useSession } from "@clerk/nextjs";
import ItemList from "components/item-list";
import { items, users } from "data/dummy-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Head from "next/head";

const UserIdPage = () => {
  const { signOut } = useAuth();
  const { session } = useSession();

  return (
    <div>
      <Head>
        <title>{session?.user?.username || "User"} | Grafnews</title>
      </Head>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            alt="User image"
            src={session?.user?.profileImageUrl}
            className="w-14 h-14"
          />
          <h1 className="text-5xl font-bold">{session?.user?.username}</h1>
        </div>
        <button
          onClick={() => signOut()}
          className="px-2 py-1 bg-red-700 text-white text-xl"
        >
          Logout
        </button>
      </div>
      <div className="border-b-4 mt-6 max-w-sm border-black" />
      <p className="text-xl mt-4 text-gray-600">
        {session?.user?.emailAddresses[0].emailAddress} | Joined{" "}
        <time>
          {!!session?.user?.createdAt &&
            formatDistanceToNow(session?.user?.createdAt, { addSuffix: true })}
        </time>
      </p>
      <p className="text-xl mt-4 text-gray-600"></p>
      <h3 className="mt-8 text-2xl font-semibold">Items</h3>
      <div className="space-y-4 mt-6">
        {items.map((item) => (
          <ItemList key={item.id} {...item} author={users[0]} />
        ))}
      </div>
    </div>
  );
};

export default UserIdPage;
