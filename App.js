import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(goalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#7b2cbf" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput onAddGoal= {addGoalHandler} />}
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
