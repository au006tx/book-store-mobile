import React from 'react';
import { TouchableOpacity, Text, View, Alert, TextInput, Button, Image, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import axios from 'axios';

import HeaderTitle from '../components/header';

import { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['book_name'];


class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books : [],
            searchTerm: ''
        }
        // this.allBooks = this.allBooks.bind(this);
        // this.onClear = this.onClear.bind(this);
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/books/")
            .then(response => response.data)
            .then(data => {
                this.setState({
                    books: data
                }); 
            });
    }

    // allBooks() {
    //     return this.state.books.map((item,index) => (            
    //         <View key={index} style={{borderColor: '#5FC9F8', borderWidth: 0.5, margin:2}} > 
    //             <Image style={{width: 150, height: 150, resizeMode: 'contain'}} source={{uri:item.get_image}} />
    //             <Text>
    //                 {item.book_name} 
    //             </Text> 
    //             <TouchableOpacity style={{borderColor: '#5FC9F8', borderWidth: 0.5, margin:2, justifyContent:'center', flexDirection:'row', backgroundColor:'#5FC9F8'}}>
    //                 <Text>Download</Text>
    //             </TouchableOpacity>   
    //         </View>  
    //         )            
    //     )
    // }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

    onClear() {
          this.setState({
              searchTerm : ''
          })
      }

    render(){
        const books = this.state.books;
        const bookfilter = books.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(            
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <SafeAreaView forceInset={{ top: "always" }} >
                    <HeaderTitle name='Home' />
                        <TextInput onChangeText={(term) => { this.searchUpdated(term)}} 
                            style={{ height: 40, borderColor: '#5FC9F8', borderWidth: 1, borderRadius: 10, margin:20 }}
                                placeholder="Type a book name to search"
                                value={this.state.searchTerm}        
                    />    
                    {this.state.searchTerm !== '' ? (
                        <View style={{justifyContent:'flex-end', flexDirection:'row', paddingHorizontal:20,}}>
                            <TouchableOpacity onPress={() => this.onClear()} style={{backgroundColor:'#5FC9F8', width:30, height:30, borderRadius:10, justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                                <Text style={{fontSize:15, color:'red'}}>
                                    X
                                </Text>        
                            </TouchableOpacity>
    
                        </View>
                    ) : null
                    }    
                    <ScrollView>
                        {bookfilter.map(item => {
                        return ( 
                            <View style={{justifyContent: 'flex-start', flexDirection:'row', paddingHorizontal:20, margin:5, borderWidth:1, borderColor:'#5FC9F8', borderRadius:10}}>
                            <Image style={{width: 150, height: 150, resizeMode: 'contain',}} source={{uri:item.get_image}}/>
                                <View>
                                    <Text>
                                        {item.book_name} 
                                    </Text> 
                                    <Text>
                                        {item.book_price} 
                                    </Text> 
                                    
                                    <Text>
                                        {item.isbn_number} 
                                    </Text> 
                                    <View style={{backgroundColor:'#5FC9F8', width:150, height:40, borderRadius:10}}>
                                        <Button title="Download" color='white' />
                                    </View>
                                </View>     
                            </View>             
                        )
                        })}  
                    </ScrollView>                    
                </SafeAreaView>
            </View>            
        )
    }
}

export default BookList;

