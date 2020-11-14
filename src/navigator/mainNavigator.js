import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings173269Navigator from '../features/Settings173269/navigator';
import UserProfile173262Navigator from '../features/UserProfile173262/navigator';
import Settings173261Navigator from '../features/Settings173261/navigator';
import Settings173259Navigator from '../features/Settings173259/navigator';
import SignIn2173257Navigator from '../features/SignIn2173257/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings173269: { screen: Settings173269Navigator },
UserProfile173262: { screen: UserProfile173262Navigator },
Settings173261: { screen: Settings173261Navigator },
Settings173259: { screen: Settings173259Navigator },
SignIn2173257: { screen: SignIn2173257Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
