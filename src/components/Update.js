import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, TouchableOpacity
 } from "react-native";
 import  {Input} from 'react-native-elements';

 export default class Update extends Component{
    constructor(props){
        super(props)
        this.state = {
            input1 :'',
            input2 :''
        }
    }

    onUpdate(){
        console.log('Update')
    }


    render(){
        return(
            <View style={style.container}>
                <Text>Update</Text>
                <Input
                    placeholder='nconst'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: 'pink' }}
                    onChangeText={(input1) => this.setState({input1})}
                    value={this.state.input1}
                    />
                <Input
                    placeholder='primaryName'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: 'pink' }}
                    onChangeText={(input2) => this.setState({input2})}
                    value={this.state.input2}
                    />
                <TouchableOpacity onPress={()=>{this.onUpdate()}}>
                    <View style={{backgroundColor:'pink', padding: 10, margin: 10}} >
                        <Text>Update</Text> 
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
 }

 const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    }
 })