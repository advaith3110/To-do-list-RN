import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

// Components
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    console.log('clicked');
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      console.log("tasks", [...tasks, { text: task, completed: false }]);
      setTask(''); // Clear the input after adding the task
    }
  };

  const completeTask = (index) => { // changed to lowercase "c"
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => { // changed to lowercase "d"
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          value={task} // Bind the TextInput's value to the task state
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {
        tasks.map((task, index) => (
          <Task
            key={index} // Required for React's internal tracking
            task={task} // Pass the task object
            index={index} // Pass the index to use in complete/delete functions
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 80, // Added paddingTop to bring down the content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center align title if desired
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Added marginBottom to space out the input from content below
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
