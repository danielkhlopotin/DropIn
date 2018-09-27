import React, { Component } from 'react';
import { Text, AppRegistry, View, Image } from 'react-native';
import { Font } from 'expo';

export default class TopBar extends Component {


  render() {
    
      return (
        <View class = 'topBar' style = {{flex: 2}}>
             <Text style= {{fontSize: 25, textAlign: 'center', lineHeight: 88, fontFamily: 'montserrat'}}>DropIn</Text>
        </View>
      );


  }
}

//having a comment inside of the return function messes stuff up, don't do that
//so if you want to use an imaage, use source={require('image source')}
//don't try using image urls, it does't work
