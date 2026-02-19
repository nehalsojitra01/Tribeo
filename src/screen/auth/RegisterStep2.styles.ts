import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        wellScreenContainer:{
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
            fontFamily:"Poppins-Regular",
          
        },
        txt:{
            textAlign:"center",
            margin:1,
            fontSize:20,
            color:"#fff"
        },
         
          container:{
          flex:1,
          backgroundColor: 'black'
          },
              num:{
                height:60,
                width:50,
                borderWidth: 1,
                borderColor: '#504e4e',
                borderRadius: 10,
                fontSize: 16,
                color: '#f2e8e8',
                backgroundColor: '#1c1c1c',
                marginTop: 200,
                alignItems:"center",
                alignSelf:"center",
                justifyContent:"center",
                padding:20,
                margin:2
                },
                help:{
                  justifyContent:"flex-start",
                },
                
                textStyle: {
              color: '#000',
              fontWeight: 'bold',
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
               
    });