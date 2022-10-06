import { PropsWithChildren } from "react";
import NextHead from "next/head";

const Head = ({ children }: PropsWithChildren) => {
  return (
    <NextHead>
      <title>Grafnews</title>
      <meta
        name="description"
        content="Nextjs Hacker News example with Clerk and Apollo"
      />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  );
};

export default Head;
