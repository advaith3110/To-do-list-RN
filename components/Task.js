// Task.js

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Task({ task, index, completeTask, deleteTask }) {
  return (
    <View style={[styles.taskContainer, task.completed && styles.completedTask]}>
      <Text style={[styles.taskText, task.completed && styles.strikeThroughText]}>
        {task.text}
      </Text>
      
      {/* Render the Complete button only if the task is not completed */}
      {!task.completed && (
        <TouchableOpacity onPress={() => completeTask(index)} style={styles.completeButton}>
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      )}

      {/* Delete Button */}
      <TouchableOpacity onPress={() => deleteTask(index)} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  strikeThroughText: {
    textDecorationLine: 'line-through', // Strike-through effect for completed tasks
    color: '#888', // Optional: change color for completed text to a lighter shade
  },
  completedTask: {
    backgroundColor: '#d3ffd3', // Light green for completed tasks (optional)
  },
  completeButton: {
    backgroundColor: '#28a745', // Green for complete button
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Red for delete button
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
