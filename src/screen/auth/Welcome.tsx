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
    <Video
      source={require('../../assets/videos/video.mp4')}
      style={styles.backgroundVideo}
      repeat
      resizeMode="cover"
      muted
      ignoreSilentSwitch="obey"
    />
	<View>
		<Text style={styles.text}>Welcome Video</Text>
		<Text style={styles.text}>Template</Text>
	</View>
    <View style={styles.overlay}>
      <Text style={styles.textScreen}>KwaKwa</Text>
      <Text style={styles.Textsize}>
        Courses, challenges, and memberships from the people you follow
      </Text>

      <TouchableOpacity style={styles.Touchable}>
        <Text style={styles.Text}>Let's Go</Text>
      </TouchableOpacity>

      <Text style={styles.Textsize}>
        By tapping "Let’s Go" you agree to our Terms and Privacy Policy
      </Text>
    </View>

  </SafeAreaView>
</SafeAreaProvider>

		
    );  
};

export default WelcomeScreen;