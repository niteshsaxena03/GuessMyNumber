import { View,Text,StyleSheet } from "react-native";
function InstructionText({children}){
  return <Text style={styles.text}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 22,
  },
});