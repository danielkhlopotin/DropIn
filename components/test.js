import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }


  render() {
    let imgStyle = {width: 45, height: 45};
    return (

        <View>
          <Text> {this.props.thing.person} </Text>
          <Image source = {require('../DropIn-Icons-And-Files/world.png')} class = 'person' style = {imgStyle} />
        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    padding: 20,
    color: 'black'
  }
})
let imgStyle = {width: 45, height: 45};

// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <Image source = {require('../DropIn-Icons-And-Files/world.png')} />
// </TouchableHighlight>
