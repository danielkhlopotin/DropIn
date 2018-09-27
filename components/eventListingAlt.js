import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, ScrollView, StyleSheet, TouchableWithoutFeedback, } from 'react-native';

export default class EventListingAlt extends Component {
  constructor(props){
    super(props);
    this.state = {
      going: false,
    }
    this.goingTouch = this.goingTouch.bind(this);
  }
goingTouch() {
  this.setState({
    going: !this.state.going
  });
}

  render() {
    return (
            <View style = {styles.container}>
              <Text style={styles.title}>Green Mountain Rec Center</Text>
              <Text style={styles.text}>Basketball</Text>
              <Text style={styles.text}>12:00 PM - 2:00 PM</Text>
              <Text style={styles.text}>3.8 Miles | Paid</Text>
              <View style={styles.bottomContainer}>
                <View style={{ width: '33.333%', backgroundColor: '#d2ebf7'}}>
                  <Text style={styles.bottomText}>8 Attending</Text>
                </View>
                <View style={styles.bottomTextContainer}>
                  <Text style={styles.bottomText}>3 Playing</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.goingTouch}>
                  <View style={{ width: '33%', backgroundColor:(this.state.going ? '#007aff':'#d2ebf7'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{fontFamily: 'montserrat', textAlign: 'center', color: (this.state.going ? 'white':'black')}}>Going</Text>
                    <Image style={styles.check} source={this.state.going ? require('../DropIn-Icons-And-Files/checkWhite.png') : null} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {width: '90%', height: 150, borderTopWidth: 1, borderColor: '#efefef', backgroundColor: 'white', marginLeft: '5%'},
  //'#d2ebf7'
  title: {fontFamily: 'montSemiBold', fontSize: 20, paddingTop: 12},
  text: {fontFamily: 'montserrat', fontSize: 20 },
  bottomContainer: {position: 'absolute', bottom: '5%', flexDirection: 'row', marginLeft: '0.5%'},
  bottomText: {fontFamily: 'montserrat', textAlign: 'center'},
  bottomTextContainer: {width: '33%', backgroundColor: '#d2ebf7'},
  check: {height: 10, width: 10, marginLeft: 5}
  //'#07aeff'
})
//change name and level so it shows user's level
//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp
