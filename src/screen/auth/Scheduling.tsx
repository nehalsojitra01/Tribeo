import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput,View,Image, ScrollView, useWindowDimensions, TouchableOpacity, Modal, Alert, Pressable, FlatList, StatusBar, Touchable, ImageBackground, Dimensions, FlatListComponent,Platform,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { getStyles } from './SchedulingScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import Arrow from './../../assets/images/arrowback.svg'
import TopHeader  from '../../component/TopHeader'
const SchedulingScreen = () => {
    const context={} as ThemeContextType;
    const [modalVisible, setModalVisible] = useState(false);
    const { styles, isDark } = getThemeStylesForClass(context, getStyles);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
};

const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

    type ItemProps = {title:string,descriptions:string};
    const Item = ({title,descriptions,color}:ItemProps) => (
        <View style={styles.item}>
            <View style={{flex:0.8,alignItems:"flex-start",}}>
                <Text style={{fontFamily:"Quicksand-Bold",color:"#f7f7f4",fontSize:17}}>{title}</Text>
                <View style={{alignContent:"space-evenly"}}>
                    <Text style={{fontFamily:"Quicksand-Bold",color:"#e90c9f",fontSize:14}}>{descriptions}</Text>
                </View>
            </View>
            <View style={{flex:0.1}}>
                <Arrow resizeMode="contain" style={{height:50,with:50,Color:"#f0eded"}}/>
            </View>
        </View>
        
    )
   
  return (   
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <TopHeader/>

            <View style={styles.divider} /> 
                <Text style={styles.text}>Start Date  (requride)</Text>
            <View style={{flexDirection:"row",height:70,backgroundColor:"#272627",borderRadius:17,marginTop:12,padding:12}}>
            
            <View style={{flexDirection:"row"}}>
                    
            </View>
                <View style={{flex:0.9}}>
                    <Text style={styles.View1}>Select Date</Text>
                </View>
            
                <View style={{flex:0.1,justifyContent:"center"}}>
                <Pressable
                    style={[modalStyles.button, modalStyles.buttonClose1]}
                    onPress={() => setModalVisible(true)}>
                    <TouchableOpacity>
                            <Arrow name="laptop-code" size={24} color="black" />
                    </TouchableOpacity>
                </Pressable>
                </View>
                </View>
            <View>
                <Text style={styles.Textt}>End Date</Text>
                <Text style={styles.text}>When setting an End Date,potential buyers Won't be able to purchase your challenge after this date,and existing Participant won't be able to add comments on episode beyond this date</Text>
            </View>
            <View style={{flexDirection:"row",height:70,backgroundColor:"#272627",borderRadius:17,marginTop:12,padding:12}}>
            
            <View style={{flexDirection:"row"}}>
                    
            </View>
                <View style={{flex:0.9}}>
                    <Text style={styles.View1}>Select Date</Text>
                </View>
            
                <View style={{flex:0.1,justifyContent:"center"}}>
                    <TouchableOpacity>
                        <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                    </TouchableOpacity>
                </View>
                </View>
            <View>
            </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView1}>
                        <View>
                            <Text style={styles.Text}>Select Date</Text>
                        </View> 
                    <View style={{ marginTop: 50 }}>
                        <Button onPress={() => showMode('date')} title="Show Date" />
                        <Text>Selected: {date.toLocaleString()}</Text>
                        {show && (
                            <DateTimePicker
                            value={date}
                            mode={mode}
                            onChange={onChange}
                            />
                         )}
                    </View>

                    <View>
                        <TouchableOpacity style={styles.Touchable}>
                            <Text style={styles.Text}>Select</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                </Modal>        
  </SafeAreaView>
</SafeAreaProvider>
    );  
};

export default SchedulingScreen;
const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
