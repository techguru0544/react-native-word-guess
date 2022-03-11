import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
interface RoundedOptionProps {
  text: string;
  selected?: boolean;
  onPress: (v:string) => void;
}
function RoundedOption(props: RoundedOptionProps) {
  const { text, selected, onPress } = props;
  return (
    <Pressable onPress={()=>onPress(text)}>
      <View
        style={[
          styles.options,
          selected ? styles.selected : styles.boxWord,
          styles.shadow,
        ]}
      >
        <Text
          style={[
            styles.text,
            selected ? styles.textHidden : styles.textVisible,
          ]}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  options: {
    margin: 10,
  },
  boxWord: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  selected: {
    backgroundColor: "rgba(255,255,255,0.4)",
    fontFamily: "Nunito_700Bold",
    color: "#47627d",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: "Nunito_700Bold",
    color: "#47627d",
  },
  textVisible: {
    opacity: 1,
  },
  textHidden: {
    opacity: 0,
  },
});
export default RoundedOption;
