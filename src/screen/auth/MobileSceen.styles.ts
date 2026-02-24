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
        iconn:{
            
            backgroundColor:'#5ad40f',
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
           cardDark1: {
            height: 5,
            width: 350,
            backgroundColor: '#323334',
            marginTop: 20,
            borderRadius:20,
            alignContent:"center",
            alignItems:"center"
           },
            cardDark3: {
            height: 1,
            width: 400,
            backgroundColor: '#323334',
            marginTop: 30,
            borderRadius:20,
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
          item: {
            flexDirection:"row",
            justifyContent:"flex-start",
            backgroundColor: '#373434',
            padding: 15,
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius:10 , 
            borderBottomWidth: 1,
            borderBottomColor: '#363631',
            alignItems:"center",
            fontFamily:"Quicksand-Bold",
        },
        Next:{
            color:"#ea1f7b",
            marginBottom:135,
            padding:5,
            fontFamily:"Quicksand-Bold",
        }
    });