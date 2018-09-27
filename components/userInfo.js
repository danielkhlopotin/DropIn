import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, StyleSheet } from 'react-native';

export default class UserInfo extends Component {

  render() {
      let progressWidth = (this.props.xp/this.props.levelxp)*100;
      return (
          <View class='userInfo' style={{ backgroundColor: 'white', flex: 4}}>
            <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
            <Text style={styles.level}> Level {this.props.level}</Text>
            <View class='levelBar' style={{backgroundColor: '#efefef', width:'80%', height: '20%', marginLeft: '10%', borderWidth: 1, borderColor: 'white'}}>

              <View class='progress'style={{backgroundColor: '#07aeff', width: `${progressWidth}%`, height: '100%'}} />
            </View>
            <Text class='xp' style={{paddingTop: '1%', textAlign:'center', fontFamily: 'montserrat'}}> {this.props.xp}/{this.props.levelxp}XP </Text>


          </View>
          );



  }
}

//change progess width so that it is dependent on amount of xp
//change xp so that it is dependent on user's xp
const styles = StyleSheet.create({
  name: {textAlign: 'center', paddingTop: 30, fontFamily: 'montSemiBold', fontSize: 20},
  level: {textAlign: 'center', fontFamily: 'montSemiBold', fontSize: 18}
})
