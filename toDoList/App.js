import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"My ToDo List"}></Header>
      <Text></Text>
      <StatusBar hidden />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
