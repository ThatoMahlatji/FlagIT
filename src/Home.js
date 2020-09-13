
/*
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
 
// ...
class Home extends Component {
  render() {
    //return <WebView source={{ uri: 'https://twitter.com/cityofjoburgza?lang=en' }} />;
    return <WebView source={{ uri: 'http://www.tshwane.gov.za/Pages/default.aspx' }} />;
  }
}

export default Home;

*/


import { Container, Content, List, Text } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity ,Image} from 'react-native';

import Slider from '../components/ImageSlider'

import Service from '../img/Service.png';
import Docs from '../img/Docs.png'
import Projects from '../img/Projects.png'
import jhb from '../img/jhb.jpg'


class Home extends Component {

  render() {
    const { navigation } = this.props;

    return (

      <Container>
        <Content>
         
          <List style= {styles.container}>

            <Slider />


            <TouchableOpacity >

              <Image style={styles.card} source={Service} />
              
            </TouchableOpacity>

            <TouchableOpacity >

              <Image style={styles.card} source={Docs} />
              
            </TouchableOpacity>

            <TouchableOpacity >

              <Image style={styles.card} source={Projects} />
              
            </TouchableOpacity>

            

          </List>
        </Content>
      </Container>
    

    );
  }
}
 
const styles = StyleSheet.create({
  card: {
    resizeMode: "stretch",
    marginTop:10,
    height: 125,
    backgroundColor: '#fff',
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    borderTopWidth: 2.5,
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 275,
    resizeMode: 'cover',
    marginTop:10,
  },
  cardText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 5,
    fontSize: 12,
  }
});

export default Home;

