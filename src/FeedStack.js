import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,

    navigationOptions: ({ navigation }) => {

      return {
        headerTitle: 'Service Delivery App',
        
        headerLeft: () => (
          <TouchableOpacity style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}>

            <Ionicons name={"ios-menu"} size={30} color={"black"} />

          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{ paddingRight: 10 }}
            onPress={() => alert('Inbox Empty')}>

            <Ionicons name={"ios-mail"} size={30} color={"black"} />

          </TouchableOpacity>
        ),
      };
    },
  },
/*
  FeedBooking: {
    screen: FeedBooking,
  },
*/



});

export default AppNavigator;