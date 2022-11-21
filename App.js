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
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// https://search.muz.li/NmU2ZDAxYmMy?utm_source=muz.li-insp&utm_medium=article&utm_campaign=%2Finspiration%2Flogin-screen%2F
// https://docs.expo.dev/guides/using-custom-fonts/
// https://promo.com/tools/image-resizer/
// https://html-color-codes.info/colors-from-image/#