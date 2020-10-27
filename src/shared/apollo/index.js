import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AppConfig from 'shared/config';
import { useAuth } from 'shared/auth';

const httpLink = createHttpLink({
  uri: AppConfig.GRAPHQL_SERVER,
});

const authLink = setContext(async (_, { headers }) => {
  const { authToken } = useAuth();

  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  };
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache,
});

console.log('AppConfig', AppConfig.GRAPHQL_SERVER);

export default apolloClient;
