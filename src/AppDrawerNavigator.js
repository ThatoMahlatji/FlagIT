
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from 'react-navigation-drawer'

import DashboardStackNavigator from './DashboardStackNavigator'
import Welcome from './WelcomeScreen'

import Sidebar from './SideBar'


let AppDrawerNavigator = createDrawerNavigator({


    Dashboard: {
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: "Home"
      }
    },

  
    Screen2: { //Title
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: "Profile"
      }}
    
    ,
    Screen3: { //Title
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: "Settings"
      }}  
 
    ,
    
    Screen4: { //Title
      screen: Welcome,
      navigationOptions: {
        drawerLabel: "Logout"
      }}      
      

  },{
    drawerPosition: 'left',
    initialRouteName: "Dashboard",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
});



export default AppDrawerNavigator;



