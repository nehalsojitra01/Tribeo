import { StyleSheet, Touchable, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-svg';

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        homeScreenContainer:{
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center"
        },
        border:
        {
            width:12,
            height:12
        }
        
});
