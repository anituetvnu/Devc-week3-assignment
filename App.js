import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Constants from "expo-constants";
import Button from "./Components/Button";
import ChoiceCard from "./Components/ChoiceCard";
import Stat from "./Components/Stat";
import History from "./Components/History";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

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

export default function App() {
  const [gamePrompt, setGamePrompt] = useState("Fire!");
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [statVisible, setStatVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [history, setHistory] = useState(Array.from({}));
  const [round, setRound] = useState(0);
  const [winRound, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [tie, setTie] = useState(0);
  const [playerRock, setPlayerRock] = useState(0);
  const [playerPaper, setPlayerPaper] = useState(0);
  const [playerScissors, setPlayerScissors] = useState(0);
  const [computerRock, setComputerRock] = useState(0);
  const [computerPaper, setComputerPaper] = useState(0);
  const [computerScissors, setComputerScissors] = useState(0);

  const onPress = (playerChoice) => {
    const [result, compChoice, win] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(
      (choice) => choice.name === playerChoice
    );
    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === compChoice
    );
    setRound(round + 1);

    if (win === "Player") setWin(winRound + 1);
    else if (win === "tie") setTie(tie + 1);
    else setLose(lose + 1);

    if (playerChoice == "rock") setPlayerRock(playerRock + 1);
    else if (playerChoice == "paper") setPlayerPaper(playerPaper + 1);
    else setPlayerScissors(playerScissors + 1);

    if (compChoice == "rock") setComputerRock(computerRock + 1);
    else if (compChoice == "paper") setComputerPaper(computerPaper + 1);
    else setComputerScissors(computerScissors + 1);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    setHistory([
      ...history,
      {
        player: playerChoice,
        computer: compChoice,
        win: win,
      },
    ]);
  };

  const getRoundOutcome = (userChoice) => {
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }

    if (userChoice === computerChoice) result = "Tie game!";
    let win =
      result === "Victory!"
        ? "Player"
        : result === "Defeat!"
        ? "Computer"
        : "tie";
    return [result, computerChoice, win];
  };

  const randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getResultColor = () => {
    if (gamePrompt === "Victory!") return "green";
    if (gamePrompt === "Defeat!") return "red";
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>
        {gamePrompt}
      </Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard player="Player" choice={userChoice} />
        <Text style={{ color: "#250902" }}>vs</Text>
        <ChoiceCard player="Computer" choice={computerChoice} />
      </View>
      {CHOICES.map((choice) => {
        return (
          <Button key={choice.name} name={choice.name} onPress={onPress} />
        );
      })}
      <View style={styles.navigatesContainer}>
        <TouchableOpacity
          style={styles.navigateButtonStyle}
          onPress={() => setStatVisible(!statVisible)}
        >
          <Ionicons name="md-stats" size={25} color="white" />
          <Text style={styles.navigateButtonContent}>Stat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigateButtonStyle}
          onPress={() => {
            setHistoryVisible(!historyVisible);
          }}
        >
          <FontAwesome name="history" size={25} color="white" />
          <Text style={styles.navigateButtonContent}>History</Text>
        </TouchableOpacity>
      </View>
      <Stat
        visible={statVisible}
        setVisible={setStatVisible}
        rate={{
          win: ((winRound / round) * 100).toFixed(2),
          lose: ((lose / round) * 100).toFixed(2),
          tie: ((tie / round) * 100).toFixed(2),
          playerRock: ((playerRock / round) * 100).toFixed(2),
          playerPaper: ((playerPaper / round) * 100).toFixed(2),
          playerScissors: ((playerScissors / round) * 100).toFixed(2),
          computerRock: ((computerRock / round) * 100).toFixed(2),
          computerPaper: ((computerPaper / round) * 100).toFixed(2),
          computerScissors: ((computerScissors / round) * 100).toFixed(2),
        }}
      />
      <History
        visible={historyVisible}
        setVisible={setHistoryVisible}
        history={history}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ebee",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    shadowRadius: 1,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
  },
  navigatesContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    marginHorizontal: 10,
  },
  navigateButtonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    flexDirection: "row",
  },
  navigateButtonContent: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
