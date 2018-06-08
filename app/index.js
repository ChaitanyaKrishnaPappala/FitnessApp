import { Navigation } from 'react-native-navigation';

import {registerScreens} from "./registerScreens";

export default () => {

  registerScreens();

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen1',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon1_selected.png'),
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'Screen2',
        icon: require('./images/icon2.png'),
        selectedIcon: require('./images/icon2_selected.png'),
        title: 'Screen Two'
      }
    ]
  });
};

