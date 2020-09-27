import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ChoiceCard from "./ChoiceCard";
import styles from "../Styles/History";

const CHOICES = [
  {
    name: "rock",
    uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png",
  },
  {
    name: "paper",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png",
  },
  {
    name: "scissors",
    uri:
      "http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png",
  },
];

const History = (props) => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade"
      propagateSwipe={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.boxContainer}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>History</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {props.history.map((round) => {
              const playerChoice = CHOICES.find(
                (choice) => choice.name === round.player
              );
              const computerChoice = CHOICES.find(
                (choice) => choice.name === round.computer
              );

              return (
                <View style={styles.choicesContainer}>
                  <ChoiceCard
                    player="Player"
                    choice={playerChoice}
                    win={round.win}
                  />
                  <Text style={{ color: "#250902" }}>vs</Text>
                  <ChoiceCard
                    player="Computer"
                    choice={computerChoice}
                    win={round.win}
                  />
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              props.setVisible(!props.visible);
            }}
            style={styles.boxClose}
          >
            <Text style={styles.close}> Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default History;
