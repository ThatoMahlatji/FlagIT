import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,Image, FlatList
} from 'react-native';



function Item({ item, navigate }) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  
  class Sidebar extends React.Component {
    state = {
        routes:[
            {
                name:"Home",
                icon:"ios-home"
            },
            {
                name:"Profile",
                icon:"ios-contact"
            },
            {
                name:"Settings",
                icon:"ios-settings"
            },
            {
                name:"Logout",
                icon:"md-log-out"
            },
        ]
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require("../img/Avatar.png")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Thato Mahlatji</Text>
                <Text style={{color:"gray",marginBottom:10}}>thato.mahlatji@gmail.com</Text>
                <View style={styles.sidebarDivider}></View>
                <FlatList
                    style={{width:"100%",marginLeft:30}}
                    data={this.state.routes}
                    renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        )
    }
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop:40,
        alignItems:"center",
        flex:1
    
      },
      listItem:{
          height:60,
          alignItems:"center",
          flexDirection:"row",
      },
      title:{
          fontSize:18,
          marginLeft:20
      },
      header:{
        width:"100%",
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20
      },
      profileImg:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:10
      },
      sidebarDivider:{
        height:1,
        width:"100%",
        backgroundColor:"lightgray",
        marginVertical:10
      }
});


export default Sidebar;