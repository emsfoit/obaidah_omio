// In index.js of a new project
const {Navigation} = require('react-native-navigation');
import StartScreen from './screens/start';
import PopupScreen from './screens/popup';

Navigation.registerComponent('StartScreen', () => StartScreen);
Navigation.registerComponent('PopupScreen', () => PopupScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'StartScreen',
            },
          },
        ],
      },
    },
  });
});
