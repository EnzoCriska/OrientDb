/** @format */

import {AppRegistry} from 'react-native';
import stackNavigation from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => stackNavigation);
