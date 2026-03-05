import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent,Platform,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './ContentmanagerScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import TopHeader  from './../../component/TopHeader'
import Pluse from '../../assets/images/pluse.svg'
import Arrow from '../../assets/images/Arrow.svg'
import Eye from '../../assets/images/Eye.svg'
import { getColorScheme } from 'react-native/types_generated/Libraries/Utilities/Appearance';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
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
            <TopHeader/>
                <View style={styles.divider} /> 
                    <View style={{flexDirection:"row",height:70,backgroundColor:"#272627",borderRadius:17,marginTop:12,padding:12}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <View style={styles.View}>
                                <View style={{flex:0.1}}>
                                    <TouchableOpacity>
                                        <Pluse name="laptop-code" color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{flex:0.8,justifyContent:"center"}}>
                            <Text style={styles.View1}>Create a New Product</Text>
                        </View>
                                    
                        <View style={{flex:0.1,justifyContent:"center"}}>
                            <TouchableOpacity>
                                <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                            </TouchableOpacity>
                        </View>
                    </View>  

                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                </Modal>
                
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                   
                    <TouchableOpacity style={styles.Touchable}>
                        <View style={{flex:0.3}}>
                            <View style={styles.Eye}>
                                <Eye resizeMode="contain" />            
                            </View>
                        </View> 
                        <View style={{flex:0.7}}>
                            <Text style={styles.Text}>Preview Content</Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                
        </SafeAreaView>
    </SafeAreaProvider>
    );  
};

export default RegisterScreen;
const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: '#2f2f2f',
    borderRadius: 20,
    padding: 35,
    width: 420,
    height:210,
    alignItems: 'center',
    shadowColor: '#0f0f0f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalView1: {
    backgroundColor: '#2f2f2f',
    borderRadius: 20,
    padding: 25,
    width: 425,
    height:370,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#0f0f0f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 5,
    padding: 5,    

  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#161515',
    width:40,
    height:40,
    padding:7,
    borderRadius:30
  },
  buttonClose1: {
    backgroundColor: '#486ffd',
    width:40,
    padding:5,
    borderRadius:10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize:18,
    margin:12,
    marginBottom: 0,
    textAlign: 'justify',
    backgroundColor:"#4f4c4c00"
  },
});