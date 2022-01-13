import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8118/graphql/",
  // uri: "https://movieql2.vercel.app/",
  cache: new InMemoryCache(),
});

export default client;
