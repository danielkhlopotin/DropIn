import React, { Component } from 'react';
import { Text, AppRegistry, View, Image, Alert, TouchableWithoutFeedback, ScrollView, Picker, StyleSheet, TextInput} from 'react-native';
import { Font } from 'expo';
import MapView from 'react-native-maps';
import NavBar from './components/navBar';
import MyMap from './components/map';
import Test from './components/test';
import TopBar from './components/topBar';
import UserFeed from './components/userFeed';
import UserInfo from './components/userInfo';
import EventSorting from './components/eventSorting';
import EventList from './components/eventList';
import Login from './components/login';
// import Amplify from 'aws-amplify';
// import aws_exports from './YOUR-PATH-TO/aws-exports';
//
// Amplify.configure(aws_exports);

//alt backspace - delate a word in camelcase
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      isLoading: true,
      layout: 'globe',
      loggedIn: true,
      icons: {
        person: false,
        globe: true,
        list: false,
      },
      dataSource: null
    }
    this.pickPerson = this.pickPerson.bind(this);
    this.pickGlobe = this.pickGlobe.bind(this);
    this.pickList = this.pickList.bind(this);
  }
  async componentDidMount() {
    await Font.loadAsync({
      'montserrat': require('./DropIn-Icons-And-Files/Montserrat-Regular.ttf'),
      'montSemiBold': require('./DropIn-Icons-And-Files/Montserrat-SemiBold.ttf'),
      'montExtraBold': require('./DropIn-Icons-And-Files/Montserrat-ExtraBold.ttf'),
    });
    this.setState({ fontLoaded: true });


  return fetch('https://randomapi.com/api/38hnx9k0?key=RSZ1-FRWK-QX4L-6A83')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({isLoading: false, dataSource: responseJson.results[0]});
    })
    .catch((error) =>{
      console.error(error);
    });
}

  pickPerson() {
    this.setState({layout: 'person',
    icons: {
      person: true,
      globe: false,
      list: false,
    }
  });
  }
  pickGlobe() {
    this.setState({layout: 'globe',
    icons: {
      person: false,
      globe: true,
      list: false,
    }
  });
  }
  pickList() {
    this.setState({layout: 'list',
    icons: {
      person: false,
      globe: false,
      list: true,
    }
  });
  }


  render() {
    if (this.state.layout === 'globe' && this.state.fontLoaded && !this.state.isLoading) {
      return (
        <View style={{flex: 1, }}>
          <TopBar />
          <MyMap dataSource={this.state.dataSource} isloading={this.state.isLoading}/>
          <NavBar icons={this.state.icons} handle1={this.pickPerson} handle2={this.pickGlobe} handle3={this.pickList}/>
        </View>
      );
    } else if (this.state.layout === 'person' && this.state.fontLoaded && !this.state.isLoading) {
      return (
        <View style={{flex: 1 }}>
           <UserInfo firstName={this.state.dataSource.first} lastName={this.state.dataSource.last}
              level={this.state.dataSource.level} levelxp={this.state.dataSource.levelxp} xp={this.state.dataSource.xp}/>
           <UserFeed />
           <NavBar icons={this.state.icons} handle1={this.pickPerson} handle2={this.pickGlobe} handle3={this.pickList} />
        </View>
      )
    } else if (this.state.layout === 'list' && this.state.fontLoaded) {
      return (
        <View style={{flex: 1, }}>
          <EventSorting />
          <EventList />
          <NavBar icons={this.state.icons} handle1={this.pickPerson} handle2={this.pickGlobe} handle3={this.pickList}/>
        </View>
      )
    } else if (this.state.layout === 'login' && this.state.fontLoaded) {
      return (
        <Login />
      )
    } else if (this.state.layout === 'test') {
      return null;
    } else {
      return (
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./DropIn-Icons-And-Files/loading.gif')} />
        </View>
      )
    }
  }
}
//color code for these darker icons: #007AFF
//lighter blue that I sort of liked but not so sure about now: '#AFE2F9'
//really light grey from picker: '#f7f7f7'

//having a comment inside of the return function messes stuff up, don't do that
//so if you want to use an imaage, use source={require('image source')}
//don't try using image urls, it does't work


// <Test thing={this.state.icons}/>


// if (this.state.layout === 'globe') {
//   return (
//     <View style={{flex: 1, }}>
//       <TopBar />
//       <MyMap />
//       <NavBar icons={this.state.icons} handle1={this.pickPerson} handle2={this.pickGlobe} handle3={this.pickList}/>
//     </View>
//   );
// } else if (this.state.layout === 'person') {
//   return (
//     <View style={{flex: 1 }}>
//        <UserInfo />
//        <UserFeed />
//        <NavBar icons={this.state.icons} handle1={this.pickPerson} handle2={this.pickGlobe} handle3={this.pickList} />
//     </View>
//   )
// } else if (this.state.layout === 'list') {
//   return (
//     <View style={{flex: 1, }}>
//       <EventSorting />
//       <EventList />
//       <NavBar icons={this.state.icons} handle1={this.pickPerson} handle2={this.pickGlobe} handle3={this.pickList}/>
//     </View>
//   )
// }



//this was able to work inside of render:
// return (this.state.fontLoaded ? ( <TopBar />) : null)

//alignItems centers it horizontally
//justifyContent centers it vertically
