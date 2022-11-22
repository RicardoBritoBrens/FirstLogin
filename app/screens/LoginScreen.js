import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import colors from '../../app/configurations/colors';
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
let customFonts = {
    'PoppinsBold': require('../../app/assets/fonts/poppins/Poppins-Bold.otf'),
    'PoppinsMedium': require('../../app/assets/fonts/poppins/Poppins-Medium.otf'),
    'PoppinsLight': require('../../app/assets/fonts/poppins/Poppins-Light.otf'),
};

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            username: '',
            password: '',
            defaultMessageWorkingFeatures: 'We are working to complete this feature as soon as possible.'
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

    handleLogIn = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    logInApp() {
        let fieldAreValid = false;
        fieldAreValid = this.state.username !== '';
        fieldAreValid = this.state.password !== '';
        if (fieldAreValid) {
            alert('Welcome Back Mr/Mss: ' + this.state.username + ', ' + this.state.defaultMessageWorkingFeatures)
        } else {
            alert('You most complete all the fields');
        }
    }

    logInGoogle() {
        alert(this.state.defaultMessageWorkingFeatures)
    }

    logInFacebook() {
        alert(this.state.defaultMessageWorkingFeatures)
    }

    workingHandler() {
        alert(this.state.defaultMessageWorkingFeatures)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>DUOLINGO</Text>
                <Text style={styles.sub_title}>     Login to{"\n"}your Account</Text>

                <View style={styles.form}>
                    <TextInput style={styles.input_username} onChangeText={newText => this.setState({ username: newText })} placeholderTextColor="white" placeholder="Username or email"></TextInput >
                    <TextInput style={styles.input_password} onChangeText={newText => this.setState({ password: newText })} secureTextEntry={true} placeholderTextColor="white" placeholder="Password"></TextInput >

                    <TouchableOpacity style={styles.forgot_button} onPress={() => this.workingHandler()}>
                        <Text style={styles.forgot_button_text}>Forgot your Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.login_button} onPress={() => this.logInApp()}>
                        <Text style={styles.login_button_text}>Log in</Text>
                    </TouchableOpacity>

                    <Text style={styles.or_login_with_text} >or log in with</Text>

                    <View style={styles.social_network_container_login}>
                        <TouchableOpacity style={styles.google_login} onPress={() => this.logInGoogle()}>
                            <Ionicons style={styles.google_icon} name="logo-google" />
                            <Text style={[styles.text_color]}>Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.facebook_login} onPress={() => this.logInFacebook()}>
                            <Ionicons style={styles.facebook_icon} name="logo-facebook" />
                            <Text style={[styles.text_color]}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text_policy}>By using Duolingo you agree to our <Text style={styles.text_bold} >Term of Service</Text> and {"\n"}                                      <Text style={styles.text_bold}>Privacy Policy.</Text></Text>
                </View>
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
        bottom: 220
    },
    sub_title: {
        color: colors.white,
        fontSize: 30,
        bottom: 130
    },
    form: {
        width: '80%',
        height: '10%'
    },
    input_username: {
        borderRadius: 10,
        backgroundColor: '#3A4859',
        width: '100%',
        height: 50,
        paddingLeft: 16,
        marginBottom: 10,
        color: colors.white
    },
    input_password: {
        borderRadius: 10,
        backgroundColor: '#3A4859',
        width: '100%',
        height: 50,
        paddingLeft: 16,
        color: colors.white
    },
    forgot_button: {
        width: '80%',
        height: 50,
        bottom: 15,
        left: 60
    },
    forgot_button_text: {
        top: 22,
        color: colors.white,
        textAlign: 'right',
        opacity: 0.5,
    },
    login_button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.primary,
        color: colors.white,
        alignItems: 'center',
    },
    login_button_text: {
        top: 15,
        color: colors.white,
        fontWeight: 'bold'
    },
    or_login_with_text: {
        color: colors.white,
        top: 12,
        textAlign: 'center',
        justifyContent: 'center',
    },
    social_network_container_login: {
        display: 'flex',
        flexDirection: 'row',
        top: 30
    },
    google_login: {
        color: colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 0,
        backgroundColor: '#3A4859',
        width: '50%',
        height: 50,
        right: 0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    google_icon: {
        fontSize: 18,
        color: colors.white,
    },
    facebook_login: {
        color: colors.white,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        backgroundColor: '#3A4859',
        width: '50%',
        height: 50,
        left: 0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    facebook_icon: {
        fontSize: 18,
        color: colors.white,
    },
    text_color: {
        color: colors.white,
        marginLeft: 10,
    },
    text_policy: {
        color: colors.white,
        top: 50,
        opacity: 0.5,
        fontSize: 12
    },
    text_bold: {
        fontWeight: 'bold',
    }
});