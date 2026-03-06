import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        ContentContainer:{
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
            padding:20,
            marginTop:-50
        },
        
        container1: {
            paddingHorizontal: 20,
         },
        input2: {
            height: 50,
            width:280,
            backgroundColor:"#282C34",
            borderRadius: 10,
            padding:10,
            fontSize: 18,
            color: "#fff",
            fontFamily:"Quicksand-Bold",
        }, 
        container2: {
            paddingHorizontal: 30,
        },
        plus:
        {
            padding:-30,
            
        },
        Txt:{
            padding:5,
            color:"#fff"
            
        },
        container3: {
            flexDirection:"row",
            alignItems: "center",
        },
        dropdownButton: {
           backgroundColor:"#282C34",
            marginTop:-10,
            borderRadius: 10,
            padding:10,
            height:50,
            width:90,
        },
        buttonText: {
            color: "#fff",
            height:40,
            padding:10,
            fontSize: 16,
        },
        overlay: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginBottom:100,
            borderColor:"#fcf8f8",
        },
        dropdown: {
            backgroundColor:"#1d1e21",
            width: 100,
            borderRadius: 10,
            paddingVertical: 20,
        },
        item: {
            padding: 12,
        },
        itemText: {
            color: "#fff",
            fontSize: 16,
        }, 
         containerr: {
           backgroundColor:"#282C34",
            borderRadius: 10,
            margin: 20,
        },
        picker: {
        }, 
        modalText1:{
            padding:20,
            fontFamily:"Quicksand-Bold",
            color:"#fff"
        },
        modalOverlay:{
            flex:1,
            justifyContent:"flex-end",
            backgroundColor:"rgba(4, 3, 3, 0.77)"
            },
        bottomModal:{
            backgroundColor:"#1f232b",
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            padding:20
            },
        line:{
            height:4,
            width:40,
            backgroundColor:"#666",
            alignSelf:"center",
            borderRadius:5,
            marginBottom:20
            },
        title:{
            color:"#fff",
            fontSize:18,
            marginBottom:10,
            fontFamily:"Quicksand-Bold"
            },
        input:{
            backgroundColor:"#191919dd",
            borderRadius:10,
            padding:12,
            color:"#fff",
            marginTop:10
            },
        radioRow:{
            flexDirection:"row",
            alignItems:"center",
            marginRight:20
            },
        radio:{
            height:18,
            width:18,
            borderRadius:9,
            borderWidth:2,
            fontFamily:"Quicksand-Bold",
            borderColor:"#fff",
            marginRight:8
            },
        radioText:{
            color:"#dccaca",
            fontFamily:"Quicksand-Bold"
            },
        Btn:{
            backgroundColor:"#d46487",
            padding:15,
            borderRadius:20,
            alignItems:"center",
            marginTop:20,
            fontSize:20,
            fontFamily:"Quicksand-Bold"
        }
    });