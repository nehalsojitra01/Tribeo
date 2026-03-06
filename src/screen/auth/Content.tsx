import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './Content.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import TopHeader  from './../../component/TopHeader'
import Plus from './../../assets/images/plus.svg'


const CurrencyDropdown = () => {
    const [selectedValue, setSelectedValue] = useState("Paid");
    const context={} as ThemeContextType;
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader title={"Content Manager"}/>
           
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default CurrencyDropdown;