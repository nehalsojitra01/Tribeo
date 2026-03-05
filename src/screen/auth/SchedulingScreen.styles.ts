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
        title: {
            fontSize: 20,
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
        
        View:{
           padding:10 
        },
        View1:{
           padding:12,
           fontSize:16 
        },
        divider:{
            height:1,
            backgroundColor:'#363631'
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
            marginTop:6,
            margin:10,
            fontSize:20,
            fontFamily:"Quicksand-Bold",
        },
        Textt:{
            textAlign:"justify",
            marginTop:5,
            margin:10,
            fontSize:20,
            fontFamily:"Quicksand-Bold",
        },
        text:{
            textAlign:"justify",
            marginTop:10,
            margin:10,
            fontSize:15,
            fontFamily:"Quicksand-Bold",
        },
        centeredView: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    });