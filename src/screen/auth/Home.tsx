import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getStyles } from './WelcomeScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import SupportIcon from '../../assets/images/SupportIcon.svg';
import NotificationIcon from '../../assets/images/NotificationIcon.svg';
import ListIcon from '../../assets/images/ListIcon.svg'
import Notificationbell from '../../assets/images/Notificationbell.svg'

const HomeScreen = () => {
    const context = {} as ThemeContextType;
    const { styles } = getThemeStylesForClass(context, getStyles);
const data = [
  { id: 1, title: "Welcome to kwakwa" },
  { id: 2, title: "Demo cursor" },
];
    return (
        
        <SafeAreaProvider>
    <View>
        {data.map((item) => (
        <View key={item.id} style={styles.card}>
            <Text>{item.title}</Text>
        </View>
        ))}
    </View>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
				<Text style={styles.Text}>Home</Text>
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
                <View style={{flexDirection:"row",height:200,backgroundColor:"#fff",borderRadius:15}}>  
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <FontAwesome5 name="laptop-code" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card2}>
                        <TouchableOpacity>
                            <FontAwesome5 name="list-ul" size={24} color="black" />
                        </TouchableOpacity>
                    </View>  
                </View>      
				
                <View style={styles.cardDark}>
                    <Text style={styles.cardText}>Welcome to kwakwa</Text>
                    	<Text style={styles.cardtext}>Everything you wanted to know and more.</Text>
                    <View style={styles.divider} />
                    	<Text style={styles.cardTextLarge}>
                    <View style={styles.Icon}>
                        <TouchableOpacity>
                    	    <NotificationIcon resizeMode="contain" />
                        </TouchableOpacity>
                	</View>
                        New Contact (6)
                    </Text>
                </View>
                <View style={styles.divider} />

                <Text style={styles.headingText}>Demo cursor</Text>
                <Text style={styles.cardText}>Check out some examples</Text>

                <View style={{flexDirection:"row",height:200,backgroundColor:"#fff",borderRadius:15}}>
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <FontAwesome5 name="laptop-code" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card2}>
                        <TouchableOpacity>
                            <FontAwesome5 name="list-ul" size={24} color="black" />
                        </TouchableOpacity>
                    </View>  
                </View>
                <View style={styles.cardDark}>
                    <Text style={styles.cardText}>Welcome to kwakwa</Text>
                    <Text style={styles.cardtext}>Everything you wanted to know and more.</Text>
                    <View style={styles.divider} />
                    <Text style={styles.cardTextLarge}>
                    <View style={styles.Icon}>
                        <TouchableOpacity>
                    	    <NotificationIcon resizeMode="contain" />
                        </TouchableOpacity>
                	</View>
                        New Contact (6)
                    </Text>
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