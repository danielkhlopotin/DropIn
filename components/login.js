import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import MainLogin from './mainLogin';
import EmailLogin from './emailLogin';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      thing: false,
      view: 'main',

    }
    this.handleBack = this.handleBack.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }
  handleBack() {
    this.setState({view: 'main'})
  }
  handleEmail() {
    this.setState({view: 'email'})
  }
  handleNewUser() {
    this.setState({view: 'newUser'})
  }
  render() {
    if (this.state.view === 'main') {
      return (<MainLogin onPress={this.handleEmail} />);
    } else if (this.state.view === 'email') {
      return (<EmailLogin onPress={this.handleBack} currState={this.state.view} />);
    }
  }
}

//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp
const styles = StyleSheet.create({
})
//position: 'absolute', left: 0, right:0, top: 0, bottom: 0,
//
//
