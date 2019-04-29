import React from 'react';
import {Component} from 'react'
import { View, Text, Button, TextInput, StyleSheet, Picker,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Dropdown from './app/components/Dropdown';
import CheckBox from 'react-native-check-box';
// import TouchableOpacity from './app/components/TouchableOpacity';




class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    };
render() {
return (
  <View style = {styles.container}>
    <Text style = {styles.headingtop}>112 India</Text>
    <Text style = {styles.headingbottom}>Your Mobile Number</Text>
    <Dropdown/>

    <TextInput style = {styles.inputBox}
      placeholder="Enter Mobile Number"
      underlineColorAndroid="transparent"
    />
  <View style = {styles.btn}>
    <Button 
      title= 'Connect'
      onPress={() => this.props.navigation.navigate('Details', { name: 'Brent' })}
      color="#e47171"
      accessibilityLabel="Connect a user ."
      padding= '20px'
  />
  </View>
</View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ec1313',
    padding: 20,
    flexDirection: 'row',
  },
  headingtop: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  headingbottom: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  btn: {
    marginTop: 20,
  },
  inputBox: {
    height: 40,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    color: '#000'
  },
  inputBoxUser: {
    borderWidth: 1,
    margin: 10,
    height: 40,
  },
  pickerBox: {
    height: 40,
    margin: 10,
    borderWidth: 1,
  },
  btn1: {
    marginTop: 10,
    marginBottom: 10,
  },
  btn2: {
    marginBottom: 10
  },
  btn3: {
    marginBottom: 10
  },
  containersubbtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  }
});

class DetailsScreen extends Component {
  
  static navigationOptions = {
    headerRight: <View />,
    title: 'Profile',
    headerTitleStyle: {
      textAlign: 'center',
      flex:1,
      alignSelf:'center',
    },
      headerStyle: {
      backgroundColor: '#ec1313',
    },

    headerTintColor: '#fff',
  };
    
  state = {user: ''}
  updateUser = (user) => {
  this.setState({ user: user })
  }
render() {
return (
<View>

   <TextInput style = {styles.inputBoxUser}
      placeholder="Enter Name"
      underlineColorAndroid="transparent"
    />

   <TextInput style = {styles.inputBoxUser}
      placeholder="Enter Mobile Number"
      underlineColorAndroid="transparent"
    />

    <TextInput style = {styles.inputBoxUser}
      placeholder="Enter Date"
      underlineColorAndroid="transparent"
    />

    <View style = {styles.pickerBox}>
      <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
      <Picker.Item label = "--Select--" value = "0" />
      <Picker.Item label = "Male" value = "Male" />
      <Picker.Item label = "Female" value = "Female" />
      </Picker>  
    </View>

    <TextInput style = {styles.inputBoxUser}
      placeholder=" "
      underlineColorAndroid="transparent"
    />
    <CheckBox
      style={{flex: 1, padding: 10}}
      onClick={()=>{
        this.setState({
            isChecked:!this.state.isChecked
        })
      }}
      isChecked={this.state.isChecked}
      rightText={"Like to act as a Volunteer?"}
    />
<View style = {styles.btngrp}>
  <View style = {styles.btn1}>
     <Button 
    title= 'Add Contact(0)'
   color="#ff8080"
    accessibilityLabel="Add Contact(0) User."
  padding= '20px'  
    />
  </View>
   <View style = {styles.btn2}>
    <Button 
     title= 'Update Profile'
   color="#ff8080"
     accessibilityLabel="Update Profile User."
    padding= '20px'
    />
  </View>
  </View> 
  {/* <TouchableOpacity buttonPressed = {this.buttonPressed}/>
  <TouchableOpacity buttonPressed = {this.buttonPressed}/>
 <View  styles = {styles.containerbtn}>
         <TouchableOpacity style = {styles.containersubbtn}>
            <Text style = {styles.button}>
                Add Contact(0)
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style = {{marginTop= '10', marginBottom= '10'}}>
                Update Profile
            </Text>
         </TouchableOpacity>
      </View>  */} */}
<View style = {styles.btn3}>
    <Button 
      title= 'Update KYC'
      color="#ff8080"
      accessibilityLabel="Update KYC User."
      padding= '20px'
  />
  </View>   
</View>
);
}
}


const RootStack = createStackNavigator(
{
Home: HomeScreen,
Details: DetailsScreen,
},
{
initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
render() {
return <AppContainer />;
}
}



