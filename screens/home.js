import React from 'react';
import { TouchableOpacity, Text, View, Alert, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';



class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text :  '',
            products : [{name :'a'}]
            
        }
        // this.setProducts = this.setProducts.bind(this);
        this.show = this.show.bind(this);
    }

    setProducts() {
        const data = [...this.state.products, {name : this.state.text }]
        this.setState({
            products : data,
            text : ''
            
        })
    

    }

    show(){
        
        return this.state.products.reverse().map((item, index) => (


    
                <View key={index}>
                <Text>
                    {item.name}
                </Text>
            </View>

 
            

        ))
        
    }
   

   


    render(){

   
        return(

            
            <SafeAreaView forceInset={{ top: "always" }} >
                <View style={{paddingHorizontal:20}}>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}         
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text : text})}
                        placeholder={'type something'} />

                            <Button
                                title="Add"
                                    onPress={() => this.setProducts()}
                            />
                      


                        <View>
                            {this.show()}

                            
                        </View>
                        
                       

                </View>
                

            </SafeAreaView>


        )
    }
}

export default TodoList;

