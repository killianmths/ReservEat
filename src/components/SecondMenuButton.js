import React from "react";
import { ScrollView, StyleSheet, View, Button } from "react-native";


const SecondMenu =(props)=> {
   return(
     <View style={styles.SecondMenu}>
     <Button title={props.name}
         backgroundColor="red"
         onPress={()=>Alert.alert('Button')}
 />
     </View>
   )
 }
 
function SecondMenuButton(){
   return(
      <ScrollView horizontal={true}>
         <SecondMenu name="Bil's Diner"/>
         <SecondMenu name="Azuki"/>
         <SecondMenu name="Les restos du coeur"/>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   SecondMenu:{
      height:300,
      width:300
   }
})
export default SecondMenuButton