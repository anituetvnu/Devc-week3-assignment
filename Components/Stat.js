import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "../Styles/Stat";

const Stat = (props) => {
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
            <Text style={styles.title}>Statistic</Text>
          </View>
          <View style={styles.rateContainer}>
            <View style={styles.row}>
              <Text style={styles.rowTitle}>Game</Text>
              <View style={styles.rowContent}>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Win</Text>
                  <Text style={styles.cellContent}>{props.rate.win}%</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Lose</Text>
                  <Text style={styles.cellContent}>{props.rate.lose}%</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Tie</Text>
                  <Text style={styles.cellContent}>{props.rate.tie}%</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowTitle}>Player</Text>
              <View style={styles.rowContent}>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Rock</Text>
                  <Text style={styles.cellContent}>
                    {props.rate.playerRock}%
                  </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Paper</Text>
                  <Text style={styles.cellContent}>
                    {props.rate.playerPaper}%
                  </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Scissors</Text>
                  <Text style={styles.cellContent}>
                    {props.rate.playerScissors}%
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowTitle}>Computer</Text>
              <View style={styles.rowContent}>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Rock</Text>
                  <Text style={styles.cellContent}>
                    {props.rate.computerRock}%
                  </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Paper</Text>
                  <Text style={styles.cellContent}>
                    {props.rate.computerPaper}%
                  </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellTitle}>Scissors</Text>
                  <Text style={styles.cellContent}>
                    {props.rate.computerScissors}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
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

export default Stat;
