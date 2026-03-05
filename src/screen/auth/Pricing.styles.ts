import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        PricingContainer:{
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
            marginTop:-20
        },
        
        container1: {
            paddingHorizontal: 20,
         },
        input2: {
            height: 50,
            width:280,
            backgroundColor: "#1F2937",
            paddingLeft:10, 
            borderRadius: 10,
            paddingHorizontal: 20,
            fontSize: 18,
            color: "#fff",
            fontFamily:"Quicksand-Bold",
        }, 
      
         container2: {
            paddingHorizontal: 20,
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
            backgroundColor: "#1F2937", 
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
            backgroundColor: "#000",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginBottom:20
        },
        dropdown: {
            backgroundColor: "#070707",
            width: 150,
            borderRadius: 10,
            paddingVertical: 10,
        },
        item: {
            padding: 12,
        },
        itemText: {
            color: "#fff",
            fontSize: 16,
        }, 
         containerr: {
            backgroundColor: "#2f2f2f",
            borderRadius: 10,
            margin: 20,
        },
        picker: {
        }, 
        modalText1:{
            padding:20,
            color:"#fff"
        }
       
  });