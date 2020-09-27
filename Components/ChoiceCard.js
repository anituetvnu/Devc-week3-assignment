import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../Styles/ChoiceCard";

const ChoiceCard = ({ player, choice: { uri, name }, win }) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);
  const color =
    win === undefined
      ? "black"
      : win === "tie"
      ? "#00ff00"
      : win == player
      ? "#00ff00"
      : "#ff3300";
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{player}</Text>
      <Image source={{ uri }} resizeMode="contain" style={styles.choiceImage} />
      <Text style={[styles.choiceCardTitle, { color: color }]}>{title}</Text>
    </View>
  );
};

export default ChoiceCard;
