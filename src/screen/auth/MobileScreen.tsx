import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './RegisterStep1.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import LogoImage from './../../assets/images/flags/my.svg';
import { SvgUri } from 'react-native-svg';
import country from "./country.json";
const RegisterScreen = () => {
  const context={} as ThemeContextType;
  const [selected, setSelected] = useState('sms');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { styles, isDark } = getThemeStylesForClass(context, getStyles);
  
  const Item = ({ name, code, flag }: ItemProps) => {

    return (
      <View style={styles.item}>
        
        <View style={{ flex: 0.3 }}>
          <SvgUri
            width="40"
            height="30"
            uri={`https://flagcdn.com/${flag.toLowerCase()}.svg`}
          />
        </View>

        <View style={{ flex: 0.3, alignItems: "center" }}>
          <Text style={{ color: "#000" }}>{code}</Text>
        </View>

        <View style={{ flex: 0.4, alignItems: "flex-end" }}>
          <Text style={{ color: "#000" }}>{name}</Text>
        </View>

      </View>
    );
  };    

  return (   
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <View>
        <Text style={styles.font}>What's your number?</Text>
        <Text style={styles.txt}>enter Your phone number and </Text>
        <Text style={styles.txt}>we'll send you a varification code</Text>
    </View>
       <View style={{ alignItems: 'center' }}>
       <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
              style={styles.Container}
              onPress={() => setSelected('sms')}
           >
            <View style={styles.radio}>
              {selected === 'sms' && <View style={styles.select} />}
            </View>
                <Text style={styles.option}>Use SMS</Text>
            </TouchableOpacity>

          <TouchableOpacity
              style={[styles.Container, { marginLeft: 20 }]}
              onPress={() => setSelected('whatsapp')}>
            <View style={styles.radio}>
              {selected === 'whatsapp' && <View style={styles.select} />}
            </View>
               <Text style={styles.option}>Use WhatsApp</Text>
          </TouchableOpacity>
      </View>
        <View style={{flexDirection:"row"}}>
           <View style={[styles.num,{flex:0.2,flexDirection:"row",justifyContent:"center",alignContent:"center"}]}>
              <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flexDirection:"row"}}>
                <View style={{height:50,justifyContent:"center"}}>
                    <LogoImage style={{height:15,width:40}}/>
                </View>
                <View style={{height:50,justifyContent:"center"}}>
                  <View>
                        <Text style={{color:"#fff"}}>+60</Text>
                      </View>
                </View>
              </TouchableOpacity>
          <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-end"}}>
                        
                        <View style={styles.Cancel}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <View style={{justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end"}}>
                        <Text style={styles.textStyle}>cancel</Text>
                </View>
                            </Pressable>
                        </View>   
                    </View>
                    <View style={{}}>	
                            <FlatList
                    data={country}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <Item
                            name={item.name}
                            code={item.dial_code}
                            flag={item.code}
                        />
                    )}
                  />
                    </View>			
                </View>
            </View>
            </Modal>					
        </View>
        <View style={{flex:0.7}}>
          <TextInput
            style={styles.number}
            placeholder="Phone Number"
            placeholderTextColor="#e9e2e2"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>
    </View>
       <View>
          <TouchableOpacity style={styles.Touchable}>
             <Text style={styles.Text}>Next</Text>
          </TouchableOpacity>
       </View>
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default RegisterScreen;