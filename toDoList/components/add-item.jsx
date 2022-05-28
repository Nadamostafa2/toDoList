import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import uuid from 'react-native-uuid';

const AddItem = ({ onTodoAdd }) => {
  const [title, setTitle] = useState("");
  const [errorValidaion, setError] = useState(false);
  const [msg,setMsg]=useState();
  const handleText = (val) => {
    setTitle(val);
  };
  const handleAddTDo = () => {
    if (title.length === 0) {
        setMsg("Empty Task!!");
      setError(true);
    } else if (title.length < 3) {
        setMsg("min characters must be more than 3 chars");
      setError(true);
    } else {
      setError(false);
      const todo = {
        id: uuid.v4(),
        //id:1000,
        title,
        done: false,
        delete:false
      };
      onTodoAdd(todo);
      setTitle("");
      setMsg("");

    }
  }
  return (
    <View>
      <View style={stylesadd.container}>
        <TextInput
          value={title}
          style={{ ...stylesadd.input, ...(errorValidaion ? stylesadd.inputerror : {}) }}
          
          placeholder="Enter here"
          onChangeText={handleText}
        />
        <TouchableOpacity style={stylesadd.btnContainer} onPress={handleAddTDo}>
          <Text style={stylesadd.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={stylesadd.txt}>{msg}</Text>
      </View>
    </View>
  );
}

const stylesadd = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF0066",
    flexGrow: 1,
   
    color:'white'
 },
  btnContainer: {
    width: "20%",
    height: 40,
    marginLeft: 10,
    justifyContent: "center",
    // borderWidth:2,
    borderRadius: 15,
    backgroundColor: "#FF0066",
    //borderColor:'#e86d75',
  },
  btnText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
  inputerror:{
      borderWidth:3,
      borderColor:'#FF0066',
  },
  txt:{
      marginLeft:20,
      fontSize:20,
      color:'white',
  }
})

export default AddItem;
