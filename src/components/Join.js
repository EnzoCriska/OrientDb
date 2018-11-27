import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet
 } from "react-native";


 export default class Join extends Component{
    
    render(){
        return(
            <View style={style.container}>
                <Text>Join</Text>
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
