import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        homeScreenContainer:{
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center"
        },
        text:{
            textAlign:"center",
            fontSize:25,
            margin:-120,
            marginTop:130,
            
        },    
        TextScreen:{
            fontSize:25,    
        },
        textScreen:{
            textAlign:"center",
            fontSize:30,
            marginTop:10,
            fontFamily:"Quicksand-Bold",
        },
        buttonScreen:{
            alignSelf: 'center', 
        },
        Touchable:{
            backgroundColor:"#ee6d9df2",
            marginTop:30,
            borderRadius:30, 
            height:50,
            maxHeight:50,
            width:300,
            margin:30,
            fontSize:80
        },
        Text:{
            textAlign:"center",
            marginTop:12,
            margin:10,
            fontSize:20,
            fontFamily:"Poppins-Regular",
            color:"#fff"
        },  
        Textsize:{
            textAlign:"center",
            fontSize:17
        },
        center:{
            textAlign:"center",
            fontSize:17
        },
        backgroundVideo:{
        ...StyleSheet.absoluteFillObject,
        },

    container:{
    flex:1,
    backgroundColor: 'black'
    },

    overlay:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    },

    });