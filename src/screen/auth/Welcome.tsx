import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import { getStyles } from './WelcomeScreen.styles';
import { getThemeStylesForClass } from '../../helpers/themeHelper';
import { ThemeContextType } from '../../component/ThemeContext';

const WelcomeScreen = () => {
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
                <Video
                    source={require('../../assets/videos/video.mp4')}
                    style={styles.backgroundVideo}
                    repeat
                    resizeMode="cover"
                    muted
                    ignoreSilentSwitch="obey"
                />
                <View style={styles.overlay}>
                    <Text style={styles.textScreen}>KwaKwa</Text>
                    <Text style={styles.textSize}>
                        Courses, challenges, and memberships from the people you follow
                    </Text>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.buttonText}>Let's Go</Text>
                    </TouchableOpacity>
                    <Text style={styles.textSize}>
                        By tapping "Let's Go" you agree to our Terms and Privacy Policy
                    </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default WelcomeScreen;