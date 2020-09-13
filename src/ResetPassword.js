import React, { Component } from 'react';
import { Label,Container, Header, Content, Form, Item, Input, View, Button ,Center ,Left, Body, Right, Title, Icon} from 'native-base';
import { Text, StyleSheet, Image, ScrollView,TouchableOpacity, TextInput } from 'react-native';


import Xray from '../img/Maintenance.png';



export default class ResetForm extends Component {
  render() {
    return (
      <Container>
        
        <Content>
        <Header style={{ backgroundColor:'white'}} >
          
        <Left>
            <TouchableOpacity 
            //style={{backgroundColor: '#384850'}}
            onPress={() => this.props.navigation.navigate('Welcome')}
            >
            <Icon name='arrow-back' style={{ color: "black" }}  />
            </TouchableOpacity>
          </Left>


          <Body style = {styles.generate3}>
         
            <Title  style={{ color: "black" }}>Reset Password</Title>
         
            
          </Body>
          <Right/>
        </Header>
        <Image
              source={Xray}
              style = {styles.tutorings}      
            />

          <Form>
            <View style={{marginTop: 5,margin:5,marginBottom: 20, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
                <TextInput
                  style={{fontSize: 18}}
                  placeholder="Email Address:"
                  onChangeText={(text) => this.setState({input: text})}
                />
              </View>

            <View style={{marginTop: 5,margin:5,marginBottom: 20, marginBottom:10, borderBottomWidth:0.5, borderBottomColor:'#dbd7d7'}}>
              <TextInput
                style={{fontSize: 18}}
                placeholder="Cell Number:"
                onChangeText={(text) => this.setState({input: text})}
              />
            </View>

          </Form>

      <View >


      <Button style={styles.generate2} 
        block primary
        //onPress={() => alert('button pressed')}>
        onPress={() => this.props.navigation.navigate('Welcome')}
        >
        <Text style={styles.textContent}>Reset Password</Text>
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
    //marginTop: 5,
  },
  generate:{marginRight:20,
    marginLeft:20,
    marginTop: 25,
    paddingTop:5,
    //paddingBottom:10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
},
generate2:{
  //backgroundColor:'red',
  marginRight:2,
  marginLeft:2,
  marginTop:5,
  paddingLeft: 5,
  //paddingTop:5,
  //paddingBottom:5,
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
},
textContent: {
  fontSize: 15,
  color: '#fff',

},
generate3 : {
  flex: 5,  
  justifyContent: 'center', 
  alignItems: 'center',
}
}); 


