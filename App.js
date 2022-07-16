import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Image source={require("./assets/images/goal.png")} style={styles.image} />
        <Button title="Add New Goal" color="#fff" onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal= {addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 16,
    backgroundColor: "#7b2cbf",
    flex: 1,
  },
  goalsContainer: {
    marginTop: 24,
    flex: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: "center",
    marginBottom: 50,
  },
});
