// Navbar.js
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { navbarStyles } from '../styles/componentSyles';
// Import styles

const Navbar = () => {
  const [count, setCount] = useState(1);

  return (
    <View style={navbarStyles.navbar}>
      <Text style={navbarStyles.heading}>
        Navbar For React Application
      </Text>
      <TouchableOpacity
        style={navbarStyles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={navbarStyles.buttonText}>{count}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
