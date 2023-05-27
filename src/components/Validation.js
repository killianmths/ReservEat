import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Validation = ({ onPress }) => {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}
            onPress={onPress}
        >
            <Text style={styles.text}>Reservation</Text>
            <View style={{width:50, height:50, backgroundColor:'rgba(255,255,255,0.4)', borderRadius:50,borderWidth: 1,
    borderColor: 'white', left:'80%', top:-25}}></View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '94%',
      justifyContent:'center',
      marginTop:20,
      marginLeft:20,
      height: 100,
      padding: 10,
      borderRadius:20,
      
    },
    touchable:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FEA93C',
        borderRadius:20,
    },
    text:{
        color:'white',
        fontWeight:600,
        fontSize:22,
        marginLeft:15,
        marginTop:15,

    }
  });

export default Validation;
