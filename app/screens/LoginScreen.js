import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import colors from '../../app/configurations/colors';
import * as Font from 'expo-font';

let customFonts = {
    'PoppinsBold': require('../../app/assets/fonts/poppins/Poppins-Bold.otf'),
    'PoppinsMedium': require('../../app/assets/fonts/poppins/Poppins-Medium.otf'),
    'PoppinsLight': require('../../app/assets/fonts/poppins/Poppins-Light.otf'),
};

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async loadFontsAsync() {
        try {
            if (!customFonts) {
                await Font.loadAsync(customFonts);
                this.setState({ fontsLoaded: true });
            } else {
                this.setState({ fontsLoaded: true });
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.loadFontsAsync();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>DUOLINGO</Text>
                <Text style={styles.sub_title}>     Login to{"\n"}your Account</Text>

                <TextInput style={styles.input_username} placeholderTextColor="white" placeholder="Username or email"></TextInput >
                <TextInput style={styles.input_password} placeholderTextColor="white" placeholder="Password"></TextInput >

                <TouchableOpacity style={styles.forgot_button}>
                    <Text style={styles.forgot_button_text}>Forgot your Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button}>
                    <Text style={styles.login_button_text}>Log in</Text>
                </TouchableOpacity>

                <Text style={styles.or_login_with_text} >or log in with</Text>

                <View style={styles.social_network_container_login}>
                    <TouchableOpacity style={styles.google_login}>
                        <Text style={[styles.text_color]}>icon google</Text>
                        <Text style={[styles.text_color]}>or log in with</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.facebook_login}>
                        <Text style={[styles.text_color]}>facebook icon</Text>
                        <Text style={[styles.text_color]}>or log in with</Text>
                    </TouchableOpacity>
                </View>

                <Text>By using Duolingo you agree to our <Text>Term of Service</Text> and <Text>Term of Service</Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#091A2F",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.white,

        fontSize: 32,
        position: 'absolute',
        top: 120
    },
    sub_title: {
        color: colors.white,

        fontSize: 30,
        position: 'absolute',
        top: 250
    },
    input_username: {
        top: 126,
        borderRadius: 10,
        backgroundColor: '#3A4859',
        width: '80%',
        height: 50,
        paddingLeft: 16,
    },
    input_password: {
        borderRadius: 10,
        backgroundColor: '#3A4859',
        top: 136,
        width: '80%',
        height: 50,
        paddingLeft: 16,
    },
    forgot_button: {
        width: '80%',
        height: 50,
        position: 'absolute',
        bottom: 164,
    },
    forgot_button_text: {
        top: 15,
        color: colors.white,
        textAlign: 'right',
        opacity: 0.5,
    },
    login_button: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.primary,
        color: colors.white,
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
    },
    login_button_text: {
        top: 15,
        color: colors.white,

        fontWeight: 'bold'
    },
    or_login_with_text: {
        color: colors.white,
        position: "absolute",
        bottom: 50
    },
    social_network_container_login: {
        display: 'flex',
        flexDirection: 'row',
    },
    google_login: {
        color: colors.white,
        borderRadius: 10,
        backgroundColor: '#3A4859',
        width: '50%',
        height: 50,
        paddingLeft: 16,
    },
    facebook_login: {
        color: colors.white,
        borderRadius: 10,
        backgroundColor: '#3A4859',
        width: '50%',
        height: 50,
        paddingLeft: 16,
    },
    text_color: {
        color: colors.white
    }
});