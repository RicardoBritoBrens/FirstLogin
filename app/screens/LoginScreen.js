import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class LoginScreen extends Component {
    render() {
        const [fontsLoaded] = useFonts({
            PoppinsBold: require('./app/assets/fonts/poppins/Poppins-Bold.otf'),
            PoppinsMedium: require('./app/assets/fonts/poppins/Poppins-Medium.otf'),
            PoppinsLight: require('./app/assets/fonts/poppins/Poppins-Light.otf'),
        });
        return (

            <View>
                <Text>LoginScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})