import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './CourseManager.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import TopHeader  from './../../component/TopHeader'
import TikIcon from './../../assets/images/tik.svg';
import Share from './../../assets/images/share.svg';
import Eye from './../../assets/images/eye.svg';
import Priview from './../../assets/images/Priview.svg'
import Arrow from './../../assets/images/Arrow.svg';
const RegisterScreen = () => {
    const context={} as ThemeContextType;
    const [selected, setSelected] = useState('sms');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  const DATA = [
          {
          title:"Basic Detail",
          Color:"#c9385a",
          },
          {
          title:"Scheduling",
          Color:"#d6c8d0",
          },
          {    
           title:"Pricing",
          Color:"#d6c8d0",
          },
          {
          title:"Content Manager",
          Color:"#d6c8d0",
          },
          {
          title:"lading page",
          Color:"#d6c8d0",
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
               <View style={{flex:0.1,alignItems:"flex-start",}}>
                  <Arrow width={16} height={16} />
               </View> 
          </View>
      )
    
  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader title={"Course Name"}/>
            <View style={styles.cardDark}></View>
              <View style={{flexDirection:"row",justifyContent:"center"}}>
                  <TouchableOpacity style={styles.Button} onPress={() => setModalVisible(true)}>
                      <Text style={styles.buttonText}>Creation</Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:"row",justifyContent:"center"}}>
                        
             </View>
                  <TouchableOpacity style={styles.Button2}>
                      <Text style={styles.buttonText2}>Dashborad</Text>
                  </TouchableOpacity>
              </View>
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
              <View style={{flexDirection:"row",justifyContent:"center"}}>
                  <TouchableOpacity style={styles.priview}>
                      <Share name="Share" size={20} color="black" />
                      <Text style={{padding:10,color:"#fff"}}>Preview</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sell}>
                      <Eye name="Eye" size={20} color="black" />
                      <Text style={{color:"#fff",padding:10}}>Sell</Text>
                  </TouchableOpacity>
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:0.1,alignContent:"center"}}>
                            <TouchableOpacity>
                                <Eye resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flex:0.9,alignContent:"center"}}>
                            <Text style={styles.modalText1}>Priview Landing Page</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:25}}>
                        <View style={{flex:0.1}}>
                            <TouchableOpacity>
                                <Priview resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.9}}>
                            <Text style={styles.modalText2}>Priview Course content</Text>
                        </View>
                    </View>
                    </View>
                    </View>
                 </Modal>

  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default RegisterScreen;