/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Login from './src/pages/login/Login';
import MainPage from './src/pages/mainpage/MainPage';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  updateLoginStatus(val) {
    this.setState({
      loggedIn: val,
    });
  }

  render() {
    if (this.state.loggedIn) {
      return (<MainPage updateLoginStatus={this.updateLoginStatus} />);
    }
    return (
      <Login updateLoginStatus={this.updateLoginStatus} />
    );
  }
}

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
