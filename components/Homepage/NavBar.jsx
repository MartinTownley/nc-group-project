import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Button} from "react-native"
import reactDom from "react-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavBar = (()=>{
    return (<div>
        <View>
        <button
        className="rounded-xl bg-brand-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
      title="Home"
        onClick={() => navigation.navigate('Home')}>
        Home
        </button>
      <button
        className="rounded-xl bg-brand-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
      title="Add Holiday"
        onClick={() => navigation.navigate('Add Holiday')}>
        Add Holiday
        </button> 
        
        <button
        className="rounded-xl bg-brand-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
      title="Add Holiday"
        onClick={() => navigation.navigate('More')}>
        More
        </button>
    </View>
    </div>)
})

export default NavBar;