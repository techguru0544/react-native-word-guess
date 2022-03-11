import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
interface CorrentGermanWordProps {
  text: string;
  hint: string;
}
const { height } = Dimensions.get("screen");
function CorrentGermanWord(props: CorrentGermanWordProps) {
  const { text, hint } = props;
  const [longHover, setLongHover] = useState(false);
  return (
    <Pressable
      onPressIn={() => {
        setLongHover(true);
      }}
      onPressOut={()=>{
        setLongHover(false);
      }}
    >
      <View style={styles.correctGermanWord}>
        {longHover && (
          <View style={[styles.hint]}>
            <Text style={styles.hintText}>{hint}</Text>
            <View
              style={[styles.arrow, { transform: [{ rotate: "45deg" }] }]}
            ></View>
          </View>
        )}
        <Text style={styles.correctGermanWordText}>{text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  correctGermanWord: {
    borderStyle: "dotted",
    borderRadius: 1,
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  correctGermanWordText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
    color: "#fff",
  },
  arrow: {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    position: "absolute",
    top: 20,
    alignSelf: "center",
  },
  hint: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    position: "absolute",
    top: -height * 0.05,
    left: -8,
  },
  hintText: {
    color: "#47627d",
  },
});
export default CorrentGermanWord;
