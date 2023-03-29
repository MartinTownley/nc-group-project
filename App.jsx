
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
import Header from "./components/Homepage/Header"
import NavBar from "./components/Homepage/NavBar";
import Homepage from "./components/Homepage/Homepage"
import AddTrip from "./components/Add Trip/AddTrip"
import ManageHoliday from "./components/Manage Holiday/ManageHoliday"
import HolidayDashboard from "./components/Manage Holiday/HolidayDashboard"

import OnboardingMain from "./components/Onboarding/OnboardingMain"
import ProfileAndSettings from "./components/Profile+Settings/ProfileAndSettings"
import MainContainer from "./components/screens/MainContainer";

import axios from "axios";
//import { config } from "dotenv"; <--- don't need this, as React already has dotenv under the hood

import { Configuration, OpenAIApi } from "openai";
// import { TEST_ENV_VAR } from "@env";


const Stack = createNativeStackNavigator();
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});


export default function App() {
  // const openAI = new OpenAIApi(configuration);
  // const configuration = new Configuration({
  //   apiKey: process.env.OPEN_API_KEY,
  // });

  const testLocations=[[
    {
      name: 'The Refuge',
      address: 'Oxford St, Manchester M60 7HA, United Kingdom',
      coordinates: { lat: 53.4744196, lng: -2.2408512 }
    },
    {
      name: 'Impossible Manchester',
      address: '36 Peter St, Manchester M2 5GP, United Kingdom',
      coordinates: { lat: 53.4780445, lng: -2.248477 }
    },
    {
      name: 'The Alchemist',
      address: '1 New York St, Manchester M1 4HD, United Kingdom',
      coordinates: { lat: 53.4801988, lng: -2.2398574 }
    },
    {
      name: "Albert's Schloss",
      address: '27 Peter St, Manchester M2 5QR, United Kingdom',
      coordinates: { lat: 53.4782844, lng: -2.2478254 }
    },
    {
      name: 'The Milton Club',
      address: '244 Deansgate, Manchester M3 4BQ, United Kingdom',
      coordinates: { lat: 53.4779428, lng: -2.2499581 }
    },
    {
      name: 'Cloud 23',
      address: 'Beetham Tower, 303 Deansgate, Manchester M3 4LQ, United Kingdom',
      coordinates: { lat: 53.4752573, lng: -2.250699 }
    },
    {
      name: 'Menagerie Restaurant & Bar',
      address: '1 New Bailey St, Manchester M3 5EX, United Kingdom',
      coordinates: { lat: 53.4817652, lng: -2.2548198 }
    },
    {
      name: 'Revolution Deansgate Locks',
      address: '19-20 Whitworth St W, Manchester M1 5LH, United Kingdom',
      coordinates: { lat: 53.4741783, lng: -2.2460601 }
    },
    {
      name: 'San Carlo Cicchetti',
      address: '20, House of Fraser, King St W, Manchester M3 2GQ, United Kingdom',
      coordinates: { lat: 53.4818756, lng: -2.2478721 }
    }
  ]]
  const testHolidays= [{destinations:[{name}]}]

  const [isLoading, setIsLoading] = useState()
  const [user, setUser] = useState({name:"guest"})
  const [listOfHolidays,setListOfHolidays] =useState()
  const [holiday,setHoliday] =useState()
  const [preferences, setPreferences] = useState()
  const [newComment, setNewComment] = useState()
  
  
  return (<ThemeProvider theme={theme}>
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
        <Stack.Screen
          name="Onboarding"
          component={Homepage}
          options={{title: 'Welcome to TravelRouter'}}
          />

        <Stack.Screen
          name="StopPage"
          component={Homepage}
          options={{title: 'Holiday Stop- (City name)'}}
          />  

        <Stack.Screen
          name="Manage Holiday"
          component={HolidayDashboard}
          options={{title: 'Holiday Destination'}}
          />
          </Stack.Navigator>
          < AddTrip />
          </NavigationContainer>
  </ThemeProvider>);
}