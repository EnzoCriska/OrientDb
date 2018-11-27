import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'

import Home from './components/Home'
import Insert from './components/Insert'
import Update from './components/Update'
import Delete from './components/Delete'
import Join from './components/Join'

import Ionicons from 'react-native-vector-icons/Ionicons';

const stackNavigation = createBottomTabNavigator({
    Home:{
        screen: Home
    },
    Insert:{
        screen: Insert
    },
    Update:{
        screen: Update
    },
    Delete:{
        screen: Delete
    },
    Join:{
        screen: Join
    }
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if(routeName === 'Home'){
            iconName = 'ios-home';
          }else if(routeName === 'Insert'){
            iconName = `ios-add-circle`;
          }else if(routeName === 'Update'){
            iconName = `ios-repeat`;
          }else if(routeName === 'Delete'){
            iconName = `ios-remove-circle`;
          }else{
            iconName = `ios-link`;
          }
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }
  })

export default stackNavigation;