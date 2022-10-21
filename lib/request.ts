import { GraphQLClient } from "graphql-request";

const domain =
  process.env.NODE_ENV === "production"
    ? "https://grafbase-nextjs-hackernews-with-clerk.grafbase-vercel.dev/api/graphql"
    : "http://localhost:3000/graphql";

export const graphQlRequestClient = new GraphQLClient(domain);
