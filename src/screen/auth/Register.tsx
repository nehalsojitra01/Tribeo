import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './WelcomeScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';

import Video from 'react-native-video';

const WelcomeScreen = () => {
    const context={} as ThemeContextType;
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
    return (
        
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <View>
        <Text style={styles.text}>What's your number?</Text>
        <Text style={styles.text}>enter Your phone number and </Text>
        <Text>we'll send you a varification code</Text>
    </View>
      <TouchableOpacity style={styles.Touchable}>
        <Text style={styles.Text}>Next</Text>
      </TouchableOpacity>
  </SafeAreaView>
</SafeAreaProvider>

        
    );  
};

export default WelcomeScreen;