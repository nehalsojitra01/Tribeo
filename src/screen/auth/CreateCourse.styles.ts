import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        MobileScreenContainer:{
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
        icon:{
            borderRadius:20,
            height:20,
            width:20,
            alignItems:"center",
        },
        BackIcon:{
            flex:0.1,
            justifyContent:"center",
            alignItems:"center",
            padding:10
        },
        Txt:{
            textAlign:"left",
            alignContent:"flex-start",
            alignItems:"flex-start",
            fontSize:20,
            fontFamily:"Quicksand-Bold",
            color:"#fff",
            padding:10
        },
        Next:{
            color:"#ea1f7b",
            marginBottom:135,
            padding:5,
            fontFamily:"Quicksand-Bold",
        },
        TEXT:{
             fontFamily:"Quicksand-Bold",
            fontSize:20,
            justifyContent:"flex-start",
            alignItems:"flex-start",
            color:"#fff",
            padding:30,
            marginTop:-20
        },
          TEXT1:{
            fontFamily:"Quicksand-Bold",
            fontSize:20,
            justifyContent:"flex-end",
            alignContent:"flex-end",
            alignItems:"flex-end",
            color:"#f00696",
            padding:10,
            marginTop:-15                      
        },
          icon2:{
            borderRadius:20,
            height:20,
            width:20,
            alignItems:"center",
        },
        container1: {
           
            paddingHorizontal: 20,
         },
        input: {
            width: 350,
            height: 45,
            backgroundColor: "#1F2937", 
            borderRadius: 15,
            paddingHorizontal: 20,
            fontSize: 18,
            color: "#fff",
            fontFamily:"Quicksand-Bold",
            marginTop:-25

        },
         TEXT2:{
            fontFamily:"Quicksand-Bold",
            fontSize:20,
            justifyContent:"flex-end",
            alignContent:"flex-end",
            alignItems:"flex-end",
            color:"#f7edf3",
            padding:35    ,
            marginTop:-15
                                        
        },
         TEXT3:{
            fontFamily:"Quicksand-Bold",
            fontSize:20,
            justifyContent:"flex-end",
            alignContent:"flex-end",
            alignItems:"flex-end",
            color:"#f7edf3",
            padding:35    ,
            marginTop:-20
         },
                               
         container2: {
            
            paddingHorizontal: 20,
        },
        input2: {
            width: 350,
            height: 45,
            backgroundColor: "#1F2937", 
            borderRadius: 15,
            paddingHorizontal: 20,
            fontSize: 18,
            color: "#fff",
            fontFamily:"Quicksand-Bold",
            marginTop:-25

        },
           Button: {
            backgroundColor: '#ee6d9df2',
            marginTop: 30,
            borderRadius: 30,
            height: 50,
            maxHeight: 50,
            width: 300,
            margin: 30,
        },
         buttonText: {
            textAlign: 'center',
            marginTop: 10,
            margin: 10,
            fontSize: 20,
            fontFamily:"Quicksand-Bold",
            color: '#fff',
        },
            Camara: {
            
            alignItems: "center",
            margin:10,
            justifyContent: "center",
        },
        txt:{
            fontSize:15,
            color:"#bcb0b0",
            fontFamily:"Quicksand-Bold",
            marginTop:15
        }
  });