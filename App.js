import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, StyleSheet, Text, View, Divider } from 'react-native';
import colors from './app/configurations/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    featherRegular: require('./app/assets/fonts/Feather/featherRegular.otf'),
  });
  return (
    <ImageBackground source={require('./app/assets/women-background.jpeg')} style={styles.container} >
      <View style={styles.backgroundOverlay} />

      <Text style={styles.title}>DUOLINGUO</Text>

      <Text style={styles.subTitle}>Learn languages from Content You Love</Text>

      {/* devider */}
      <View style={styles.line} />

      <Text style={styles.slogan}>The Fast, Fun and effective way to Learn</Text>

      <Button style={styles.getStartedButton} title='Get started for free!'></Button>
      <Button style={styles.alreadyAccountButton} title='I already have an account'></Button>
    </ImageBackground>
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
    color: colors.fontColor,
    fontFamily: 'featherRegular'
  },
  title: {
    color: colors.fontColor,
    fontFamily: 'featherRegular',
    fontSize: 32
  },
  subTitle: {
    color: colors.fontColor,
    fontSize: 26
  },
  line: {
    height: 1, backgroundColor: 'white', width: '70%'
  },
  slogan: {
    color: colors.fontColor,
  },
  getStartedButton: {
    width: '80%',
    height: 50,
    borderRadius: 20
  },
  alreadyAccountButton: {
    width: '80%',
    height: 50,
    borderRadius: 20
  }


});


// https://search.muz.li/NmU2ZDAxYmMy?utm_source=muz.li-insp&utm_medium=article&utm_campaign=%2Finspiration%2Flogin-screen%2F
// https://docs.expo.dev/guides/using-custom-fonts/
// https://promo.com/tools/image-resizer/
// https://html-color-codes.info/colors-from-image/#