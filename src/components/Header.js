import React from "react";
import { Button, View, Text, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native"; 

export default function Header(){
   return(
      <SafeAreaView style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.hungry}>Hungry Now ?🔥</Text>
        </View>
        <TouchableOpacity>
            <View style={styles.button}>
            </View>
        </TouchableOpacity>
      </SafeAreaView>
   )
}

const styles= StyleSheet.create({
   header:{
      flex:1,
      justifyContent:'space-between',
      flexDirection:'row',
      color:'grey',
      marginTop:60,
      marginLeft:20
},
hello:{
   fontSize:20,
   color:'grey'
 },
 button:{
   backgroundColor:'red',
   width:50,
   marginRight:20,
   height:50,
   borderRadius:25
 },
 hungry:{
   fontSize:25,
   fontWeight:'bold'
 },
})