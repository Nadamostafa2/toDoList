import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from "react-native";
import { useState } from "react";

const TodoList = ({todos}) => {
 const [dones,setDones]=useState(2);
 const [total,setTotal]=useState(0);
 const [check,setCheck]=useState(false);

 

  return (
    <FlatList
    style={styles.listContainer}
      data={todos}
      renderItem={({ item }) => {
         
          if(item.done)setDones(5);
          const setChecked=()=>{
            setCheck(true)
          };
const handlechecked=(item)=>{
setChecked(1);

 };
        return (
            
          <View style={styles.itemContainer}>
            <Text style={styles.txt}>{item.title}</Text>
            <View style={styles.doneContainer}>
            
            {/* <TouchableOpacity style={{ ...styles.check, ...(checked ? styles.checked : {}) }} onPress={handlechecked}> */}
            <Checkbox value={item.done} onValueChange={setChecked} color={check ? '#4630EB' : undefined}/>
            <Text style={styles.txt} >
                Done
            </Text>
            {/* </TouchableOpacity> */}
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ListHeaderComponent={() => <Text style={styles.listHeader}>{dones} done of {total} tasks </Text>}
    //   ItemSeparatorComponent={() => (
    //     <View
    //       style={{
    //         borderBottomColor: "black",
    //         borderBottomWidth: 3,
    //         margin: 2,
    //       }}
    //     ></View>
    //   )}
      ListEmptyComponent={()=>(<Text>please add todo!</Text>)}
    />
  );
};

export const styles = StyleSheet.create({
    listContainer:{
      margin:5,
      padding:20,
      height:'100%'
    },
    listHeader:{
      fontSize:20,
      textAlign:'center',
      margin:10,
      },
      itemContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        //borderWidth:2,
        margin:4,
        borderRadius:25,
        //borderColor:'#C70039',
        backgroundColor:'#fae2e9',
  
      },
      txt:{
          fontSize:15,
          paddingLeft:18,
          //color:'#C70039',
          //color:'white'
      },
      doneContainer:{
        display:'flex',
        flexDirection:'row',
        width:'20%',
        justifyContent:'space-around'
      },
      check:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

        width:'20%',
    height:40,
    marginLeft:10, 
    justifyContent:'center',
    // borderWidth:2,
    borderRadius:15,
    backgroundColor:'#white',
      },
      checked:{
        width:'20%',
        height:40,
        marginLeft:10, 
        justifyContent:'center',
        // borderWidth:2,
        borderRadius:15,
        backgroundColor:'#C70039',
      }
  });
  export default TodoList ; 
  