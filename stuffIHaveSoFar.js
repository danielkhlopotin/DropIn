import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    let imgStyle = {width: 20, height: 20};
    let navButtonStyle = {width: '33.33%', height: '100%', paddingTop: 10, paddingBottom: 10, alignItems: 'center'};
    return (
      // main extends across entire page using flex: 1
      // If you wanted to pick what was showing, you could use an if/else statement or use ternary op,
      //and set result equal to what you wanted to display on the page, then just put that inside of the main 'View' tags
      //just be careful if putting these elements inside of another View tags cause it could mess something up
      // either find a way to turn them into one elemet or put them in as individual variables
      <View class = 'main' style = {{flex: 1}}>
        <View class = 'topBar'
          style = {{width: '100%', lineHeight: 30,
                    height: 30,
                    fontFamily: 'trebuchet MS',
                    fontSize: 25, fontWeight: 'bold',
                    textAlign: 'center'}}>DropIn</View>
        <View class = 'map' style = {{flex: 1, backgroundColor: 'green'}}></View>
        <View class = 'navBar' style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
            <View style = {navButtonStyle}>
              <Image source = 'https://image.flaticon.com/icons/svg/24/24029.svg' class = 'person' style = {imgStyle} />
            </View>
            <View style = {navButtonStyle}>
              <Image source = 'https://image.flaticon.com/icons/svg/24/24390.svg' class = 'glob' style = {imgStyle} />
            </View>
            <View style = {navButtonStyle}>
              <Image  source = 'https://image.flaticon.com/icons/svg/23/23799.svg' class = 'list' style = {imgStyle} />
            </View>
        </View>
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
