import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './WelcomeScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SupportIcon from '../../assets/images/SupportIcon.svg';
const WelcomeScreen = () => {
	const context={} as ThemeContextType;
	const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  	return (
		
    <SafeAreaProvider>
  	<SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <Text>Home</Text>
	
		<View style={{flexDirection:"row",justifyContent:'center'}}>
            <SupportIcon resizeMode="contain" />
      	</View>
		<FontAwesome5 
			name="blogger" 
			size={24} 
			color="black" 
			
		/>
		<FontAwesome5 
			name="blogger" 
			size={24} 
			color="black" 
			
		/>
	<View style={styles.View}>
	<FontAwesome5 
			name="laptop-code" 
			size={24} 
			color="black" 
			
		/>
		<FontAwesome5 
			name="list-ul" 
			size={24} 
			color="black" 
			
		/>	
	</View>
	<View style={styles.view}>
		<Text style={styles.texxt}>Welcome to kwakwa</Text>
		<Text style={styles.texxt}>Evrything you wanted to know and more.</Text>
    	<View style={styles.Vieww}></View>
		<Text style={styles.Texxt}>
			<FontAwesome5 
			name="blogger" 
			size={24} 
			color="black" 
			
		/>New Contact (6)
		</Text>
	</View>
	<View style={styles.Vieww}></View>
    <Text style={styles.Ttext}>Demo cursor</Text>
	<Text style={styles.texxt}>check out some example </Text>
	<View style={styles.View}>
		<FontAwesome5 
			name="laptop-code" 
			size={24} 
			color="black" 
			
		/>
		<FontAwesome5 
			name="list-ul" 
			size={24} 
			color="black" 
			
		/>
	</View>
	<View style={styles.view}>
		<Text style={styles.texxt}>Welcome to kwakwa</Text>
		<Text style={styles.texxt}>Evrything you wanted to know and more.</Text>
    	<View style={styles.Vieww}></View>
		<Text style={styles.Texxt}>
			<FontAwesome5 
			name="blogger" 
			size={24} 
			color="black" 
			
		/>New Contact (6)</Text>
	</View>
	<View style={styles.wrapper}>
    <View style={styles.activeSection}>   
		<FontAwesome5 
			name="home" 
			size={24} 
			color="black" 
			
		/>
    <Text style={styles.activeText}>Home</Text>
    </View>
		<View style={styles.inactiveSection}>
			<FontAwesome5 
			name="plus-circle" 
			size={24} 
			color="black" 
		/>
        <Text style={styles.inactiveText}>Create</Text>
    </View>
    </View>
  </SafeAreaView>
</SafeAreaProvider>
    );  
};
export default WelcomeScreen;