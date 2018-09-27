import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

export default class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { emailText: '', passwordText:''};
  }
  render() {
    return (
        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../DropIn-Icons-And-Files/bballCourt.jpg')} style={styles.image}/>
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.title}>DropIn</Text>
          </View>



          <View style={styles.inputContainer}>
            <TextInput style={{height: 50, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 20}} onChangeText={(emailText) => this.setState({emailText}) }
            value={this.state.emailText} underlineColorAndroid={'white'} placeholder={'Email'} placeholderTextColor= {'grey'} selectionColor={'black'}/>
            <TextInput style={{height: 50, borderColor: 'gray', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, paddingLeft: 10, fontSize: 20}}
            onChangeText={(passwordText) => this.setState({passwordText}) }
            value={this.state.passwordText} underlineColorAndroid={'white'} placeholder={'Password'} placeholderTextColor= {'grey'} selectionColor={'black'}/>
          </View>
          <View style={styles.signInContainer}>
              <Text style={styles.singIn}>Sign In</Text>
          </View>
          <View style={styles.newUserContainer}>
            <Text style={{textAlign: 'center', fontFamily: 'montserrat', color: 'white', marginRight: 5}}>New user?</Text>
            <Text style={{textAlign: 'center', fontFamily: 'montserrat', color: '#007AFF', textDecorationLine: 'underline'}}>Create an account</Text>
          </View>
          <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View style={styles.backButton}>
              <Image style={{height: 20, width: 20}}source={require('../DropIn-Icons-And-Files/arrow.png')}/>
              <Text style={{ fontFamily: 'montserrat', fontSize: 25, marginLeft: 5}}>Back</Text>
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
  textContainer: {position: 'absolute',  width: '100%', top: '7%',  alignItems: 'center', borderRadius: 5, justifyContent: 'center'},
  singIn: {textAlign: 'center', borderRadius: 5, fontFamily: 'montserrat', fontSize: 30, color: 'white', backgroundColor: '#007AFF'},
  signInContainer: {position: 'absolute', bottom: '20%', width: '90%', height: '10%', marginLeft: '5%', justifyContent: 'center'},
  newUserContainer: {position: 'absolute', bottom: '16%', width: '100%', flexDirection: 'row', justifyContent: 'center'},
  inputContainer: {position: 'absolute', bottom: '31%', width: '90%',  marginLeft: '5%',  justifyContent: 'center', backgroundColor: 'white'},
  backButton: {position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}

})
//position: 'absolute', left: 0, right:0, top: 0, bottom: 0,
//
//
