import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, ScrollView, StyleSheet } from 'react-native';
import UserFeedBar from './userFeedBar'
export default class UserFeed extends Component {
  render() {
    return (
        <View style={{flex: 13, backgroundColor: '#d2ebf7'}}>
          <ScrollView>
            <UserFeedBar text="You attended a drop in!"/>
            <UserFeedBar text="You reached level 4!"/>
            <UserFeedBar text="You are going to a drop in!"/>
            <UserFeedBar text="You reached level 3!"/>
            <UserFeedBar text="You attended a drop in!"/>
            <UserFeedBar text="You're going to a drop in!"/>
          </ScrollView>
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
