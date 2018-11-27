import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet
 } from "react-native";
import {Button} from 'react-native-button'

 export default class Home extends Component{
    
    render(){
        return(
            <View style={style.container}>
                <Text>Delete</Text>
            </View>
        )
    }
 }

 const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
 })