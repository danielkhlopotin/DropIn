import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, TouchableWithoutFeedback, Alert, StyleSheet} from 'react-native';


export default class NavBar extends Component {
_onPressButton1() {
  Alert.alert('You tapped button 1!')
}
_onPressButton2() {
Alert.alert('You tapped button 2!')
}
_onPressButton3() {
Alert.alert('You tapped button 3!')
}

  render() {
    const personPic = this.props.icons.person ? require('../DropIn-Icons-And-Files/darkerUser.png') : require('../DropIn-Icons-And-Files/profile.png');
    const globePic = this.props.icons.globe ? require('../DropIn-Icons-And-Files/darkerEarth.png') : require('../DropIn-Icons-And-Files/world.png');
    const listPic = this.props.icons.list ? require('../DropIn-Icons-And-Files/darkerBars.png') : require('../DropIn-Icons-And-Files/bars-black.png');
    
    //would like to change imgStyle so It depends on the size of the screen, but 45x45 is perfect for my screen size
    return (

      <View class = 'navBar' style={styles.navBar} >
        <TouchableWithoutFeedback onPress={this.props.handle1}>
            <View style = {styles.navButtonStyle}>
              <Image source = {personPic} class = 'person' style = {styles.imgStyle} />

            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.props.handle2}>
            <View style = {styles.navButtonStyle}>
              <Image source = {globePic} class = 'globe' style = {styles.imgStyle} />

            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.props.handle3}>
            <View style = {styles.navButtonStyle}>
              <Image source = {listPic} class = 'list' style = {styles.imgStyle} />
            </View>
        </TouchableWithoutFeedback>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  navBar: {flex: 2, flexDirection: 'row' },
  imgStyle: {width: 45, height: 45},
  navButtonStyle: {width: '33.33%', height: '100%', alignItems: 'center', justifyContent: 'space-around'},
})
//having a comment inside of the return function messes stuff up, don't do that
//so if you want to use an imaage, use source={require('image source')}
//don't try using image urls, it does't work

//If you wanna do alignItems
