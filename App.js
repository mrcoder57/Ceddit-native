import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Posts";

export default function App() {
  return (
    <View style={styles.appcontainer} >
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.title}>
          Hey there! This is my first React Native project.
        </Text>
        <Home />
        <Post/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontFamily: "monospace",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  appcontainer:{
    backgroundColor:"black",
    width:'100%',
    height:"100%",
    marginTop:0
  }
});
