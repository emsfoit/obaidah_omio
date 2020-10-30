const React = require('react');
const {Text, TouchableOpacity, View, Image} = require('react-native');
const {Navigation} = require('react-native-navigation');

function PopupScreen({componentId}) {
  const dismiss = () => Navigation.dismissOverlay(componentId);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={dismiss}>
            <Image
              style={styles.exit}
              source={require('../assets/images/exit.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.alert}>
          <Image
            style={styles.passIcon}
            source={require('../assets/images/pass.png')}
          />
          <Text style={styles.message}>Dein Reisepass wird erstellt</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#19334A',
    padding: 30,
  },
  logoContainer: {
    alignItems: 'flex-end',
  },
  passIcon: {
    height: 100,
    width: 150,
  },
  exit: {
    width: 50,
    height: 50,
    margin: 10,
  },
  container: {
    flex: 0.8,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    shadowColor: '#000',
  },
  alert: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    padding: 16,
  },
  message: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    padding: 30,
    lineHeight: 32,
    marginTop: 40,
  },
};

PopupScreen.options = (props) => {
  return {
    overlay: {
      interceptTouchOutside: true,
    },
  };
};

module.exports = PopupScreen;
