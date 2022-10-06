import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth } from "@clerk/nextjs";

const httpLink = new HttpLink({
  uri: "YOUR_GRAFBASE_API_URL",
});

const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const { getToken } = useAuth();

  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const token = await getToken({ template: "grafbase" });

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, [getToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
