import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './Pricing.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import TopHeader  from './../../component/TopHeader'
import Plus from './../../assets/images/plus.svg'
import RadioBotton from './../../assets/images/radiobotton.svg'
import Cheked from './../../assets/images/cheked.svg'
import { Picker } from '@react-native-picker/picker';
const CurrencyDropdown = () => {
    const [selectedValue, setSelectedValue] = useState("Paid");
    const context={} as ThemeContextType;
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);
    const currenci = ["USD", "EUR", "GBP", "ILS", "AUD", "CAD", "BRL", "PLN", "INR"];
    const [selected, setSelected] = useState("USD");
    const [visible, setVisible] = useState(false);
    const [checked,setChecked]=useState("");
    const [checked2,setCheked2]=useState("");
    const [modalVisible, setModalVisible] = useState(false);
     const [modalVisibleV2, setModalVisibleV2] = useState(false);
    

  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader title={"Pricing"}/>
            <View style={styles.cardDark}></View>
            <View>
              <Text style={{color:"#fff",fontFamily:"",fontSize:20,padding:15}}>Participants Access</Text>
            </View>
            <View style={{backgroundColor:"#282C34",padding:2,borderRadius:15,margin:15,marginBottom:15}}>
            <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={{color:"#fff",}}
                    dropdownIconColor="#fff"
                    enabled={true}
                    mode='dropdown'
                    placeholder='Select String'
               >
                    <Picker.Item label="Free Challenge" value="Free" color='#fff' />
                    <Picker.Item label="Paid Challenge" value="Paid" color='#fff'/>
                </Picker>  
                </View>
                <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",marginTop:1}}>
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
                <View style={{ flex:0.5}}>
                     <Text style={styles.TEXT}>Price(Required)</Text>
                </View>
             </View>
             <View style={{flexDirection:"row",justifyContent:"flex-start",padding:10}}>
                <View style={{flex:0.8}}>
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
        <TouchableOpacity
              style={{flexDirection:"row",alignContent:"center",padding:10}}
              onPress={() => setModalVisibleV2(true)}
            >
              <Plus resizeMode="contain" style={{height:50,width:50}}/>
              <Text style={styles.Txt}>Create a Coupon</Text>
        </TouchableOpacity>
                  <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleV2}
                      onRequestClose={() => setModalVisibleV2(false)}
                    >
                    <View style={styles.modalOverlay}>
                      <View style={styles.bottomModal}>
                        <View style={styles.line}></View>
                        <Text style={styles.title}>Coupon Code</Text>
                        <TextInput
                          placeholder="i.e. 10PERCENTOFF"
                          placeholderTextColor="#aaa"
                          style={styles.input}
                        />
                    <View style={{flexDirection:"row",marginTop:15}}>
                      <TouchableOpacity style={styles.radioRow}>
                          <TouchableOpacity onPress={()=>setChecked("percent")}>
                              {
                              checked=="percent"?
                                <Cheked resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>
                                :
                                <RadioBotton resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>
                            }
                        </TouchableOpacity>
                        <Text style={styles.radioText}>Percent</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.radioRow}>
                          <TouchableOpacity onPress={()=>setChecked("discount")}>
                            {
                              checked=="discount"?
                                <Cheked resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>

                                :
                                <RadioBotton resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>
                            }
                              
                          </TouchableOpacity>
                        <Text style={styles.radioText}>Discount Amount</Text>
                      </TouchableOpacity>
                    </View>
                      <TextInput
                        placeholder="max 50%"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                      />
                      <View style={{flexDirection:"row",marginTop:15}}>
                        <TouchableOpacity style={styles.radioRow}>
                           <TouchableOpacity onPress={()=>setCheked2("No Limit")}>
                              {
                              checked2=="No Limit"?
                                <Cheked resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>
                                :
                                <RadioBotton resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>
                            }
                        </TouchableOpacity>
                          <Text style={styles.radioText}>No Limit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radioRow}>
                           <TouchableOpacity onPress={()=>setCheked2("Limit")}>
                            {
                              checked2=="Limit"?
                                <Cheked resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>

                                :
                                <RadioBotton resizeMode="contain" style={{height:50,width:50,borderRadius:9,borderWidth:2,fontFamily:"Quicksand-Bold",borderColor:"#fff",  marginRight:8}}/>
                            }
                            </TouchableOpacity>
                          <Text style={styles.radioText}>Limit</Text>
                        </TouchableOpacity>
                      </View>
                        <TextInput
                          placeholder="Unlimited tickets"
                          placeholderTextColor="#aaa"
                          style={styles.input}
                        />
                      <TouchableOpacity
                        style={styles.Btn}
                        onPress={()=>setModalVisibleV2(false)}
                      >
                        <Text style={{color:"#fff"}}>Add Coupon</Text>
                      </TouchableOpacity>
                  </View>
               </View>
          </Modal>                
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default CurrencyDropdown;