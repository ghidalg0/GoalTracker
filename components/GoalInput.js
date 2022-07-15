import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const GoalInput = (props) => {

  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your course goal'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#7b2cbf",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#7b2cbf",
    borderRadius: 4,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

});
