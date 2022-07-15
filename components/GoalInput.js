import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

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
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput
          placeholder='Your course goal'
          placeholderTextColor="#fff"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalText}
          color="#fff"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#fff"
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
    alignItems: "center",
    padding: 16,
    backgroundColor: "#7b2cbf"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff",
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
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});
