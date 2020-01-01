import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert, TextInput } from 'react-native';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import  HeaderTitle  from './components/header';

import { SafeAreaView } from 'react-navigation';

import TodoList from './screens/home';


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


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <SafeAreaView forceInset={{ top: "always" }} >
        <HeaderTitle name='Home' />
        <View>
          <Text>
            Welcome
          </Text>
          <Text>
            {this.state.value}
          </Text>
          <TouchableOpacity onPress={() => this.onIncrement()}>
            <Text> Increment </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onDecrement()}>
            <Text> Decrement </Text>
          </TouchableOpacity>
          <TodoList />

        </View>

      </SafeAreaView> 
    );
  }
}
