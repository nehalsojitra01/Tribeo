import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './MobileSceen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import Gallery from './../../assets/images/Gallery.svg';
import Leave from './../../assets/images/leave.svg'
import Pluse from '../../assets/images/pluse.svg'
import Threedot from '../../assets/images/threedot.svg'
import Eye from '../../assets/images/eye.svg'
import TopHeader  from './../../component/TopHeader'
const ContentScreen = () => {
    const context={} as ThemeContextType;
    const [selected, setSelected] = useState('sms');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  
    const DATA = [
        {
        title:"Content Name",
        descriptions:"Draft",
        },
        {
        title:"Published Content",
        descriptions:"Published",
        },
        {    
        title:"Scheduled Content",
        descriptions:"Scheduled day0,10;00",
        },
    ];
    type ItemProps = {title:string,descriptions:string};
    const Item = ({title,descriptions,color}:ItemProps) => (
        <View style={styles.item}>
            <View style={{flex:0.1}}>
                <View style={[styles.icon,{backgroundColor:color}]}>
                     <Gallery resizeMode="contain" style={{height:50,with:50}}/>
                </View>
            </View>
            <View style={{flex:0.8,alignItems:"flex-start",}}>
                <Text style={{fontFamily:"Quicksand-Bold",color:"#f7f7f4",fontSize:17}}>{title}</Text>
                <View style={{alignContent:"space-evenly"}}>
                    <Text style={{fontFamily:"Quicksand-Bold",color:"#3a9c43",fontSize:14}}>{descriptions}</Text>
                </View>
             </View>
                <View style={{flex:0.1}}>
                    <View style={[styles.icon,{backgroundColor:color}]}>
                        <TouchableOpacity>
                            <Threedot resizeMode="contain" style={{height:50,with:50}}/>
                        </TouchableOpacity>
                    </View>
                </View> 
        </View>  
    )
   
  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
           <TopHeader title={"Content Manager"}/>
            <View style={styles.cardDark}></View>
            <View style={styles.divider} /> 
                <View style={{flexDirection:"row",height:70,backgroundColor:"#272627",borderRadius:17,marginTop:12,padding:12}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <View style={styles.View}>
                            <View style={{flex:0.1}}>
                            <Pressable
                                style={[styles.button,styles.buttonClose]}
                                onPress={() => setModalVisible(true)}>
                                    <TouchableOpacity>
                                        <Pluse name="laptop-code" color="black" />
                                    </TouchableOpacity>
                            </Pressable>
                            </View>
                        </View>
                    </View>
                        <View style={{flex:0.8,justifyContent:"center"}}>
                            <Text style={{color:"#ffF",marginBottom:20,padding:5}}>Create a New Product</Text> */}
                        </View>
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
                    <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                        <View style={{ flex: 1, justifyContent: "flex-end",height: 100}}> 
                            <TouchableOpacity style={[styles.Touchable,{flexDirection:"row",backgroundColor:"#F63679",margin:10,borderRadius:10,padding:10}]}>
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
              
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default ContentScreen;