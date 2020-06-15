import React, { Component } from 'react';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Main from './screens/Main';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


var firebaseConfig = {
  apiKey: "AIzaSyAVnWjcJ421HVBWziP7e2IkvT5mHZCiCTw",
  authDomain: "authentication-app-820ee.firebaseapp.com",
  databaseURL: "https://authentication-app-820ee.firebaseio.com",
  projectId: "authentication-app-820ee",
  storageBucket: "authentication-app-820ee.appspot.com",
  messagingSenderId: "784323742108",
  appId: "1:784323742108:web:ff69bb9cdfd4cd5698a059",
  measurementId: "G-EL26XFF7CK"
};
firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();
export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName={'Main'}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
