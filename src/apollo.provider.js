import { InMemoryCache, ApolloClient } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";
 
const cache = new InMemoryCache();
 
const apolloClient = new ApolloClient({
  cache,
  uri: "https://us-central1-challenge-334613.cloudfunctions.net/api/graphql",
});
 
export const provider = createApolloProvider({
  defaultClient: apolloClient,
});