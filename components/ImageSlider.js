import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SliderBox } from "react-native-image-slider-box"; 
// You can import from local files
//import AssetExample from './components/AssetExample';

import jhb from '../img/jhb.jpg';
import CouncilChamber from '../img/CouncilChamber.jpg';
import road from '../img/road.jpeg';
import elec from '../img/electricity.jpeg';
import water from '../img/Water.jpeg';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        jhb,
        CouncilChamber,
        road,
        elec,
        water,
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          autoplay={true}
          images={this.state.images}
          //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          //currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
