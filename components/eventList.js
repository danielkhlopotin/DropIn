import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, ScrollView, StyleSheet } from 'react-native';
import EventListing from './eventListing';
import EventListingAlt from './eventListingAlt';

export default class EventList extends Component {
  render() {
    return (
        <View style={{flex: 13, backgroundColor: '#07aeff'}}>
          <ScrollView>
            <EventListing />
            <EventListing />
            <EventListing />
          </ScrollView>
        </View>
    );
  }
}


//change name and level so it shows user's level
//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp


//for first try at event listing, the view style had backgroundColor: '#07aeff'
