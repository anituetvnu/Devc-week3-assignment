import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "../Styles/Button";

const Button = (props) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => props.onPress(props.name)}
  >
    <Text style={styles.buttonText}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </Text>
  </TouchableOpacity>
);

export default Button;
