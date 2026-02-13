import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './WelcomeScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';


const WelcomeScreen = () => {
	const context={} as ThemeContextType;
	const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  	return (
    	<SafeAreaProvider>
      		<SafeAreaView style={{}}>
             <StatusBar barStyle="dark-content" backgroundColor="#000" />
             <Text>Welcome Video</Text>            
      		</SafeAreaView>
    	</SafeAreaProvider>
    );  
};

export default WelcomeScreen;