import { StyleSheet, View, Text } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#7b2cbf",
  },
  goalText: {
    color: "#fff",
  },
});
