import React from 'react';
import { enableScreens } from 'react-native-screens';
import { ApolloProvider } from '@apollo/client';
import { AppNavigation } from 'shared/navigation';
import apolloClient from 'shared/apollo';

enableScreens();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppNavigation />
    </ApolloProvider>
  );
};

export default App;
