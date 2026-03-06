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
import Eye from '../../assets/images/eye.svg'
import Stars from '../../assets/images/stars.svg'
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
                                    <Pressable
                                        style={[modalStyles.button, modalStyles.buttonClose]}
                                        onPress={() => setModalVisible(true)}>
                                        <TouchableOpacity>
                                            <Pluse name="laptop-code" color="black" />
                                        </TouchableOpacity>
                                    </Pressable>
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
                
                <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}> 
                    <TouchableOpacity style={styles.Touchable}>
                        <View style={{flex:0.3}}>
                            <View style={styles.Eye}>
                                <TouchableOpacity>
                                    <Eye resizeMode="contain" /> 
                                </TouchableOpacity>           
                            </View>
                        </View> 
                        <View style={{flex:0.7}}>
                            <Text style={styles.Text}>Preview Content</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>

                    <View style={styles.card2}>
                    <View style={{height:2,width:2,backgroundColor:'black'}}></View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                            }}>
                            <View style={modalStyles.centeredView}>
                                <View style={modalStyles.modalView}>
                                    <View style={{flexDirection:"row"}}>
                                        <View style={{flex:0.5,justifyContent:"flex-start"}}>
                                            <Text style={styles.Text1}>Content Name</Text>
                                        </View>
                                        <View style={{flex:0.5,justifyContent:"flex-end",flexDirection:"row"}}>
                                            <View style={[styles.icon,]}>
                                                <Stars resizeMode="contain" style={{height:100,with:100}}/>
                                            </View>
                                            <Text style={styles.Text2}>Generate</Text>
                                        </View>
                                    </View>
                                    <View style={styles.View2}>
                                        <Text style={styles.View1}>i.e the first episode</Text>
                                    </View>     
                                        <View style={styles.View3}>
                                            <TouchableOpacity style={styles.cancelBtn}>
                                            <Text style={styles.text}>Cancel</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.createBtn}>
                                            <Text style={styles.text}>Create</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </Modal>         
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
      width: 6,
      height: 4,
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
    padding: 6,    

  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2f2f2f',
    fontSize:12,
    padding:5,
    borderRadius:30,
    height:35
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