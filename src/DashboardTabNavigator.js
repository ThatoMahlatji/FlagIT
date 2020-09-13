import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import Appointment from './Appointment';
//import OnlineStack from './OnlineStack'
//import FeedStack from './FeedStack';
//import Modules from './Modules';
//import TutorStack from './TutorStack';
import Feed from './feed'
import FeedStack from './FeedStack'



const DashboardTabNavigator = createBottomTabNavigator({

  
  ProfileStack: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name={`ios-home`} size={25} color={tintColor} />
    }
  },

  
  FeedStack: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Log Issues',
      tabBarIcon: ({ tintColor }) => <Ionicons name={`ios-camera`} size={25} color={tintColor} />
    }
  },

  /** 
  
  CameraStack: {
    screen: TutorStack,
    navigationOptions: {
      tabBarLabel: 'Tutors',
      tabBarIcon: ({ tintColor }) => <Ionicons name={`ios-cellular`} size={25} color={tintColor} />
    }
  },
  ContactsStack: {
    screen: Modules,
    navigationOptions: {
      tabBarLabel: 'Modules',
      tabBarIcon: ({ tintColor }) => <Ionicons name={`ios-apps`} size={25} color={tintColor} />
    }
  },
  */
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

);

export default DashboardTabNavigator;
