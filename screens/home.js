import React from 'react';
import { TouchableOpacity, Text, View, Alert, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import axios from 'axios';



class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text :  '',
            products : [{name :'a'}],
            users : []        
        }
        // this.setProducts = this.setProducts.bind(this);
        this.show = this.show.bind(this);
        this.allUsersData = this.allUsersData.bind(this);

    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/users/")
            .then(response => response.data)
            .then(data => {
                this.setState({
                    users: data
                }); 
            });
    }

    setProducts() {
        const data = [...this.state.products, {name : this.state.text }]
        this.setState({
            products : data,
            text : ''           
        })
    }

    show(){        
        return this.state.products.map((item, index) => (
            <View key={index}>
                <Text>
                    {item.name}
                </Text>
            </View>
        ))        
    }

    allUsersData() {
        return this.state.users.map((item,index) => (            
            <View key={index}> 
                <Text>
                    {item.username} 
                </Text>    
            </View>  
            )            
        )
    }

    render(){
        return(
            <SafeAreaView forceInset={{ top: "always" }} >
                <View style={{paddingHorizontal:20}}>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}         
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text : text})}
                        placeholder={'type something'} />
                    <Button title="Add" onPress={() => this.setProducts()} />
                    <View>
                        {this.show()}        
                    </View>
                    <View>
                        {this.allUsersData()}        
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default TodoList;