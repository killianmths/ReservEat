import React from "react";
import { SafeAreaView,Text,ScrollView, TouchableOpacity, Image,StyleSheet, View } from "react-native";
import ScrollableRestaurant from "./ScrollableRestaurant";


class SeeAll extends React.Component{
   handlePress = () => {
      this.props.navigation.goBack();
    };
    render(){
   return(
      <SafeAreaView style={styles.safe}>
         <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.ImageContainer} onPress={this.handlePress}>
               <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
            </TouchableOpacity>
            <ScrollableRestaurant/>
            <View style={styles.rightsContainer}>
               <Text style={styles.rights}>All rights reserved</Text>
               <Text style={styles.reserveat}>ReservEat®</Text>
            </View>
            </ScrollView>
         </SafeAreaView>)
            }}

const styles = StyleSheet.create({
 ImageContainer:{
   position:'relative',
   zIndex:8000
 },
 arrow:{
   width:40,
   padding:0,
   height:40,
   marginTop:25,
   marginBottom:-70,
   marginLeft:10, 
},
 safe:{
   backgroundColor:'white'
 },
 rightsContainer:{
   textAlign:'center',
   width:"100%"
 },
 rights:{
   textAlign:'center',
   fontSize:20,
   fontWeight:600
 },
 reserveat:{
   textAlign:'center',
   fontSize:15,
   color:"#ffa401"
 }
})
export default SeeAll