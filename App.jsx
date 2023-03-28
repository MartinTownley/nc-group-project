
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

  const [isLoading, setIsLoading] = useState()
  const [user, setUser] = useState()
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
                            </Stack.Navigator>

    <View>
            < Header />
            < AddTrip />
            < Homepage />
            < ManageHoliday />
            < OnboardingMain />
            < ProfileAndSettings />
    </View>

                    </NavigationContainer>
   
          /* <Stack.Screen
          name="Home"
          component={Homepage}
          options={{title: 'Welcome back (user name)'}}
        />
        <Stack.Screen
          name="Add Holiday"
          component={Homepage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="More"
          component={Homepage}
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
  </ThemeProvider>);
}