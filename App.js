import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './app/configurations/colors';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
});


// https://search.muz.li/NmU2ZDAxYmMy?utm_source=muz.li-insp&utm_medium=article&utm_campaign=%2Finspiration%2Flogin-screen%2F
// https://docs.expo.dev/guides/using-custom-fonts/
// https://promo.com/tools/image-resizer/
// https://html-color-codes.info/colors-from-image/#