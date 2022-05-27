import React from 'react';
import { StyleSheet, View,TextInput,Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const AddItem = () => {
    const [title,setTitle]=useState('');
    const [errorValidaion,setError]=useState('');
    const handleText=(val)=>{setTitle(val);
    };
    const handleAddTDo=()=>{
        if (title.length===0) {
            setError("Empty Task!!");
            
        }
        else if (title.length<3) {
            setError("min characters must be 3");
            
        }
        else{ 
        setError('');
        setTitle('');
        }

    };
    return (
        <View>
        <View style={stylesadd.container}>
            <TextInput value={title} style={stylesadd.input} placeholder="Enter here" onChangeText={handleText}/>
            <TouchableOpacity  style={stylesadd.btnContainer} onPress={handleAddTDo}>
        <Text style={stylesadd.btnText}>Add</Text>
            </TouchableOpacity>
            
        </View>
        <View>
            <Text>{errorValidaion}</Text>
        </View>
        </View>
    );
};


const stylesadd = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between'
      },
    input: {
        borderBottomWidth:2,
      borderBottomColor:'#e86d75',
      flexGrow:1,
    },
    btnContainer:{
    width:'20%',
    height:40,
    marginLeft:10, 
    justifyContent:'center',
    // borderWidth:2,
    borderRadius:15,
    backgroundColor:'#C70039',
    //borderColor:'#e86d75',
    },
    btnText:{
        color:'white',
       fontSize:20,
       alignSelf:'center',
    }
});


export default AddItem ;