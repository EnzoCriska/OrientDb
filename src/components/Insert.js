import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, TouchableOpacity,
 } from "react-native";
 import  {Input} from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome';
 export default class Insert extends Component{
    constructor(props){
        super(props)
        this.state = {
            input1 :'',
            input2 :'',
            input3 :''
        }
    }

    onAdd(){
        console.log(this.state);
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <View style={style.container}>
                <Text>Insert</Text>
                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: 'pink' }}
                    onChangeText={(input1) => this.setState({input1})}
                    value={this.state.input1}
                    />
                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: 'pink' }}
                    onChangeText={(input2) => this.setState({input2})}
                    value={this.state.input2}
                    />
                <Input 
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: 'pink' }}
                    onChangeText={(input3) => this.setState({input3})}
                    value={this.state.input3}
                    />    
                <TouchableOpacity onPress={()=>{this.onAdd()}}>
                    <View style={{backgroundColor:'pink', padding: 10, margin: 10}} >
                        <Text>Add</Text> 
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
 }

 const style = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        marginTop: 50,
    }
 })