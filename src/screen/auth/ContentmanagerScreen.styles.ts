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
          container:{
          flex:1,
          backgroundColor: 'black'
        },
        View:{
           padding:10 
        },
        View1:{
           padding:12,
           fontSize:16 
        },
        divider:{
            height:1,
            backgroundColor:'#4e4e4d'
        },
        Touchable:{
            backgroundColor:"#ee6d9df2",
            marginTop:50,
            borderRadius:50, 
            height:90,
            maxHeight:50,
            width:300,
            margin:50,
            fontSize:80
        },
        Text:{
            textAlign:"center",
            fontSize:20,
            fontFamily:"Quicksand-Bold",
            margin:-10
        },
        Eye:{
          margin:15,
          alignItems:"flex-start"
        },
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
    });
    
    
