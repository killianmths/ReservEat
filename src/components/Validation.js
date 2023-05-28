import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Validation = ({ onPress }) => {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}
            onPress={onPress}
            
        ><View>
          <Text style={styles.text}>Reservations</Text>
        </View>
        <View>
          <View style={styles.circle}>
            
          </View>
        </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '95%',
      marginTop:20,
      marginLeft:10,
      height: 130,
      padding: 10,
      
      
      
    },
    touchable:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FEA93C',
        borderRadius:20,
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius:30,
    },
    text:{
        color:'white',
        fontWeight:600,
        fontSize:22,
        marginLeft:15,
        marginTop:20,

    },
    circle:{
      borderRadius:50,
      width:70,
      backgroundColor:'white',
      height:70,
      opacity:0.5,
      margin:20
      

    }
  });

export default Validation;
