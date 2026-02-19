import * as React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';


import WelcomeScreen from './src/screen/auth/Welcome';
import HomeScreen from './src/screen/auth/Home';
import RegistrationScreen from './src/screen/auth/Register';
import wellScreen from './src/screen/auth/Well';

const Stack = createNativeStackNavigator();function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Well"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Well" component={wellScreen} />
     
      
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
