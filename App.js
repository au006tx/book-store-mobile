import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert, TextInput, ScrollView } from 'react-native';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-navigation';

import Router from './RouterComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      value : 0,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/splash.png'),
      require('./assets/icon/account_circle.png'),
      require('./assets/icon/dashboard_off.png'),
      require('./assets/icon/dashboard_on.png'),
      require('./assets/icon/search_off.png'),
      require('./assets/icon/search_on.png'),
      require('./assets/icon/settings_off.png'),
      require('./assets/icon/settings_on.png'),
      require('./assets/icon/lock.png'),
      require('./assets/icon/right-light.png'),
      require('./assets/icon/go-back-blue.png'),
    ]);
  await Promise.all([...imageAssets]);
  }

  onIncrement() {
    this.setState({
      value : this.state.value + 1,
    });
  };

  onDecrement() {
    if(this.state.value != 0) {
      this.setState({
        value : this.state.value - 1,
      });
    }  
    else {
      Alert.alert('Remember', 'Not able to decrement the value is 0', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
        },
      ]);
    }  
  };

  onReset() {
    this.setState({
      value : 0
    });
  }


  render() {
    if (!this.state.isReady) {
      <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady : true})}
          onError={console.warn}
        />;
    }

    return (

      <Router scheme="boost" url_scheme="boost.app" />

    );
  }
}
