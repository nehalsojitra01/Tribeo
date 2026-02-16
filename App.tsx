import * as React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';


import WelcomeScreen from './src/screen/auth/Welcome';
import HomeScreen from './src/screen/auth/Home';

const Stack = createNativeStackNavigator();function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={WelcomeScreen} />
      
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <>
        <NavigationContainer>
            <RootStack />
            <Toast />
        </NavigationContainer>
    </>
  );
}
