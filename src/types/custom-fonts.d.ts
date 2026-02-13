import 'react-native';

declare module 'react-native' {
    interface TextStyle {
        fontFamily?:
        | 'Poppins-Regular'
        | 'Poppins-Medium'
        | 'Poppins-Bold'
        | string;
    }
}
