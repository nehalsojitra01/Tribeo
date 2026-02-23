import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        RegisterScreenContainer:{
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center",
            marginBottom:60,
        },    
        font:{
            textAlign:"center",
            marginTop:150,
            margin:10,
            fontSize:30,
            fontFamily:"Quicksand-Bold",
            color:"#fff"
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
            marginTop:12,
            margin:10,
            fontSize:20,
           fontFamily:"Quicksand-Bold",
        },
        txt:{
            textAlign:"center",
            margin:1,
            fontSize:20,
            fontFamily:"Quicksand-Bold",
            color:"#fff"
        },
         option: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            color:"#f2ecec",
            margin:20,
            fontFamily:"Quicksand-Bold",
        },
        select: {
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#adb2b8',
        },
        optionText: {
            marginLeft: 10,
            fontSize: 16,
            fontFamily:"Quicksand-Bold",
        },
            container:{
            flex:1,
            backgroundColor: 'black',
            fontFamily:"Quicksand-Bold",
          },
          Container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20, 
          },
          radio: {
            height: 22,
            width: 22,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#888e94',
            alignItems: 'center',
            fontFamily:"Quicksand-Bold",
            justifyContent: 'center', 
          },
          number: {
              width: 260,
              height: 50,
              borderWidth: 1,
              borderColor: '#504e4e',
              borderRadius: 10,
              padding:10,
              fontSize: 16,
              color: '#fff',
              backgroundColor: '#1c1c1c',
              marginTop: 20,
              margin:6,
              fontFamily:"Quicksand-Bold",
              },
          num:{
              height:50,
              width:20,
              borderWidth: 1,
              borderColor: '#504e4e',
              borderRadius: 10,
              fontSize: 16,
              color: '#fff',
              backgroundColor: '#1c1c1c',
              marginTop: 15,
              alignItems:"center",
              alignSelf:"center",
              justifyContent:"center",
              fontFamily:"Quicksand-Bold",
              },
          modalView:{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
                            },
                },
          buttonClose:
             {
               backgroundColor: '#2196F3',
             },
          textStyle: {
              color: '#000',
              fontWeight: 'bold',
              textAlign: 'center',
            },
          modalText: {
                marginBottom: 15,
                textAlign: 'center',
              },	
          item: {
              backgroundColor: '#f3f1f4ff',
              padding: 10,
              marginTop:10,
              flexDirection:"row",
              borderRadius:20,
              },
           title: {
              fontSize: 20,
                },
           logo:{
              height:30
                }
    });