/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, AlertIOS, TouchableHighlight, View, Text, StyleSheet } from 'react-native';
 import PasscodeAuth from 'react-native-passcode-auth';

 class Passcode extends Component {
   _pressHandler() {
     PasscodeAuth.authenticate('to demo this react-native component')
       .then(success => {
         AlertIOS.alert('Authenticated Successfully');
         
       })
       .catch(error => {
         AlertIOS.alert('Authentication Failed');
       });
   }

   render() {
     return (
       <View style={styles.container}>
         <TouchableHighlight onPress={this._pressHandler}>
           <Text>
             Authenticate with Passcode
           </Text>
         </TouchableHighlight>
       </View>
     );
   }
 };




// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class Passcode extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Passcode', () => Passcode);
