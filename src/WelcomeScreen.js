import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Button ,Label ,Left, Body, Right, Title, Icon} from 'native-base';
import { Text, StyleSheet, Image, TextInput} from 'react-native';

import { PasswordTextInput } from './PasswordInputText';

import Xray from '../img/Maintenance.png'

export default class FormExample extends Component {

  constructor(props) {
    super(props);
    this.state = { password: '' };
  }


  render() {

    return (
      <Container>
        
        <Content>
        <Header style={{ backgroundColor:'white'}}>
          <Left/>
          <Body style = {styles.generate3}>
         
            <Title  style={{ color: "#2A43D5"}}>Welcome to LogIT</Title>
         
            
          </Body>
          <Right/>
        </Header>
        <Image
              source={Xray}
              style = {styles.tutorings}      
            />

          <Form>
          <View style={{marginLeft: 15,marginRight: 15, marginTop:15, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
            
            <TextInput
              style={{fontSize: 17}}
              placeholder="Name Surname:"
              onChangeText={(text) => this.setState({input: text})}
            />

          </View>


            <View style={{marginLeft: 15,marginRight: 15, marginTop:5, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
              <PasswordTextInput
                  placeholder="Password:"
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
            </View>
          </Form>

      <View >

        <View style ={{flexDirection: 'row'}}>
            <Button style={styles.generate2} 
                block Primary
                //onPress={() => alert('button pressed')}
                onPress={() => this.props.navigation.navigate('Dashboard')}
                >
                <Text style={styles.textContent}>Login</Text>
                
            </Button>

            <Button style={styles.generate2} 
                block Primary
                //onPress={() => alert('button pressed')}>
                onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.textContent}>Register</Text>
            </Button>
        </View>
      

      <Button style={styles.generate} 
      block danger
      //onPress={() => alert('button pressed')}>
      onPress={() => this.props.navigation.navigate('Reset')}>
      
        <Text style={styles.textContent}>Forgot your password?</Text>
      </Button>

    </View>

      </Content>

      </Container>
    
    );
  }
}


const styles = StyleSheet.create({
  tutorings:{
    width: '100%',
    height: 350,
  },
  generate:{
    backgroundColor:'red',
    marginRight:25,
    marginLeft:25,
    marginTop: 40,
    paddingTop:5,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 40
},
generate2:{
  marginRight:5,
  marginLeft:5,
  marginTop:5,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  width: '47%',
},
textContent: {
  fontSize: 15,
  color: '#fff',
},
generate3 : {
  flex: 15,  
  justifyContent: 'center', 
  alignItems: 'center',
},
container: {
  margin: 30,
  borderWidth: 1,
  borderColor: "#ddd",
  backgroundColor: "#ddd",
  height:30,
  padding:5
},
}); 
