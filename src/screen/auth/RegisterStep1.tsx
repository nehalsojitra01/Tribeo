import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './RegisterStep1.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import LogoImage from './../../assets/images/flags/my.svg';

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
      onPress={() => setSelected('whatsapp')}
    >
      <View style={styles.radio}>
        {selected === 'whatsapp' && <View style={styles.select} />}
      </View>
      <Text style={styles.option}>Use WhatsApp</Text>
    </TouchableOpacity>

      </View>
      <View style={{flexDirection:"row"}}>
        <View style={[styles.num,{flex:0.2,flexDirection:"row",justifyContent:"center",alignContent:"center"}]}>
         <View style={{height:50,justifyContent:"center"}}>
            <LogoImage style={{height:15,width:40}}/>
         </View>
         
         <View style={{height:50}}>
          <TextInput
              placeholder="+60"
              style={{height:50}}
              placeholderTextColor="#e9e2e2"/>
         </View>
              
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
            <Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
						<View style={styles.Modalheader}>
							<Pressable>
								<Text style={{fontSize:18}}>Language</Text>
							</Pressable>
						</View>
						<View style={styles.Cancel}>
							<Pressable onPress={() => setModalVisible(!modalVisible)}>
								<Text style={styles.textStyle}>Cancel</Text>
							</Pressable>
						</View>   
					</View>
					<View style={styles.Subheader}>	
						<View style={{flexDirection:"row",justifyContent:'center',flex:0.1}}>
							<LogoImage style={styles.logo} resizeMode="contain" />
						</View>		
						<View style={{flex:0.1}}>
							<Text>US</Text>
						</View>
						<View style={{flex:0.8}}>
							<Text>United State</Text>
						</View>					
					</View>
					<View style={styles.Subheader}>     
					         
						<View style={{flex:0.1}}>
							<Text>GB</Text>
						</View>
						<View style={{flex:0.8}}>
							<Text>United Kingdom</Text>
						</View>
					</View>			
				</View>
			</View>
			</Modal>					
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