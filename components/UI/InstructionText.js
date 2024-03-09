import { View,Text,StyleSheet } from "react-native";
function InstructionText({children,style}){
  return <Text style={[styles.text,style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily:'open-sans',
    color: "white",
    fontSize: 22,
  },
});