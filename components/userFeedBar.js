import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, ScrollView, StyleSheet } from 'react-native';

export default class UserFeedBar extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.feedTextContainer}>
          <Text style={styles.feedText}>{this.props.text}</Text>
        </View>
        <View style={{width: '30%', backgroundColor: 'white', borderTopRightRadius: 4, borderBottomRightRadius: 4, justifyContent: 'space-evenly'}}>
          <Text style = {styles.shareText}>Share</Text>
          <View style={styles.shareRow}>
            <Image source={require('../DropIn-Icons-And-Files/facebook.png')} style = {styles.image}/>
            <Image source={require('../DropIn-Icons-And-Files/twitter.png')} style = {styles.image}/>
          </View>
          <View style={styles.shareRow}>
            <Image source={require('../DropIn-Icons-And-Files/reddit.png')} style = {styles.image}/>
            <Image source={require('../DropIn-Icons-And-Files/pinterest.png')} style = {styles.image}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '95%', height: 100, backgroundColor: '#007AFF', borderColor: '#d2ebf7', borderRadius: 6, borderTopWidth: 2, marginLeft: '2.5%', marginBottom: 3, flexDirection: 'row' },
  feedText: {fontFamily: 'montserrat', fontSize: 32, color: 'white', textAlign: 'center'},
  feedTextContainer: {width: '70%', justifyContent: 'center', borderColor: '#d2ebf7', borderRightWidth: 1},
  shareText: {fontFamily: 'montserrat', fontSize: 15, textAlign: 'center'},
  image: {height: 30, width:30},
  shareRow: {flexDirection: 'row', justifyContent: 'space-evenly'}

}

)
//change name and level so it shows user's level
//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp

//alignItems centers it horizontally
//justifyContent centers it vertically

//mayber change pinterest to mesage/sms??
