import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MapView, {Marker, Callout, Region} from 'react-native-maps';

export default class MyMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGoing: false,
      going: false,
      region: {latitude: 39.709380, longitude: -105.117055, latitudeDelta: 0.1, longitudeDelta: 0.1}
    }
    this.pressMarker = this.pressMarker.bind(this);
    this.goingTouch = this.goingTouch.bind(this);
    this.pressMap = this.pressMap.bind(this);
  }
  pressMarker() {
    this.setState({ showGoing: true});
  }
  pressMap() {
    this.setState({ showGoing: false});
  }
  goingTouch() {
    this.setState({
      going: !this.state.going
    });
  }


  render() {
    let picture;
    if (this.props.sport === 'Basketball') {
      picture = require('../DropIn-Icons-And-Files/basketball.png')
    } else if (this.props.sport === 'Football') {
      picture = require('../DropIn-Icons-And-Files/football.png')
    } else if (this.props.sport === 'Soccer') {
      picture = require('../DropIn-Icons-And-Files/soccer.png')
    } else if (this.props.sport === 'Volleyball') {
      picture = require('../DropIn-Icons-And-Files/volleyballAlt.png')
    } else if (this.props.sport === 'Baseball') {
      picture = require('../DropIn-Icons-And-Files/baseball.png')
    } else if (this.props.sport === 'Ultimate Frisbee') {
      picture = require('../DropIn-Icons-And-Files/frisbee.png')
    } else if (this.props.sport === 'Tennis') {
      picture = require('../DropIn-Icons-And-Files/tennis.png')
    }

    return (

          <Marker coordinate={{latitude: this.props.lat, longitude: this.props.lon}} image={picture} onPress={this.props.onPress}>
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{this.props.title}</Text>
                <Text style={styles.calloutText}>{this.props.sport}</Text>
                <Text style={styles.calloutText}>{this.props.time}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#d2ebf7'}}>
                    <Text style={{textAlign: 'center', fontFamily: 'montserrat', paddingLeft: 5, paddingRight: 10}}>{this.props.attending} Attending</Text>
                    <Text style={{textAlign: 'center', fontFamily: 'montserrat', paddingRight: 5}}>{this.props.playing} Playing</Text>
                </View>
              </View>
            </Callout>
          </Marker>

    );
  }
}

const styles = StyleSheet.create({
  mapView: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
  calloutTitle: {textAlign: 'center', fontFamily: 'montSemiBold'},
  calloutText: {textAlign: 'center', fontFamily: 'montserrat'},
  calloutTextWhite: {textAlign: 'center', fontFamily: 'montserrat', color: 'white', marginRight: 1, marginLeft: 1},
  plusContainer: { borderRadius: 5, borderWidth: 1, height: 25, width: 25, borderColor: 'lightgrey', justifyContent: 'center'},
  selectedPlusContainer: {borderRadius: 5, borderWidth: 1, height: 25, width: 25, borderColor: 'lightgrey', justifyContent: 'center', backgroundColor: 'blue'},
  plusText: {fontSize: 20, textAlign: 'center'}
});
//
//having a comment inside of the return function messes stuff up, don't do that
//so if you want to use an imaage, use source={require('image source')}
//don't try using image urls, it does't work

// <Marker coordinate={{latitude: 39.709491, longitude: -105.117070}}>
//   <View style={{backgroundColor: 'blue', height: 20, width: 20}}>
//     <Image source={require('../DropIn-Icons-And-Files/darkerBars.png')} />
//   </View>
// </Marker>
