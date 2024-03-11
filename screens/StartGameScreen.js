import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const {width,height}=useWindowDimensions();//extracting required property from this changing state

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); //this parseInt will try to extract number from string

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input",
        "Number input should be between 1 & 99 only",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance=height<380?30:100;
  return (
    <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;(Dont Use this as its not optimal)

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight<380?30:100,(not optimal)
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
