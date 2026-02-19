import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getStyles } from './WelcomeScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';
import SupportIcon from '../../assets/images/SupportIcon.svg';

const HomeScreen = () => {
    const context = {} as ThemeContextType;
    const { styles } = getThemeStylesForClass(context, getStyles);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />

                <Text>Home</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <SupportIcon resizeMode="contain" />
                </View>

                <FontAwesome5 name="blogger" size={24} color="black" />
                <FontAwesome5 name="blogger" size={24} color="black" />

                <View style={styles.card}>
                    <FontAwesome5 name="laptop-code" size={24} color="black" />
                    <FontAwesome5 name="list-ul" size={24} color="black" />
                </View>

                <View style={styles.cardDark}>
                    <Text style={styles.cardText}>Welcome to kwakwa</Text>
                    <Text style={styles.cardText}>Everything you wanted to know and more.</Text>
                    <View style={styles.divider} />
                    <Text style={styles.cardTextLarge}>
                        <FontAwesome5 name="blogger" size={24} color="black" />
                        New Contact (6)
                    </Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.headingText}>Demo cursor</Text>
                <Text style={styles.cardText}>Check out some examples</Text>

                <View style={styles.card}>
                    <FontAwesome5 name="laptop-code" size={24} color="black" />
                    <FontAwesome5 name="list-ul" size={24} color="black" />
                </View>

                <View style={styles.cardDark}>
                    <Text style={styles.cardText}>Welcome to kwakwa</Text>
                    <Text style={styles.cardText}>Everything you wanted to know and more.</Text>
                    <View style={styles.divider} />
                    <Text style={styles.cardTextLarge}>
                        <FontAwesome5 name="blogger" size={24} color="black" />
                        New Contact (6)
                    </Text>
                </View>

                <View style={styles.wrapper}>
                    <View style={styles.activeSection}>
                        <FontAwesome5 name="home" size={24} color="black" />
                        <Text style={styles.activeText}>Home</Text>
                    </View>
                    <View style={styles.inactiveSection}>
                        <FontAwesome5 name="plus-circle" size={24} color="black" />
                        <Text style={styles.inactiveText}>Create</Text>
                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default HomeScreen;