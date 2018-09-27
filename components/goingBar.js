import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MapView, {Marker, Callout, Region} from 'react-native-maps';
import MyMarker from './myMarker'

export default class MyMap extends Component {
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

    let goingBar = this.state.showGoing ? (
      <TouchableWithoutFeedback onPress={this.goingTouch}>
        <View style={{position: 'absolute', marginLeft: '7.5%', width: '85%', bottom: '6%',
        backgroundColor:(this.state.going ? '#007aff':'#d2ebf7'),
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
          <Text style={{fontFamily: 'montserrat', textAlign: 'center', color: (this.state.going ? 'white':'black'), fontSize: 30, marginRight: 10}}>Going</Text>
          <Image style={{height: 30, width: 30}} source={this.state.going ? require('../DropIn-Icons-And-Files/checkWhite.png') : null} />
        </View>
      </TouchableWithoutFeedback>
    ) : null;

    const goingBars = this.props.dataSource.markerNames.map((value, i) =>
      <TouchableWithoutFeedback key={i} onPress={this.goingTouch}>
        <View style={{position: 'absolute', marginLeft: '7.5%', width: '85%', bottom: '6%',
            backgroundColor:(this.state.going ? '#007aff':'#d2ebf7'), flexDirection: 'row',
            alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
          <Text style={{fontFamily: 'montserrat', textAlign: 'center', color: (this.state.going ? 'white':'black'), fontSize: 30, marginRight: 10}}>Going</Text>
          <Image style={{height: 30, width: 30}} source={this.state.going ? require('../DropIn-Icons-And-Files/checkWhite.png') : null} />
        </View>
      </TouchableWithoutFeedback>
    )

    const markers = this.props.dataSource.markerNames.map((value, i) =>
      <MyMarker key={i} onPress={this.pressMarker} title={value} sport={this.props.dataSource.markerSports[i]} time={this.props.dataSource.markerTimes[i]}
          lat={this.props.dataSource.latitudes[i]} lon={this.props.dataSource.longitudes[i]} attending={this.props.dataSource.attending[i]} playing={this.props.dataSource.playing[i]}/>
     )
      return (
        <View style = {{ flex: 15}}>
          <MapView style={styles.mapView} initialRegion = {this.state.region} moveOnMarkerPress={true} rotateEnabled={false} onPress={this.pressMap} loadingEnabled={true}>
            {markers}

          </MapView>
            {goingBar}

        </View>
      )



  }
}

const styles = StyleSheet.create({
  mapView: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
  callout: {},
  calloutText: {textAlign: 'center', fontFamily: 'montserrat'},
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

// {this.props.dataSource.markerNames[1]}
