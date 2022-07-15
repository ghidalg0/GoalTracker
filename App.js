import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal= {addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
