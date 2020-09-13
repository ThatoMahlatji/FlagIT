import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet, Button, Image } from 'react-native';

import { AppLoading } from 'expo';
//import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import React, {Component} from 'react';
import {
  createAppContainer,
} from 'react-navigation'

import AppSwitchNavigator from './src/AppSwitchNavigator';
 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
 
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <AppContainer/>
    );
  }
}

export default App;


const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  contain: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


/**
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/