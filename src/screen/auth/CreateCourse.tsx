import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './CreateCourse.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import TopHeader  from './../../component/TopHeader'
import Cemara from './../../assets/images/camera.svg'
import ImagePicker from "react-native-image-crop-picker";
import Course from './../src/assets/imagesCourse.svg'
import Genrate from './../src/assets/Genrate.svg'
import Photos from './../src/assets/Photos.png'

const RegisterScreen = () => {
    const context={} as ThemeContextType;
    const [selected, setSelected] = useState('sms');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  
    
  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader title={"Product Type"}/>
            <View style={styles.cardDark}></View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View style={{flex:0.9}}>
                <Text style={styles.TEXT}>Tital (Reduired)</Text>
            </View>
            <View style={{flex:0.1}}>
                </View>
                <Text style={styles.TEXT1}>Genrate</Text>
            </View>
            <View style={styles.container1}>
            <StatusBar />
            <TextInput
                placeholder="i.e. coding 101"
                style={styles.input}
            />
            </View>
            <View>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View style={{flex:0.9}}>
                <Text style={styles.TEXT2}>SubTitle</Text>
            </View>
            <View style={{flex:0.1}}>
                </View>
                <Text style={styles.TEXT1}>Genrate</Text>
            </View>
            <View style={styles.container2}>
            <StatusBar />
            <TextInput
                placeholder="i.e. Learning the Basic"
                style={styles.input2}
            />
            </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View style={{flex:0.9}}>
                <Text style={styles.TEXT3}>Cover Page</Text>
            </View>
            <View style={{flex:0.1}}>
                </View>
                <Text style={styles.TEXT1}>Genrate</Text>
            </View>
            <TouchableOpacity onPress={()=>{
                ImagePicker.openCamera({
                        width: 300,
                        height: 400,
                        cropping: true,
                        }).then((image) => {
                        console.log(image);
                        })
            }}>
            <View style={{flexDirection:"row",
                            justifyContent:"center",
                            height:170,
                            width:380,
                            alignContent:"center",
                             backgroundColor: "#1F2937",
                             borderRadius:15,
                             padding:10,
                             marginTop:-20}}>
                                 <View style={styles.Camara}>
                     <Cemara resizeMode="contain" style={{height:60,with:60}}/>
                        <Text style={styles.txt}>Add Photo</Text>
                </View>
            </View>
            </TouchableOpacity>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View style={{flex:0.9}}>
                <Text style={styles.TEXT3}>Description</Text>
            </View>
            <View style={{flex:0.1}}>
                </View>
                <Text style={styles.TEXT1}>Genrate</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",height:170,width:380,alignContent:"center", backgroundColor: "#1F2937",borderRadius:15,padding:15,marginTop:-20}}><Text style={{fontFamily:"Quicksand-Bold",fontSize:18,color:"#c1b4bc"}}>i.e. Lorem ipsum dolor sit ,Consectetur adipiscing  elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Ut enim ad minim veniam , quis nostrud Exercitati9on ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
            </View>
             <TouchableOpacity style={styles.Button}>
                 <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default RegisterScreen;