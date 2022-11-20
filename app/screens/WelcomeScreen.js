import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import colors from '../../app/configurations/colors';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

let customFonts = {
  'PoppinsBold': require('../../app/assets/fonts/poppins/Poppins-Bold.otf'),
  'PoppinsMedium': require('../../app/assets/fonts/poppins/Poppins-Medium.otf'),
  'PoppinsLight': require('../../app/assets/fonts/poppins/Poppins-Light.otf'),
};

export default class WelcomeScreen extends Component {
  state = {
    fontsLoaded: false
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  onPressStartedButton() {
    this.props.navigation.goBack();
    this.props.navigation.navigate('LoginScreen');
  }

  onPressAccountButton() {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {

    return (
      <ImageBackground source={require('../../app/assets/women-background.jpeg')} style={styles.container} >

        {/* Background */}
        <View style={styles.backgroundOverlay} />

        {/* Title */}
        <Text style={styles.title}>DUOLINGUO</Text>

        {/* SubTitle */}
        <Text style={styles.subTitle}>Learn languages{"\n"}from Content You{"\n"}            Love</Text>

        {/* Devider */}
        <View style={styles.line} />

        {/* Slogan */}
        <Text style={styles.slogan}>   The Fast, Fun and{"\n"}effective way to Learn</Text>

        {/* Get started for free button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={this.onPressStartedButton}>
          <Text style={styles.getStartedButtonText}>Get started for free!</Text>
        </TouchableOpacity>

        {/* Already have an account button */}
        <TouchableOpacity style={styles.alreadyAccountButton} onPress={this.onPressAccountButton}>
          <Text style={styles.alreadyAccountButtonText}>I already have an account</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '50%',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary_background,
    opacity: 0.85
  },
  fontColor: {
    color: colors.white,
    fontFamily: 'PoppinsLight'
  },
  title: {
    color: colors.white,
    fontFamily: 'PoppinsBold',
    fontSize: 32,
    position: 'absolute',
    top: 120
  },
  subTitle: {
    color: colors.white,
    fontFamily: 'PoppinsMedium',
    fontSize: 30,
    position: 'absolute',
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '68%',
    opacity: 0.5,
    position: 'absolute',
    bottom: 310
  },
  slogan: {
    color: colors.white,
    fontSize: 18,
    position: 'absolute',
    bottom: 240,
    opacity: 0.5,
  },
  getStartedButton: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.white,
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
  },
  getStartedButtonText: {
    top: 15,
    color: colors.white,
    fontFamily: 'PoppinsLight',
    fontWeight: 'bold'
  },
  alreadyAccountButton: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    color: colors.black,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20
  },
  alreadyAccountButtonText: {
    top: 15,
    color: colors.black,
    fontFamily: 'PoppinsLight',
    fontWeight: 'bold'
  }
})