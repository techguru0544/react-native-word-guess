import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
interface Props {
  onPress: () => void;
  state: string;
}
export default function Button(props: Props) {
  const { onPress, state } = props;
  const STATE: any = {
    CONTINUE: "CONTINUE",
    SELECTED: "CHECK ANSWER",
    WRONG: "CONTINUE",
    CORRECT: "CONTINUE",
  };
  console.log(state);
  const getStateStyles = () => {
    switch (state) {
      case "SELECTED":
        return styles.checkAnswer;
      case "CORRECT":
        return styles.result;
      case "WRONG":
        return styles.result;
      default:
        return styles.continue;
    }
  };
  const getStateTextStyles = () => {
    switch (state) {
      case "CORRECT":
        return styles.correctText;
      case "WRONG":
        return styles.wrongText;
      default:
        return styles.normalText;
    }
  };
  return (
    <Pressable style={[styles.button, getStateStyles()]} onPress={onPress}>
      <Text style={[styles.text, getStateTextStyles()]}>{STATE[state]}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop:50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    fontFamily: "Nunito_400Regular",
    letterSpacing: 0.25,
  },
  normalText: {
    color: "white",
  },
  continue: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  checkAnswer: {
    backgroundColor: "#32e7ea",
  },
  result: {
    backgroundColor: "#fff",
  },
  correctText: {
    color: "#32e7ea",
  },
  wrongText: {
    color: "#fe7b87",
  },
});
