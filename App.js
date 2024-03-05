import { useState } from "react";
import { StyleSheet, ImageBackground,SafeAreaView} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  //using a new variable to point to screen
  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>//this onPickNumber is a custom prop that is passed in order to gather the info from other components

  if(userNumber){
    screen=<GameScreen/>
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dices.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.35,
  },
});
