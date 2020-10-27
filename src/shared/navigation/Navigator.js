import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'shared/auth';
import CustomerStack from './CustomerStack';
import AuthStack from './AuthStack';

const AppNavigator = () => {
  const { isLoading, isSignedIn } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {isSignedIn ? <CustomerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
