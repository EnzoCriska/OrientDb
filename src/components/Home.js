import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, TextInput, TouchableOpacity
 } from "react-native";
 import { ListItem } from 'react-native-elements'
 

 export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }
    

    onSearchBtn(){
        console.log('search...');
        // fetch API
        this.getMySql();
        this.getOrientDB();
    }

    getMySql(){
        console.log('get Mysql')
    }

    getOrientDB(){
        console.log('get OrientDB')
    }

    list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }
      ]

    
    render(){
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{flexDirection:'row'}}>
                        <TextInput
                                style={style.input}
                                placeholder='type...'
                                onChangeText={(input) => this.setState({input})}
                                value={this.state.input}
                                
                            />
                        <TouchableOpacity onPress={()=> {this.onSearchBtn()}}>
                            <View style={style.button}>
                                <Text 
                                    style={{color:'white'}}
                                    
                                >Search</Text>
                            </View>
                        </TouchableOpacity>
                </View>
                
                <View style={style.info}>
                    <Text style={{fontSize:24,}}>Records: 30.000</Text>
                    <Text style={{fontSize:24,}}>Time:</Text>
                    <Text style={{marginLeft:50, color:'red',fontWeight:'bold',fontSize:20,}}>OrientDb:</Text>
                    <Text style={{marginLeft:50, color:'green', fontWeight:'bold',fontSize:20,}}>MySql:</Text>
                </View>
                {
                this.list.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                />
                ))
            }

            </View>
            
        )
    }
 }

 const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        margin : 10,
        padding: 5,
        borderColor:'pink',
        borderWidth:0.5,
        backgroundColor:'#f4cde0',

    },
    input:{
        backgroundColor:'pink',
        opacity: 0.5,
        color: 'blue',
        fontSize: 18,
        margin: 10,
        height: 40,
        width:320,
        borderColor: 'green',
        borderWidth: 1
    },
    button:{
        backgroundColor:'green', 
        borderRadius:5,
        margin: 10,
        height: 40,
        padding:5,
        justifyContent: 'center',
        alignItems: 'center'
    }
 })
