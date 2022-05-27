import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AddItem from './components/add-item'
import { useState } from 'react';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header title={"My ToDo List"}></Header>
      <AddItem ></AddItem>
      
      <StatusBar hidden />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
