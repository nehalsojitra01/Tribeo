import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './ViewCourseScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import LogoImage from './../../assets/images/ad.svg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ViewCourseScreen = () => {
    const context={} as ThemeContextType;
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
    return (
        
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <View style={styles.border}></View>
    <Text>
        <FontAwesome5 
            name="home" 
            size={24} 
            color="black" 
            solid
        />Episod number
    </Text>
        <FontAwesome5 
            name="home" 
            size={24} 
            color="black" 
            solid
        />
        <View style={styles.Viiew}></View>            
                
    
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default ViewCourseScreen;