# Hacker News => Grafbase ⨯ Clerk ⨯ Next.js

This example showcases a vintage version of Hacker News using Grafbase as data and api provider and Clerk as auth provider.

To understand how to connect Clerk as your Identity Provider with your Grafbase project &mdash; [Read the guide](https://grafbase.com/guides/using-clerk-as-your-identity-provider-with-grafbase)

## Getting Started

1. Run `npx degit grafbase/grafbase/examples/nextjs-clerk-hacker-news grafnews-with-clerk` to clone this example
2. Change directory into the new folder `cd grafnews-with-clerk`
3. Run `cp .env.example .env` to copy the example `.env.example` file to `.env` in the root of your project
4. Run `cp grafbase/.env.example grafbase/.env` to copy the example `.env.example` file to `.env` in the `grafbase` folder
5. Open `.env` in your code editor, and provide your Grafbase API endpoint and [Clerk frontend and backend API keys](https://dashboard.clerk.dev/last-active?path=api-keys)
6. Open `grafbase/.env` in your code editor, and provide your Clerk issuer URL
7. Run `npm install`, or `yarn install` to install dependencies
8. Run `npm run backend`, or `yarn backend` to start local dev server with your schema and the Codegen watch that auto generates ts types based on your schema changes.
9. Run `npm run dev`, or `yarn dev` (in a new terminal)
10. Visit [http://localhost:3000](http://localhost:3000)




