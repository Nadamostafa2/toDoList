import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AddItem from './components/add-item'
import { useState } from 'react';
import TodoList from './components/todo-list'

export default function App() {
  const [list,setList]=useState([
    {id:1,title:"task1",done:false},
    {id:2,title:"task2",done:true},
    {id:3,title:"task3",done:false}
  ]);
  const handleAddTodo=(todo)=>{
    setList([...list,todo])
  }
  return (
    <View style={styles.container}>
      <Header title={"My ToDo List"}></Header>
      <AddItem onTodoAdd={handleAddTodo}></AddItem>
      <TodoList todos={list}/>
      <StatusBar hidden />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   height:'100%'
  },
});
