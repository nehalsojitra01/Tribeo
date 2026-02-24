import { StyleSheet } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        // ─── Layout ───────────────────────────────────────────────
        container: {
            flex: 1,
            backgroundColor: 'black',
        },
        CreateScreenContainer: {
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        },
        divider: {
            marginTop: 10,
            height: 2,
            backgroundColor: '#373737',
        },
        divider1: {
            marginTop: 8,
            height: 1,
            backgroundColor: '#373737',
        },
        Text: {
            fontSize:32 ,
            marginTop:-10,
            padding:12,
            fontFamily: 'Quicksand-Bold'
        },
        text:{
            fontSize:20,
            padding:10,
            marginTop:-10
        },
        textt:{
            fontSize:16,
            padding:5,marginTop:-12
        },
        textsize:{
            fontSize:20,
            padding:10
        },
        Text1:{

        },
        // ─── Icon ────────────────────────────────────────────────
        icon:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent: 'flex-end',
            padding:10,
            marginTop: -58,
        },
        Icon:{
            marginTop:12,
            backgroundColor:'#fc0d68',
            borderRadius:12,
            height:35,
            width:45,
            alignItems:"center",
        },
        Icon1:{
            backgroundColor:'#0d85fc',
            borderRadius:12,
            height:45,
            width:45,
            alignItems:"center",
            justifyContent:"center"
        },
        Icon2:{
            backgroundColor:'#35bfff',
            borderRadius:12,
            height:45,
            width:45,
            alignItems:"center",
            justifyContent:"center"
        },
        Icon3:{
            backgroundColor:'#f87c08',
            borderRadius:12,
            height:45,
            width:45,
            alignItems:"center",
            justifyContent:"center"
        },
        backIcon:{
            alignItems:"flex-end",
            padding:6,    
        },
        wrapper: {
            margin:200,
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
            marginLeft: 12,
            fontWeight: '600',
        },
        inactiveText: {
            color: '#000',
            fontSize: 22,
            marginLeft: 10,
            fontWeight: '500',
        },
    });