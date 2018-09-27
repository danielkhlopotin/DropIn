import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default class MainLogin extends Component {
  render() {
    return (
        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../DropIn-Icons-And-Files/bballCourt.jpg')} style={styles.image}/>
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.title}>DropIn</Text>
          </View>
          <View style={styles.facebookContainer}>
              <Text style={styles.whiteText}>Login with Facebook</Text>
          </View>
          <View style={styles.googleContainer}>
            <Text style={styles.whiteText}>Login with Google</Text>
          </View>
          <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View style={styles.emailContainer}>
                <Text style={styles.email}>Login with email</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp
const styles = StyleSheet.create({
  title: {textAlign: 'center', borderRadius: 5, paddingTop: 30, fontFamily: 'montserrat', fontSize: 60, color: 'white'},
  image: {height: '100%', width: '100%'},
  textContainer: {position: 'absolute',  width: '100%', top: '7%',  alignItems: 'center', borderRadius: 5, justifyContent: 'center', borderRadius: 5},
  whiteText: {textAlign: 'center', borderRadius: 5, fontFamily: 'montserrat', fontSize: 30, color: 'white'},
  email: {textAlign: 'center', borderRadius: 5, fontFamily: 'montserrat', fontSize: 30},
  facebookContainer: {width: '90%', height: '10%', position: 'absolute', marginLeft: '5%', backgroundColor: '#3b5998', bottom: '34%', justifyContent: 'center'},
  googleContainer: {width: '90%', height: '10%', position: 'absolute', marginLeft: '5%', backgroundColor: '#CF4332', bottom: '22%', justifyContent: 'center'},
  emailContainer: {width: '90%', height: '10%', position: 'absolute', marginLeft: '5%', backgroundColor: '#f7f7f7', bottom: '10%', justifyContent: 'center'}
})
//position: 'absolute', left: 0, right:0, top: 0, bottom: 0,
//
//
