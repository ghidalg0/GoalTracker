import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color:"#DDE2E6" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  pressedItem: {
    opacity: 0.1,
  },
  goalText: {
    padding: 8,
    color: "#7b2cbf",
  },
});
