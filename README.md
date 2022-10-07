# Grafbase ⨯ Clerk ⨯ Next.js

This examples shows how to connect Clerk as your Identity Provider with your Grafbase project &mdash; [Read the guide](https://grafbase.com/guides/using-clerk-as-your-identity-provider-with-grafbase)

## Getting Started

1. Run `npx degit grafbase/grafbase/examples/nextjs-clerk grafbase-with-nextjs-clerk` to clone this example
2. Change directory into the new folder `cd grafbase-with-nextjs-clerk`
3. Run `cp .env.example .env` to copy the example `.env.example` file to `.env` in the root of your project
4. Run `cp grafbase/.env.example grafbase/.env` to copy the example `.env.example` file to `.env` in the `grafbase` folder
5. Open `.env` in your code editor, and provide your Grafbase API endpoint and [Clerk frontend and backend API keys](https://dashboard.clerk.dev/last-active?path=api-keys)
6. Open `grafbase/.env` in your code editor, and provide your Clerk issuer URL
7. Run `npm install`, or `yarn install` to install dependencies
8. Run `npx grafbase dev` to start local dev server with your schema
9. Run `npm run dev`, or `yarn dev` (in a new terminal)
10. Visit [http://localhost:3000](http://localhost:3000)


## Issues

### Viewer

#### Storing users manually

There is no way to hook Clerk and your Grafbase backend to automatically insert users on sign up, so you must hack it, and
create them manually on the login callback from clerk

#### Query your user

There is no way to query or store the user by certain prop, example, clerkId or username, or email, so I have to query
all the users and find the one that matches (email or username) client-side.

#### No createdAt/updatedAt

I have to manually store the ms in which the user was created.

