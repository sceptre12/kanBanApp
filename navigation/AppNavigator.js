import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {MAIN_VIEW} from '../constants/navigation'

import SignIn from "../screens/auth/SignIn";
import MainTabNavigator from './MainTabNavigator';


const AuthStack = createStackNavigator({SignIn})

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    [MAIN_VIEW]: MainTabNavigator,
  }, {
      initialRouteName: 'Auth',
  })
);
