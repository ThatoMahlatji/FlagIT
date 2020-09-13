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


/*
import { Container, Content, List, Text } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity ,Image} from 'react-native';

import pickIt from '../img/pickIt.png';
import twitter from '../img/twitter.png'
import chambers from '../img/water.png'
import pipe from '../img/pipe.png'


class Home extends Component {

  render() {
    const { navigation } = this.props;

    return (

      <Container>
        <Content>
         
          <List style= {styles.container}>

            <TouchableOpacity >

              <Image style={styles.cardImage} source={pickIt} />
              
            </TouchableOpacity>

            <TouchableOpacity >

              <Image style={styles.cardImage} source={pipe} />
              
            </TouchableOpacity>

            <TouchableOpacity >

              <Image style={styles.cardImage} source={twitter} />
              
            </TouchableOpacity>

            <TouchableOpacity >

              <Image style={styles.cardImage} source={chambers} />
              
            </TouchableOpacity>

          </List>
        </Content>
      </Container>
    

    );
  }
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    borderTopWidth: 2.5,
    borderColor: '#d6d7da',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    },
    
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
*/
