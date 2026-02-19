import * as React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import WelcomeScreen from './src/screen/auth/Welcome';
import HomeScreen from './src/screen/auth/Home';
import RegistrationStep1Screen from './src/screen/auth/RegisterStep1';
import RegistrationStep2Screen from './src/screen/auth/RegisterStep2';

const Stack = createNativeStackNavigator();function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RegisterStep1" component={RegistrationStep1Screen} />
      <Stack.Screen name="RegisterStep2" component={RegistrationStep2Screen} />
     
      
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
