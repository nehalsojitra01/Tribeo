import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './RegisterStep2.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import LogoImage from './../../assets/images/gh.svg';
import HelpIcon from './../../assets/images/24SupportIcon 1.svg'
import BackIcon from './../../assets/images/back.svg';
const wellScreen = () => {
    const context={} as ThemeContextType;
  const [selected, setSelected] = useState('sms');
  const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
    return (
        
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <View style={{padding:10}} >
   <View style={{flexDirection:"row",justifyContent:"flex-end",flex:0.2}}>
				<HelpIcon style={styles.help} resizeMode="contain"  />
			</View>	
      <View style={{flexDirection:"row",justifyContent:"flex-start",flex:0.5}}>
					<BackIcon style={styles.back} resizeMode="contain"  />
			</View>
     </View>  
    <View>
        <Text style={styles.font}>What's your number?</Text>
        <Text style={styles.txt}>please enter the code we've</Text>
        <Text style={styles.txt}>just send to +6048834875</Text>
    </View>
    <View style={{flexDirection:"row",justifyContent:"center"}}>
       <TextInput
                style={styles.num}
                placeholder=""
                placeholderTextColor="#302b2b"
                keyboardType="phone-pad"
              />
               <TextInput
                style={styles.num}
                placeholder=""
                placeholderTextColor="#302b2b"
                keyboardType="phone-pad"
              /> 
              <TextInput
                style={styles.num}
                placeholder=""
                placeholderTextColor="#302b2b"
                keyboardType="phone-pad"
              />
               <TextInput
                style={styles.num}
                placeholder=""
                placeholderTextColor="#302b2b"
                keyboardType="phone-pad"
              />
               <TextInput
                style={styles.num}
                placeholder=""
                placeholderTextColor="#302b2b"
                keyboardType="phone-pad"
              />
               <TextInput
                style={styles.num}
                placeholder=""
                placeholderTextColor="#302b2b"
                keyboardType="phone-pad"
              />
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

export default wellScreen;