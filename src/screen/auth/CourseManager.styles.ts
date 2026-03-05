import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        CourseManagerScreenContainer:{
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center",
            marginBottom:10,
        },    
        font:{
        flex:0.8,justifyContent:"center",
        alignContent:"center",
        padding:10,
        margin:1,
            fontFamily:"Quicksand-Bold",
        fontSize:20
    
        },
          cardDark: {
            height: 1,
            width: 400,
             backgroundColor: '#323334',
            marginTop: 10,
            borderRadius:12
        }, 
          container:{
          flex:1,
          backgroundColor: 'black'
        },

        title: {
            fontSize: 20,
             },
         Icon:{
          flex:0.1,
          justifyContent:"center",
          alignItems:"center",
          padding:10  
        },
        BackIcon:{
            flex:0.1,
            justifyContent:"center",
            alignItems:"center",
            padding:10
        },
          Button: {
            backgroundColor: '#f5f2f3f2',
            marginTop: 30,
            borderRadius: 10,
            height: 60,
            maxHeight: 40,
            width: 160,
            alignItems:"center",
            justifyContent:"center",
            alignContent:"center",
          
        },
         buttonText: {
            textAlign: 'center',
            alignItems:"center",
            marginTop: 10,
            margin: 10,
            fontSize: 20,
            fontFamily:"Quicksand-Bold",
            color: '#0a0a0a',
         },
           Button2: {
            backgroundColor: '#3d3a3bf2',
            marginTop: 30,
            borderRadius: 10,
            height: 40,
            maxHeight: 40,
            width: 170,
            margin:10
        },
         buttonText2: {
            textAlign: 'center',
            marginTop: 10,
            margin: 10,
            fontSize: 20,
            fontFamily:"Quicksand-Bold",
            color: '#f9f4f4',
         },
          item: {
            flexDirection:"row",
            justifyContent:"flex-start",
            backgroundColor: '#2c2a2a',
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 15,
            borderRadius:10 , 
            borderBottomWidth: 2,
            borderBottomColor: '#363631',
            alignItems:"center",
            fontFamily:"Quicksand-Bold",
        },
        priview: {
            backgroundColor: '#3e3a3af2',
            marginTop: 30,
            borderRadius: 20,
            height: 40,
            width: 150,
            flexDirection: "row",   
            alignItems: "center",
            justifyContent: "center",
        },

        sell: {
            backgroundColor: '#e14579f2',
            margin: 30,
            borderRadius: 20,
            height: 40,
            width: 170,
            flexDirection: "row",  
            alignItems: "center",
            justifyContent: "center",
        },
        divider: {
            width: 1,
            height: 20,
            backgroundColor: "#fff",
            marginHorizontal: 8
        },
         icon: {
            height: 25,
            width: 25,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            },
              modalText: {
            marginBottom: 10,
            textAlign: 'center',
            backgroundColor:"#4f4c4c00"
        },
         modalView: {
            backgroundColor: '#2f2f2f',
            borderRadius: 20,
            padding: 15,
            width: 400,
            height:120,
            alignItems: 'center',
            elevation: 16,
            shadowColor: '#0f0f0f',
            shadowOffset: {
            width: 0,
            height: 2,
            },
        },
        textStyle: {
            flexDirection:"row",
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
         },
         modalText1: {
            backgroundColor:"#4f4c4c00",
            color:"#fff",
         },
        modalText2: {
            backgroundColor:"#4f4c4c00",
            color:"#fff",
            marginTop:5
        },
        centeredView: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: 'center',
        },

  
    });