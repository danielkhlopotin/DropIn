import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, Picker, StyleSheet } from 'react-native';

export default class EventSorting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'time',
      sport: 'basketball',
    }
  }
  render() {
    return (
      <View class='eventSorting' style={{flex: 4}}>
        <View class='sortByPlusPicker' style={{flexDirection: 'row', marginTop: 28, marginLeft: '10%', backgroundColor:'#f7f7f7', width: '80%', borderRadius: 5}}>
          <View style={styles.sortTypeContainer}>
            <Text style= {styles.sortTypeText}>Sort by:</Text>
          </View>
          <Picker style={styles.picker} selectedValue={this.state.sortBy} onValueChange={(itemValue, itemIndex) => this.setState({sortBy: itemValue})}>
              <Picker.Item style={styles.pickerItem} label="Time" value="time" />
              <Picker.Item style={styles.pickerItem} label="Distance" value="distance" />
              <Picker.Item style={styles.pickerItem} label="Planned Attendents" value="attendence" />
          </Picker>
        </View>
        <View class='sportPlusPicker' style={{flexDirection: 'row', marginTop: 5, marginLeft: '10%', backgroundColor:'#f7f7f7', width: '80%', borderRadius: 5}}>
          <View style={styles.sortTypeContainer}>
            <Text style= {styles.sortTypeText}>Sport:</Text>
          </View>
          <Picker style={styles.picker} selectedValue={this.state.sport} onValueChange={(itemValue, itemIndex) => this.setState({sport: itemValue})}>
              <Picker.Item style={styles.pickerItem} label="Any" value="any" />
              <Picker.Item style={styles.pickerItem} label="Basketball" value="basketball" />
              <Picker.Item style={styles.pickerItem} label="Soccer" value="soccer" />
              <Picker.Item style={styles.pickerItem} label="Ultimate Frisbee" value="ultimate" />
              <Picker.Item style={styles.pickerItem} label="Tennis" value="tennis" />
              <Picker.Item style={styles.pickerItem} label="Volleyball" value="volleyball" />
              <Picker.Item style={styles.pickerItem} label="Baseball" value="baseball" />
              <Picker.Item style={styles.pickerItem} label="Flag Football" value="football" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sortTypeText: {paddingLeft: 8, fontFamily: 'montserrat', color: 'white'},
  picker: { height: 50, width: '75%'},
  sortTypeContainer: { height: 50, width: '25%', backgroundColor: '#007AFF', justifyContent: 'center', borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
  pickerItem: {fontFamily: 'montserrat'}
})
//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp
