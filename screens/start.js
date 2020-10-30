import PopupScreen from './popup';

// In index.js of a new project
const {Navigation} = require('react-native-navigation');
const React = require('react');
const {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} = require('react-native');
// Start screen declaration
const StartScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/images/galaxy-4-gradient-detailed-3-x.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo-black.png')}></Image>
        <Text style={styles.headerText}>
          Die Reise durch den inneren Kosmos
        </Text>
        <Text style={styles.subText}>Achtsamkeit und Meditaion für Kinder</Text>
        <View>
          <TouchableOpacity
            style={styles.Rectangle}
            onPress={() =>
              setTimeout(function () {
                Navigation.showOverlay({
                  component: {
                    name: 'PopupScreen',
                  },
                });
              }, 5000)
            }>
            <Text style={styles.buttonTxt}>Jetzt Resiepass anlegen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 150,
    width: 83,
    height: 26,
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 32,
    marginTop: 40,
  },
  subText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
    width: 216,
    marginTop: 40,
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2b2b2b',
  },
  backgroundImage: {
    flex: 1,
  },
  Rectangle: {
    marginTop: 100,
    width: 328,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default StartScreen;
