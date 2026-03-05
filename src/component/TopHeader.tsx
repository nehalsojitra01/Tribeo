import React, { useState } from 'react';
import {Button, ImageBackground, StyleSheet, Text, View,Image, Pressable, TurboModuleRegistry, Modal, FlatList, useWindowDimensions, Touchable, TouchableOpacity, StatusBar} from 'react-native';
import BackIcon from './../assets/images/back.svg';
import Notificationn from './../assets/images/Course.svg';
import { getStyles } from './../screen/auth/CreateCourse.styles';
import { getThemeStylesForClass } from '../helpers/themeHelper';
import { ThemeContextType } from './ThemeContext';
const TopHeader = ({title}) => {
    const context={} as ThemeContextType;
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
    return (
        <View style={{flexDirection:"row",height:50,justifyContent:"center",alignContent:"center",backgroundColor:"#000"}}>
            <View style={styles.BackIcon}>
                <TouchableOpacity>
                    <BackIcon resizeMode="contain" style={{height:50,width:50}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.font}>
                <Text style={{fontSize:25,color:"#fff"}}>{title}</Text>
                  
            </View>
            <View style={styles.Icon}>
                <TouchableOpacity>
                    <Notificationn resizeMode="contain" style={{height:50,width:50}}/>
                 </TouchableOpacity>
            </View>
        </View>		
    );
};

export default TopHeader;