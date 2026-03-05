import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './Pricing.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import TopHeader  from './../../component/TopHeader'
import Plus from './../../assets/images/plus.svg'

import { Picker } from '@react-native-picker/picker';
const CurrencyDropdown = () => {
    const [selectedValue, setSelectedValue] = useState("Paid");
    const context={} as ThemeContextType;
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
    const currenci = ["USD", "EUR", "GBP", "ILS", "AUD", "CAD", "BRL", "PLN", "INR"];
    const [selected, setSelected] = useState("USD");
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader title={"Pricing"}/>
            <View>
              <Text style={{color:"#fff",fontFamily:"",fontSize:20,padding:15}}>Participants Access</Text>
            </View>
            <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={{color:"#fff"}}
                    dropdownIconColor="#fff"
                    enabled={true}
                    mode='dropdown'
                    placeholder='Select String'
                >
                    <Picker.Item label="Free Challenge" value="Free" color='#fff' />
                    <Picker.Item label="Paid Challenge" value="Paid" color='#fff'/>
                </Picker>
                <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
                <View style={styles.containerr}>
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
                             <View style={{flexDirection:"row"}}>                
                                 <View style={{flex:0.9,alignContent:"center",padding:1}}>
                                     <Text style={styles.modalText1}>Free Challenge</Text>                                     </View>
                                 </View>
                                <View style={{flex:0.9}}>
                                    <Text style={styles.modalText2}>Paid Challenge</Text>
                                </View>
                        </View>
                 </View>
            </Modal>
             <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
                <View style={{}}>
                     <Text style={styles.TEXT}>Price(Required)</Text>
                </View>
             </View>
             <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                <View style={{flex:0.6}}>
                    <TextInput
                        placeholder="$10"
                        style={styles.input2}
                    />
                </View>
                <View style={{flex:0.2}}></View>
                <View style={{flex:0.3,padding:10}}>
                    <TouchableOpacity
                            style={styles.dropdownButton}
                            onPress={() => setVisible(true)}
                    >
                    <Text style={styles.buttonText}>{selected}</Text>
                    </TouchableOpacity>
                </View>
            </View>
         <Modal transparent visible={visible}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={currenci}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    setSelected(item);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      

          <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                 <View style={styles.plus}>
                    <TouchableOpacity style={{flexDirection:"row",alignContent:"center",padding:20}}>
                        <Plus resizeMode="contain" style={{height:50,width:50}}/>
                        <Text style={styles.Txt}>Create a Coupon</Text>
                    </TouchableOpacity>
                </View>
            </View>
                  
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default CurrencyDropdown;