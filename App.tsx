import { StyleSheet, Text, View, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import Button from "./components/Button";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import RoundedOption from "./components/RoundedOption";
import CorrentGermanWord from "./components/CorrentGermanWord";
import { useState } from "react";
const window = Dimensions.get("window");
interface Iresult {
  visible: boolean;
  correct: boolean;
}
export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<Iresult>({
    visible: false,
    correct: false,
  });
  const correctAnswer = "Hause";
  if (!fontsLoaded) return <AppLoading />;
  const resetGame = ()=>{
    setSelectedOption(null);
    setResult({visible: false,
      correct: false,})
  }
  const onPress = (v: string) => {
    if(!result.visible)
    setSelectedOption(v);
  };
  const getState = () => {    
    if(!selectedOption) return "CONTINUE";    
    if(result.visible && result.correct) return 'CORRECT';
    if(result.visible && !result.correct) return 'WRONG';   
    if(selectedOption!=null){
      return "SELECTED";     
    }    
    return 'CONTINUE';
  };
  const onCheckAnswer = () => {
    const st = getState();
    if (st== "SELECTED") {
      setResult({ visible: true, correct: selectedOption == correctAnswer });
    }else if(st=="WRONG" || st=="CORRECT"){
      resetGame();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.roundedContainer}>
        <View style={styles.gapContainer}>
          <View style={styles.optionWordContainer}>
            <Text style={styles.fillText}>Fill in the missing word</Text>
            <Text style={styles.englishWord}>The house is small.</Text>
            <View style={styles.germanSentence}>
              <CorrentGermanWord text="Das" hint="The" />
              {selectedOption ? (
                <Text style={[styles.boxWord, styles.shadow,result.correct && styles.correct,result.visible && !result.correct && styles.wrong]}>
                  {selectedOption}
                </Text>
              ) : (
                <Text style={styles.noOption}></Text>
              )}
              <CorrentGermanWord text="ist" hint="is" />
              <CorrentGermanWord text="klein." hint="small" />
            </View>
            <View style={styles.optionContainer}>
              <RoundedOption
                text={"Foigen"}
                onPress={onPress}
                selected={selectedOption == "Foigen"}
              />
              <RoundedOption
                text={"Schaf"}
                onPress={onPress}
                selected={selectedOption == "Schaf"}
              />
              <RoundedOption
                text={"Bereiden"}
                onPress={onPress}
                selected={selectedOption == "Bereiden"}
              />
              <RoundedOption
                text={"Hause"}
                onPress={onPress}
                selected={selectedOption == "Hause"}
              />
            </View>
          </View>
          <View style={[styles.result,result.visible && result.correct && styles.correct,result.visible && !result.correct && styles.wrong]}>
            <Text style={styles.resultText}>
              {
                result.visible && result.correct && <>Great Job!</> ||
                result.visible && !result.correct && <>Answer: {correctAnswer}</>
              }
              </Text>
            <Button state={getState()} onPress={onCheckAnswer} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77dafe",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow:'hidden'
  },
  roundedContainer: {
    backgroundColor: "#3d6d82",
    width: window.width,
    height: window.height * 0.8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: window.width * 0.08,
  },
  fillText: {
    fontFamily: "Nunito_300Light",
    textAlign: "center",
    color: "#fff",
    marginBottom: window.height * 0.025,
  },
  englishWord: {
    fontFamily: "Nunito_500Medium",
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    marginBottom: window.height * 0.05,
  },
  germanSentence: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  correctGermanWord: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
    color: "#fff",
    borderStyle: "dotted",
    borderRadius: 1,
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  boxWord: {
    backgroundColor: "#fff",
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
  optionContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: window.width * 0.8,
  },
  optionWordContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "60%",
  },
  options: {
    margin: 10,
  },
  gapContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  noOption: {
    width: 45,
    position: "relative",
    top: 8,
    borderStyle: "dotted",
    borderRadius: 1,
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  result: {
    // backgroundColor: "#32e7ea",
    position: "absolute",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: window.height * 0.06,
    paddingHorizontal: window.width * 0.08,
    top: window.height * 0.5,    
    left: -window.width * 0.08,
    width: window.width,
    height: window.height * 0.3,
    zIndex: 1,
  },
  correct:{
    backgroundColor: "#32e7ea",
    color:'#fff'
  },
  wrong:{
    backgroundColor:'#fe7b87',
    color:'#fff'
  },
  resultText:{
    position:'absolute', 
    fontFamily:"Nunito_700Bold",   
    fontSize:18,
    color:'#fff',
    top:window.height*0.05
  }
});
