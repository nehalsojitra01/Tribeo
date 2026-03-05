import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList,Alert, Modal,Pressable} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getStyles } from './MobilCreateScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import SupportIcon from '../../assets/images/SupportIcon.svg';
import NotificationIcon from '../../assets/images/NotificationIcon.svg';
import ListIcon from '../../assets/images/ListIcon.svg'
import Notificationbell from '../../assets/images/Notificationbell.svg'
import Share from '../../assets/images/share.svg'
import Userss from '../../assets/images/Userss.svg'
import Pluse from '../../assets/images/pluse.svg'
import Arrow from '../../assets/images/Arrow.svg'
import Setting from '../../assets/images/setting.svg'
import Eye from '../../assets/images/Eye.svg'
import Delete from '../../assets/images/delete.svg'
import Copy from '../../assets/images/Copy.svg'
import CalenderIcon from '../../assets/images/Calendar.svg';
import AttachmentIcon from '../../assets/images/Attachment.svg'
import UserIcon from '../../assets/images/Users.svg'
import VideoIcon from '../../assets/images/Video.svg'
import {ScrollView, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleV2, setModalVisibleV2] = useState(false);

    const context = {} as ThemeContextType;
    const { styles } = getThemeStylesForClass(context, getStyles);
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '',
  },
];

type ItemProps = {title: string};

const Item = ({}: ItemProps) => (
<>
</>
);
    return ( 
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Text style={styles.Text}>Create</Text>
                <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <SupportIcon resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <Notificationbell resizeMode="contain"/>
                        </View> 
                    </TouchableOpacity>        
                </View>   

                <View style={styles.divider} /> 
                <View style={{flexDirection:"row",height:70,backgroundColor:"#272627",borderRadius:17,marginTop:12,padding:12}}>

                    <View style={{flexDirection:"row"}}>
                        <View style={styles.View}>
                            <View style={{flex:0.1}}>
                                <TouchableOpacity>
                                    <Pluse name="laptop-code" color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                        <View style={{flex:0.8}}>
                            <Text style={styles.View1}>Create a New Product</Text>
                        </View>
                    
                        <View style={{flex:0.1,justifyContent:"center"}}>
                            <TouchableOpacity>
                                <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                            </TouchableOpacity>
                        </View>
                    
                </View>  
                <View style={{flexDirection:"row",height:200,backgroundColor:"#fff",borderRadius:15,marginTop:12}}>  
                    <View style={styles.card}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleV2}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisibleV2(!modalVisibleV2);
                }}>
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView1}>
                        <View style={{flexDirection:"row"}}>
                        <View style={{flex:0.2}}>
                            <View style={styles.Icon}>
                                <TouchableOpacity>
                                    <View style={styles.Iconn}>
                                        <CalenderIcon resizeMode="contain" />
                                    </View>   
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:0.7}}>
                            <Text style={styles.textsize}>Interactive challenges</Text>
                            <Text style={styles.textt}>A cohort-based learning experience where all participancts progress together</Text> 
                        </View>
                        <View style={{flex:0.1,justifyContent:"center",alignItems:"flex-end"}}>
                            <TouchableOpacity>
                                <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.divider2}></View>

                        <View style={{flexDirection:"row"}}>
                            <View style={{flex:0.2}}>
                                <View style={styles.Icon}>
                                    <TouchableOpacity>
                                        <View style={styles.Icon1}>
                                            <VideoIcon resizeMode="contain" />
                                        </View>     
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:0.7}}>
                                <Text style={styles.textsize}>Online Course</Text>
                                <Text style={styles.textt}>A self-paced micro-learning journey for participancts to enjoy on their own time </Text>
                            </View>
                            <View style={{flex:0.1,justifyContent:"center",alignItems:"flex-end"}}>
                                <TouchableOpacity>
                                    <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    <View style={styles.divider2}></View>

                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:0.2}}>
                            <View style={styles.Icon}>
                                <TouchableOpacity>
                                    <View style={styles.Icon2}>
                                        <UserIcon resizeMode="contain" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:0.7}}>
                            <Text style={styles.textsize}>Membership Club</Text>
                            <Text style={styles.textt}>A paid subscription-based channel wher you can post content regularly</Text>
                        </View> 
                        <View style={{flex:0.1,justifyContent:"center",alignItems:"flex-end",}}>
                            <TouchableOpacity>
                                <Arrow resizeMode="contain" style={{height:50,width:50,}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.divider2}></View>
                    
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:0.2}}>
                            <View style={styles.Icon}>
                                <TouchableOpacity>
                                    <View style={styles.Icon3}>
                                        <AttachmentIcon resizeMode="contain" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:0.7}}>
                            <Text style={styles.textsize}>Digital Content</Text> 
                            <Text style={styles.textt}>Sell PDFs,flies,eBooks,photos,videos, guides,and other resources</Text>  
                        </View> 
                        <View style={{flex:0.1,justifyContent:"center",alignItems:"flex-end"}}>
                            <TouchableOpacity>
                                <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    </View>
                    </View>
                </Modal>
                <Pressable
                    style={[modalStyles.button, modalStyles.buttonClose1]}
                    onPress={() => setModalVisibleV2(true)}>
                    <TouchableOpacity>
                            <FontAwesome5 name="laptop-code" size={24} color="black" />
                    </TouchableOpacity>
                </Pressable>
                        
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
                    <View style={{flex:0.1}}>
                        <TouchableOpacity style={modalStyles.modalText}>
                            <Setting resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.9}}>
                        <Text style={modalStyles.modalText}>Challenge Manager</Text>
                    </View>
                    </View>

                    <View style={{flexDirection:"row"}}>
                    <View style={{flex:0.1}}>
                        <TouchableOpacity style={modalStyles.modalText}>
                            <Eye resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.9}}>
                        <Text style={modalStyles.modalText}>View as Participant</Text>
                    </View>
                    </View>

                    <View style={{flexDirection:"row"}}>
                    <View style={{flex:0.1}}>
                        <TouchableOpacity style={modalStyles.modalText}>
                            <Copy resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.9}}>
                        <Text style={modalStyles.modalText}>Duplicate Challenge</Text>
                    </View>
                    </View>
                    
                    <View style={{flexDirection:"row"}}>
                    <View style={{flex:0.1}}>
                        <TouchableOpacity style={modalStyles.modalText}>
                            <Delete resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.9}}>
                        <Text style={modalStyles.modalText}>Delete Content</Text>
                    </View>
                    </View>
                    
                </View>
            </View>
            </Modal>
        <Pressable
            style={[modalStyles.button, modalStyles.buttonClose]}
            onPress={() => setModalVisible(true)}>
            <TouchableOpacity>
                    <FontAwesome5 name="list-ul" size={24} color="black" />
            </TouchableOpacity>
        </Pressable>
                
            </View>  
            </View>      
                <View style={styles.cardDark}>
                    <Text style={styles.cardText}>Course Title</Text>
                    <Text style={styles.cardtext}>Course subtitle</Text>
                    <View style={styles.divider} />
                    <Text style={styles.cardTextLarge1}>
                    <View style={styles.Icon}>
                        <TouchableOpacity>
                            <Share resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                        Share Your Course
                    </Text>
                    <View style={styles.divider} />
                    <Text style={styles.cardTextLarge}>
                    <View style={styles.Icon}>
                        <TouchableOpacity>
                            <Userss resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                        1 Participant . $0.00 Revenue
                    </Text>
                    
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
                <ScrollView showsVerticalScrollIndicator={true}> 
                </ScrollView>
                <View style={styles.wrapper}>
                    <View style={styles.activeSection}>
                        <TouchableOpacity>
                            <FontAwesome5 name="home" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.activeText}>Home</Text>
                    </View>
                    <View style={styles.inactiveSection}>
                        <TouchableOpacity>
                            <FontAwesome5 name="plus-circle" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.inactiveText}>Create</Text>
                    </View>
                </View> 
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default HomeScreen;
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
