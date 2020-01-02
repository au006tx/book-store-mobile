import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Text, View } from 'native-base';


export default class HeaderTitle extends Component {
  render() {
    return (      
      <View style={{backgroundColor:'#5FC9F8', height:50, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
        <Text style={{alignItems:'center', paddingHorizontal:100, fontSize:30}}>{this.props.name}</Text>
      </View>    
        
    );
  }
}