import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import * as Font from 'expo-font';
let customFonts = {
    'PoppinsBold': require('../../app/assets/fonts/poppins/Poppins-Bold.otf'),
    'PoppinsMedium': require('../../app/assets/fonts/poppins/Poppins-Medium.otf'),
    'PoppinsLight': require('../../app/assets/fonts/poppins/Poppins-Light.otf'),
};

export default class LoginScreen extends Component {
    state = {
        fontsLoaded: false,
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        return (
            <View>
                <Text>LoginScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})