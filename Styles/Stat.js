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
    height: 500,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "green",
    borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
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
  rateContainer: {
    width: 300,
    justifyContent: "space-around",
    height: 400,
  },
  row: {
    flexDirection: "column",
  },
  rowTitle: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  rowContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cell: {
    flexDirection: "column",
    alignItems: "center",
  },
  cellTitle: {
    fontSize: 20,
  },
  cellContent: {
    fontSize: 20,
  },
});

export default styles;
