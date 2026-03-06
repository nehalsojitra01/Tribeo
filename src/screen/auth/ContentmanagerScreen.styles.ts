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
        container: {
          flex: 1,
          backgroundColor: "black",
        },
          container1:{
          flex:1,
          marginTop:2,
          backgroundColor:"#0000"
        },
        View:{
           padding:8,
           backgroundColor:"#aea4a400" 
        },
        View1:{
           padding:12,
           fontSize:16 
        },
        View2:{
          flexDirection:"row",
          height:70,
          width:400,
          backgroundColor:"#272627",
          borderRadius:17,
          marginTop:25,
          padding:10
        },
        View3:{
          flexDirection:"row",
          height:70,
          borderRadius:17,
          marginTop:5,
          padding:10,
          justifyContent:"center"
        },
        divider:{
          height:1,
          backgroundColor:'#4e4e4d'
        },
        Touchable:{
          backgroundColor: "#F63679",
          marginTop:30,
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
        Text1:{
          textAlign:"justify",
          fontSize:20,
          fontFamily:"Quicksand-Bold",
          alignItems:"flex-start",
          justifyContent:"flex-start",
          alignContent:"flex-start",
          margin:-15
        },
        Text2:{
          textAlign:"justify",
          fontSize:16,
          alignItems:"flex-start",
          justifyContent:"flex-start",
          alignContent:"flex-start",
          margin:-15,
          backgroundColor:"#f7054a00"
        },
        icon: {
          height:2,
          width: 50,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        },
        modalText: {
          marginBottom: 5,
          textAlign: 'center',
          backgroundColor:"#4f4c4c00"
        },
        Eye:{
          margin:15,
          alignItems:"flex-start"
        },
        wrapper: {
          marginTop: 20,
          flexDirection: 'row',
          borderRadius: 60,
          padding: 6,
          width: 320,
          height: 80,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent:"center"
        },
        activeText: {
          fontSize: 22,
          marginLeft: 8,
          fontWeight: '600',
        },
        container1: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0f1116",
        },
        buttonRow: {
          flexDirection: "row",
          marginTop:-1
        },
        cancelBtn: {
          backgroundColor: "#2A2F38",
          paddingVertical: 14,
          paddingHorizontal: 40,
          borderRadius: 30,
          width:190
        },
        createBtn: {
          backgroundColor: "#F63679",
          paddingVertical: 14,
          paddingHorizontal: 40,
          borderRadius: 30,
          width:190
        },
        text: {
          color: "#fff",
          fontSize: 18,
          fontWeight: "600",
          alignSelf:"center"
        },
    });
    
    
