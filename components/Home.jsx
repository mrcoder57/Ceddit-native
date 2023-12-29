import { Text, View, ScrollView } from "react-native";
import React, { Component } from "react";3
import { homeStyle } from "../styles/componentSyles";

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={homeStyle.heading}>
            We are currently seeing home page of the application
        </Text>
        
      </View>
    );
  }
}

export default Home;
