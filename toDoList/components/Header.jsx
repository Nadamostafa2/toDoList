import React from 'react';
import {StyleSheet, View,Text } from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor:'#C70039',
      padding:20
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:25,
    }
});

export default Header;