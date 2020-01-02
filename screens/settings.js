import React from 'react';
import { TouchableOpacity, Text, View, Alert, TextInput, Button, Image, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import axios from 'axios';

import HeaderTitle from '../components/header';


class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
       
    }


    render(){

        return(
            <View style={{flex: 1,
              
                backgroundColor: 'white'}}>
                    <SafeAreaView forceInset={{ top: "always" }} >
                <HeaderTitle name='Settings' />

                <ScrollView>
                <Text>
                    Settings screen
                </Text>
                </ScrollView>
                
                
            </SafeAreaView>

                </View>
            
        )
    }
}

export default Settings;

