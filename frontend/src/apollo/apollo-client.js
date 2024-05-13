// lib/apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => new ApolloClient({
  ssrMode: typeof window === 'undefined', 
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql', 
  }),
  cache: new InMemoryCache(),
});

export const client = createApolloClient();
