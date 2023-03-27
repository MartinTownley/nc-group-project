import Header from "./components/homepage/header"
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

import axios from "axios";
//import { config } from "dotenv"; <--- don't need this, as React already has dotenv under the hood

import { Configuration, OpenAIApi } from "openai";
import { TEST_ENV_VAR } from "@env";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

export default function App() {
  const openAI = new OpenAIApi(configuration);

  return (
    <ScrollView>
      <Header />
      <Text>This is the APP!</Text>

    </ScrollView>
  );
}