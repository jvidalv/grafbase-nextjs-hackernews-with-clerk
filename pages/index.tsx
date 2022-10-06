import Head from "./components/head";
import { items } from "data/dummy-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grafnews | Feed</title>
      </Head>
      <div className="space-y-8">
        <div className="bg-indigo-600 p-4 border border-b-4 border-black flex items-center justify-between space-x-4">
          <h2 className="text-white text-2xl ">
            Grafbase is open to everyone, start building your frontends with the
            next-gen Graphql platform!
          </h2>
          <div>
            <a
              href="https://grafbase.com/register"
              className="border border-white px-3 py-2 text-xl text-white whitespace-nowrap"
            >
              Try it
            </a>
          </div>
        </div>
        <hr />
        {items.map(({ id, url, createdAt, title, votes, author, comments }) => (
          <div key={id} className="border w-full border-b-4 border-gray-500">
            <div className="flex">
              <div className="flex flex-col border-r border-black">
                <button className="flex flex-1 items-center justify-center p-2 hover:bg-indigo-800 hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
                <div className="flex flex-1 items-center justify-center p-2 bg-black text-white font-bold text-lg border-y border-black">
                  {votes.length || 0}
                </div>
                <button className="flex flex-1 items-center justify-center p-2 hover:bg-indigo-800 hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-4 pt-4 w-full">
                <a
                  href={url}
                  target="_blank"
                  className="text-2xl font-semibold hover:text-indigo-700"
                >
                  <div className="px-4">
                    {title}
                    <div className="text-gray-500 mt-1 text-sm">{url}</div>
                  </div>
                </a>
                <div className="flex justify-between items-center bg-gray-200 w-full flex-1 px-4 py-2">
                  <Link
                    href={{
                      pathname: "/item/[id]",
                      query: {
                        id,
                      },
                    }}
                    passHref
                  >
                    <a className="text-lg  text-gray-700">
                      {`${comments.length} ${
                        comments.length === 1 ? "comment" : "comments"
                      } `}
                    </a>
                  </Link>
                  <div className="flex space-x-2 items-center">
                    <div className="h-7 w-7"></div>
                    <span className="text-lg  text-gray-700">
                      <time className="font-semibold text-gray-800">
                        {formatDistanceToNow(createdAt, { addSuffix: true })}
                      </time>{" "}
                      by {author.name}
                    </span>
                    <img
                      src={author.imageUrl}
                      alt={author.name}
                      className="h-7 w-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
