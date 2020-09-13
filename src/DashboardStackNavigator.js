import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack'

import DashboardTabNavigator from './DashboardTabNavigator';


const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerShown: false,  
    };
  } 
}
)


export default DashboardStackNavigator;