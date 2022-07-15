import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your course goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#7b2cbf"
            />
          </View>
          <View style={styles.button}>
            <Button
              title= "Cancel"
              color="#ACB5BD"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#7b2cbf",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#7b2cbf",
    borderRadius: 4,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  }
});
