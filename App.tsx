import * as React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import WelcomeScreen from './src/screen/auth/Welcome';
import HomeScreen from './src/screen/auth/Home';
import RegistrationStep1Screen from './src/screen/auth/RegisterStep1';
import RegistrationStep2Screen from './src/screen/auth/RegisterStep2';
import CourseManager from './src/screen/auth/CourseManager.tsx';
import CreateCourse from './src/screen/auth/CreateCourse.tsx';
import MobileScreen from './src/screen/auth/MobileScreen.tsx';
import CreateScreen from './src/screen/auth/Create.tsx';
import MobilCreateScreen from './src/screen/auth/MobilCreate.tsx'
import SedulingScreen from './src/screen/auth/Seduling.tsx'
import Contentmanager from './src/screen/auth/Contentmanager.tsx'
import PricingScreen from './src/screen/auth/Pricing.tsx'
const Stack = createNativeStackNavigator();function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="PricingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
       <Stack.Screen name="PricingScreen" component={PricingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RegisterStep1" component={RegistrationStep1Screen} />
      <Stack.Screen name="RegisterStep2" component={RegistrationStep2Screen} />
      <Stack.Screen name="MobileScreen" component={MobileScreen} />
      <Stack.Screen name="Create" component={CreateScreen} /> 
      <Stack.Screen name="MobilCreate" component={MobilCreateScreen} />
      <Stack.Screen name="Seduling" component={SedulingScreen} />  
      <Stack.Screen name="Contentmanager" component={Contentmanager}/>
      
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
