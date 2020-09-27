import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    width: 330,
    height: 600,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "green",
    borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  choicesContainer: {
    margin: 10,
    borderBottomWidth: 1,
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
  boxTitle: {
    backgroundColor: "#00ff00",
    width: 326,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  boxClose: {
    backgroundColor: "#ff3300",
    width: 326,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    fontSize: 30,
  },
  scrollView: {
    width: 300,
  },
});

export default styles;
