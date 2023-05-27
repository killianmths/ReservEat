import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function FlatButton({emoji ,text}){
   return(
      <TouchableOpacity>
         <View style={styles.button}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.buttonText}>{text}</Text>
         </View>
      </TouchableOpacity>
   )
}
const styles= StyleSheet.create({
   button:{
      borderRadius:25,
      borderStyle:'solid',
      borderWidth:1,
      borderColor:'grey',
      width: 100,
      height:125,
      marginRight:10,
      backgroundColor:'white'

   },
   buttonText:{
      color:"black",
      fontWeight:'bold',
      textTranform:'uppercase',
      fontSize:16,
      textAlign:'center'
   },
   emoji:{
      textAlign:'center',
      fontSize:50,
      marginTop:15
   }
})