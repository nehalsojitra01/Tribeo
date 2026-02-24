import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './MobileSceen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import TikIcon from './../../assets/images/tik.svg';
import Arrow from './../../assets/images/arrowback.svg'
import Leave from './../../assets/images/leave.svg'
import TopHeader  from './../../component/TopHeader'
import { getColorScheme } from 'react-native/types_generated/Libraries/Utilities/Appearance';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
const RegisterScreen = () => {
    const context={} as ThemeContextType;
    const [selected, setSelected] = useState('sms');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  
    const DATA = [
        {
        title:"Episode 1",
        descriptions:"Viewed",
        Color:"#1db934",
        },
        {
        title:"Episode 2",
        descriptions:"New Content Avalible",
        Color:"#e32d9a",
        },
        {    
        title:"Episode 3",
        descriptions:"New Content Avalible",
        Color:"#e32d9a",
        },
        {
        title:"Episode 4",
        descriptions:"New Content Avalible",
        Color:"#e32d9a",
        },
        {
        title:"Episode 5",
        descriptions:"New Content Avalible",
        Color:"#e32d9a",
        },
    ];

    type ItemProps = {title:string,descriptions:string};
    const Item = ({title,descriptions,color}:ItemProps) => (
        <View style={styles.item}>
            <View style={{flex:0.1}}>
                <View style={[styles.icon,{backgroundColor:color}]}>
                     <TikIcon resizeMode="contain" style={{height:50,with:50}}/>
                </View>
            </View>
            <View style={{flex:0.8,alignItems:"flex-start",}}>
                <Text style={{fontFamily:"Quicksand-Bold",color:"#f7f7f4",fontSize:17}}>{title}</Text>
                <View style={{alignContent:"space-evenly"}}>
                    <Text style={{fontFamily:"Quicksand-Bold",color:"#e90c9f",fontSize:14}}>{descriptions}</Text>
                </View>
            </View>
            <View style={{flex:0.1}}>
                <Arrow resizeMode="contain" style={{height:50,with:50,Color:"#f0eded"}}/>
            </View>
        </View>
        
    )
   
  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader/>
            <View style={styles.cardDark}></View>
                <Text style={styles.Txt}>35% Complated</Text>
                <View style={styles.cardDark1}></View>
                <View style={styles.cardDark3}></View>
           <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <Item
                    descriptions={item.descriptions}
                    title={item.title}
                    color={item.Color}
                />
            )}
        />    
         <View style={styles.cardDark}></View>
            <View style={{flexDirection:"row",padding:10}}>
                <Leave resizeMode="contain" style={{height:50,with:50,Color:"#f0eded"}}/>
                <Text style={styles.Next}>Leave Course </Text>
            </View>
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default RegisterScreen;