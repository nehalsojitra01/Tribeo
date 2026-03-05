import { StyleSheet } from 'react-native';
import { View } from 'react-native/types_generated/index';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        
        // ─── Layout ───────────────────────────────────────────────
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#f4f6f7',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: "justify",
  },
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
            marginTop: 110,
            fontFamily: 'Quicksand-Bold'
        },
        textScreen: {
            textAlign: 'center',
            fontSize: 30,
            marginTop: 5,
            fontFamily: 'Quicksand-Bold',
        },
        textSize: {
            textAlign: 'center',
            fontSize: 17,
            fontFamily: 'Quicksand-Bold',
        },
        center: {
            textAlign: 'center',
            fontSize: 17,
        },
        buttonText: {
            textAlign: 'center',
            marginTop: 10,
            margin: 10,
            fontSize: 20,
            fontFamily: 'Poppins-Regular',
            color: '#fff',
        },
        cardText: {
            fontSize: 22,
            padding:4,
            fontFamily: 'Quicksand-Bold'
        },
        cardtext:{
            fontSize: 18,
            padding:4
        },
        cardTextLarge: {
            padding: 8,
            fontSize: 18,
        },
        cardTextLarge1: {
            padding: 8,
            fontSize: 18,
            fontFamily: 'Quicksand-Bold'
        },
        headingText: {
            fontSize: 30,
            fontFamily: 'Quicksand-Bold'
        },
        Text: {
            fontSize:30 ,
            marginTop:-20,
            padding:12,
            fontFamily: 'Quicksand-Bold'
        },
        textt:{
            fontSize:13, 
            fontFamily: 'Quicksand-Bold'   
        },
        textsize:{
            fontSize:18, 
            fontFamily: 'Quicksand-Bold'  
        },
        View:{
           padding:10 
        },
        View1:{
           padding:12,
           fontSize:16 
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
        card:{      
            flex:0.5,
            padding:8
        },
        card2:{
            flex:0.5,
            alignItems:"flex-end",
            padding:8
            
        },
        cardDark: {
            height: 200,
            width: 450,
            backgroundColor: '#222223',
            marginTop: 10,
            borderRadius:12,
        },
        divider: {
            marginTop: 12,
            height: 2,
            backgroundColor: '#fef1f1',
        },
        divider2: {
            marginTop: 12,
            height: 2,
            backgroundColor: '#dd3838',
        },
        border: {
            width: 420,
            height: 3,
            backgroundColor: '#f1e5e5',
        },

        // ─── Toggle / Segmented Control ───────────────────────────
        wrapper: {
            marginTop: 20,
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
        // ─── Icon ────────────────────────────────────────────────
        icon:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent: 'flex-end',
            padding:10,
            marginTop: -50,
        },
        Icon:{
            padding:-3,
        },
        container1: {
            flex: 1,
        },     
        title: {
            fontSize: 32,
        },
        divider1: {
            marginTop: 8,
            height: 4,
            backgroundColor: '#942323',
        },
        Iconn:{
            
            backgroundColor:'#fc0d68',
            borderRadius:12,
            height:45,
            width:45,
            alignItems:"center",
            justifyContent:"center"
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
    });