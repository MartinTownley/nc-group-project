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
      <Text> Test Env Var: {`${TEST_ENV_VAR}`}</Text>
      <View>
        <Text> Some more text</Text>
        <Image
          source={{
            uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcool-stuff&psig=AOvVaw03qHrfFzh9vafokl89Z3j7&ust=1679743558708000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCO8ci69P0CFQAAAAAdAAAAABAD",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        defaultView="Type here"
      />
      <script src="script.js"></script>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
