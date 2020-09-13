import { Body, Button, Container, Content, Form, Header, Icon, Item, Left, Right, Title, View, Label, Input } from 'native-base';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import { PasswordTextInput } from './PasswordInputText';

export default class RegisterForm extends Component {
  state = {
    password: '',
  };
  render() {
    return (
      <Container>
        <Content>

          <Header style={{ backgroundColor:'white'}} >

            <Left>
              <TouchableOpacity
                //block danger
                onPress={() => this.props.navigation.navigate('Welcome')}
                >
                <Icon name='arrow-back' style={{ color: "black" }} />
              </TouchableOpacity>
            </Left>
            <Body style={styles.generate3}>
              <Title style={{ color: "black" }}>Registration</Title>
            </Body>
            <Right />
          </Header>
          

          <Form>

            <View style={{marginTop: 10,margin:5,marginBottom: 20, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
              <TextInput
                style={{fontSize: 18}}
                placeholder="Name Surname:"
                onChangeText={(text) => this.setState({input: text})}
              />
            </View>

            <View style={{marginTop: 5,margin:5,marginBottom: 20, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
              <TextInput
                style={{fontSize: 18}}
                placeholder="Email:"
                onChangeText={(text) => this.setState({input: text})}
              />
            </View>

            <View style={{marginTop: 10,margin:5,marginBottom: 20, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
              <TextInput
                style={{fontSize: 18}}
                placeholder="Cell Number:"
                onChangeText={(text) => this.setState({input: text})}
              />
            </View>

            <View style={{marginTop: 11,margin:5,marginBottom: 20, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
              <PasswordTextInput
                  placeholder="Password:"
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
            </View>

          </Form>

          <View >
            <Button block primary style={styles.generate2}
              onPress={() => { this.props.navigation.navigate('Welcome')}}
            >
              <Text style={styles.textContent}>Register</Text>
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
    height: 300,
  },
  generate: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    paddingTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  generate2: {
    marginRight: 2,
    marginLeft: 2,
    marginTop: 5,
    paddingLeft: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textContent: {
    fontSize: 15,
    color: '#fff',
  },
  generate3: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


