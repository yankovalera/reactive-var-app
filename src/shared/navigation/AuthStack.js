import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { LoginScreen } from 'modules/auth';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
