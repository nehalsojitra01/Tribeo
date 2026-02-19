import { StyleSheet } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        // ─── Layout ───────────────────────────────────────────────
        container: {
            flex: 1,
            backgroundColor: 'black',
        },
        homeScreenContainer: {
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        },
        overlay: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingBottom: 50,
        },

        // ─── Text ─────────────────────────────────────────────────
        text: {
            textAlign: 'center',
            fontSize: 25,
            margin: -120,
            marginTop: 130,
        },
        textScreen: {
            textAlign: 'center',
            fontSize: 30,
            marginTop: 10,
            fontFamily: 'Quicksand-Bold',
        },
        textSize: {
            textAlign: 'center',
            fontSize: 17,
        },
        center: {
            textAlign: 'center',
            fontSize: 17,
        },
        buttonText: {
            textAlign: 'center',
            marginTop: 12,
            margin: 10,
            fontSize: 20,
            fontFamily: 'Poppins-Regular',
            color: '#fff',
        },
        cardText: {
            fontSize: 18,
            marginTop: 7,
        },
        cardTextLarge: {
            padding: 16,
            fontSize: 20,
        },
        headingText: {
            fontSize: 30,
        },

        // ─── Buttons & Touchables ─────────────────────────────────
        buttonScreen: {
            alignSelf: 'center',
        },
        touchable: {
            backgroundColor: '#ee6d9df2',
            marginTop: 30,
            borderRadius: 30,
            height: 50,
            maxHeight: 50,
            width: 300,
            margin: 30,
        },

        // ─── Cards / Views ────────────────────────────────────────
        card: {
            height: 200,
            width: 422,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            padding: 12,
            marginTop: 12,
        },
        cardDark: {
            height: 140,
            width: 420,
            backgroundColor: '#04102b',
            marginTop: -6,
        },
        divider: {
            marginTop: 12,
            height: 2,
            backgroundColor: '#eee9e9',
        },
        border: {
            width: 420,
            height: 3,
            backgroundColor: '#f1e5e5',
        },

        // ─── Toggle / Segmented Control ───────────────────────────
        wrapper: {
            marginTop: 15,
            flexDirection: 'row',
            backgroundColor: '#E6E6E6',
            borderRadius: 60,
            padding: 6,
            width: 320,
            height: 80,
            alignSelf: 'center',
            alignItems: 'center',
        },
        activeSection: {
            flex: 1,
            backgroundColor: '#FF2E74',
            borderRadius: 60,
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inactiveSection: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        activeText: {
            color: '#fff',
            fontSize: 22,
            marginLeft: 8,
            fontWeight: '600',
        },
        inactiveText: {
            color: '#000',
            fontSize: 22,
            marginLeft: 8,
            fontWeight: '500',
        },

        // ─── Video ────────────────────────────────────────────────
        backgroundVideo: {
            ...StyleSheet.absoluteFill,
        },
    });