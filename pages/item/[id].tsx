import { items } from "data/dummy-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Head from "next/head";
import { useRouter } from "next/router";

const ItemIdPage = () => {
  const { query } = useRouter();
  const { title, comments, createdAt, url, votes, author } = items.find(
    ({ id }) => id === query.id
  )!;

  return (
    <div>
      <Head>
        <title>{title} | Grafnews</title>
      </Head>
      <div className="flex">
        <div className="flex flex-col border border-black">
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
        <div className="pl-4 flex-1">
          <h1 className="text-5xl font-bold">{title}</h1>
          <div className="mt-4">
            <div className="bg-gray-100 p-4 text-xl  text-gray-800">
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </div>
          </div>
          <div className="flex justify-end space-x-2 items-center mt-4">
            <div className="h-7 w-7"></div>
            <span className=" text-gray-500">
              <time className="font-semibold text-gray-700">
                {formatDistanceToNow(createdAt, { addSuffix: true })}
              </time>{" "}
              by {author.name}
            </span>
            <img src={author.imageUrl} alt={author.name} className="h-7 w-7" />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div>
        <h2 className="mt-6 text-lg  mb-5">Write a comment</h2>
        <div className="space-y-2  text-right">
          <textarea
            className="bg-gray-50 w-full p-4 border focus:outline-black"
            placeholder="Type here"
          />
          <button className="border px-2 py-1 text-gray-700  hover:bg-gray-50">
            Add comment
          </button>
        </div>
        <div>
          <h2 className="mt-6 text-lg  mb-5">Comments ({comments.length})</h2>
          <div className="space-y-4">
            {comments.map(
              ({ content, createdAt, author: { name, imageUrl } }) => (
                <div key={content} className="border w-full">
                  <div className="flex justify-between items-center bg-gray-50 pr-4">
                    <div className="flex items-center space-x-4">
                      <img src={imageUrl} alt={name} className="h-10 w-10" />
                      <span className="text-base ">{name}</span>
                    </div>
                    <time className=" text-gray-600 text-sm">
                      {formatDistanceToNow(createdAt, { addSuffix: true })}
                    </time>
                  </div>
                  <div className="p-4 text-gray-700">{content}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemIdPage;
