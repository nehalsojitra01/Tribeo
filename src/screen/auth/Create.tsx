import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getStyles } from './CreateScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import SupportIcon from '../../assets/images/SupportIcon.svg';
import CalenderIcon from '../../assets/images/Calendar.svg';
import AttachmentIcon from '../../assets/images/Attachment.svg'
import UserIcon from '../../assets/images/Users.svg'
import VideoIcon from '../../assets/images/Video.svg'
import Notificationbell from '../../assets/images/Notificationbell.svg'
import Arrow from '../../assets/images/Arrow.svg'
import {ScrollView, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const context = {} as ThemeContextType;
    const { styles } = getThemeStylesForClass(context, getStyles);

type ItemProps = {title: string};
    return ( 
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
    <View>
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
        </View>

        <View style={styles.divider}></View>

        <View>
            <Text style={styles.Text}>Monetize Youe audience</Text>
            <Text style={styles.text}>Select one of the follwing products to start generating revenues</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={{flexDirection:"row"}}>
            <View style={{flex:0.1}}>
                <View style={styles.Icon}>
                    <TouchableOpacity>
                        <View style={styles.Icon}>
                            <CalenderIcon resizeMode="contain" />
                        </View>   
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.8}}>
                <Text style={styles.textsize}>Interactive challenges</Text>
                <Text style={styles.textt}>A cohort-based learning experience where        all participancts progress together</Text> 
            </View>
            <View style={{flex:0.1,justifyContent:"center"}}>
                <TouchableOpacity>
                    <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                </TouchableOpacity>
            </View>
        </View>
       
        <View style={styles.divider1}></View>

        <View style={{flexDirection:"row"}}>
            <View style={{flex:0.1}}>
                <View style={styles.Icon}>
                    <TouchableOpacity>
                        <View style={styles.Icon1}>
                            <VideoIcon resizeMode="contain" />
                        </View>     
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.8}}>
                <Text style={styles.textsize}>Online Course</Text>
                <Text style={styles.textt}>A self-paced micro-learning journey for            participancts to enjoy on their own time </Text>
            </View>
            <View style={{flex:0.1,justifyContent:"center"}}>
                <TouchableOpacity>
                    <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.divider1}></View>

        <View style={{flexDirection:"row"}}>
            <View style={{flex:0.1}}>
                <View style={styles.Icon}>
                    <TouchableOpacity>
                        <View style={styles.Icon2}>
                            <UserIcon resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.8}}>
                <Text style={styles.textsize}>Membership Club</Text>
                <Text style={styles.textt}>A paid subscription-based channel where                      you can post content regularly</Text>
            </View> 
            <View style={{flex:0.1,justifyContent:"center"}}>
                <TouchableOpacity>
                    <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.divider1}></View>

        <View style={{flexDirection:"row"}}>
            <View style={{flex:0.1}}>
                <View style={styles.Icon}>
                    <TouchableOpacity>
                        <View style={styles.Icon3}>
                            <AttachmentIcon resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.8}}>
                <Text style={styles.textsize}>Digital Content</Text> 
                <Text style={styles.textt}>Sell PDFs,flies,eBooks,photos,videos,                           guides,and other resources</Text>  
            </View> 
            <View style={{flex:0.1,justifyContent:"center"}}>
                <TouchableOpacity>
                    <Arrow resizeMode="contain" style={{height:50,width:50}}/>
                </TouchableOpacity>
            </View>
        </View>

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