import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { LoginScreen } from 'modules/auth';

const Stack = createNativeStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default CustomerStack;
