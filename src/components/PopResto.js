import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

function PopResto({onPress}){
   return(
      <View style={styles.view}>
      <Text style={styles.bold}>
        Popular Restaurants
      </Text>
         <TouchableOpacity onPress={onPress}>
            <Text style ={styles.other}>
               See all
            </Text>
         </TouchableOpacity>

    </View>
   );
}



const styles = StyleSheet.create({
   view:{
      margin:20,
      flex:1,
      flexDirection:'row',
      justifyContent:"space-between",
      textAlign:"c"
   },
   bold:{
      fontSize:25,
      fontWeight:"bold",
   },
   other:{
      color:'grey',
      fontSize:17,
      marginTop:6   
   }
})

export default PopResto