import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber == exclude) return generateRandomBetween(min, max, exclude);
  else return randomNumber;
}
let minBound = 1;
let maxBound = 100;
function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(minBound, maxBound, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    //direction can be lower or higher
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know you pressed the wrong button", [{text:'Sorry!',style:'cancel'}]);
      return;
    }
    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBound,
      maxBound,
      userNumber
    );
    setCurrentGuess(newRandomNumber); //using useState to change the original state
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Is Your number higher or lower than this?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            Lower
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            Higher
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
