
import { StatusBar } from "expo-status-bar";
import React from "react";
import reactDom from "react-dom";
import {NavigationContainer, Navigator} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import Dashboard from "./components/Homepage/Dashboard"
import ListOfTrips from "./components/Homepage/ListOfTrips"
import SocialFeed from "./components/Homepage/SocialFeed"
import Header from "./components/Homepage/Header"
import CommentsSection from "./components/Manage Holiday/CommentsSection"
import HolidayDashboard from "./components/Manage Holiday/HolidayDashboard"
import HolidayStopCard from "./components/Manage Holiday/HolidayStopCard"
import HolidayStopPage from "./components/Manage Holiday/HolidayStopPage"
import NavBar from "./components/Homepage/NavBar";



import axios from "axios";
//import { config } from "dotenv"; <--- don't need this, as React already has dotenv under the hood

import { Configuration, OpenAIApi } from "openai";
// import { TEST_ENV_VAR } from "@env";


const Stack = createNativeStackNavigator();



export default function App() {
  // const openAI = new OpenAIApi(configuration);
  // const configuration = new Configuration({
  //   apiKey: process.env.OPEN_API_KEY,
  // });

  const [isLoading, setIsLoading] = useState()
  const [user, setUser] = useState()
  const [listOfHolidays,setListOfHolidays] =useState()
  const [holiday,setHoliday] =useState()
  const [preferences, setPreferences] = useState()
  const [newComment, setNewComment] = useState()
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
   
        <Stack.Screen
          name="Home"
          component={NavBar}
          options={{title: 'Welcome back (user name)'}}
        />
        <Stack.Screen
          name="Add Holiday"
          component={NavBar}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="More"
          component={NavBar}
          options={{title: 'Manage Your Account'}}
        />
                            </Stack.Navigator>
                    </NavigationContainer>


          /* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome back (user name)'}}
        />
        <Stack.Screen
          name="Add Holiday"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="More"
          component={HomeScreen}
          options={{title: 'Manage Your Account'}}
        />
        
        <Stack.Screen
          name="Onboarding"
          component={HomeScreen}
          options={{title: 'Welcome to TravelRouter'}}
        />

        <Stack.Screen
          name="StopPage"
          component={HomeScreen}
          options={{title: 'Holiday Stop- (City name)'}}
        />  

        <Stack.Screen
          name="Manage Holiday"
          components={{HolidayDashboard}{HolidayStopCard}}
          options={{title: 'Holiday Destination'}}
        />   */
  );
}