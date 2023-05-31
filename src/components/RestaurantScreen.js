import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import RestaurantLook from './RestaurantLook';




class Restaurant extends React.Component {
    handlePress = () => {
        this.props.navigation.goBack();
      };
      render(){
        
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.topButtons} >
            <TouchableOpacity onPress={this.handlePress}>
                <Image style={styles.arrow} source={require("../assets/arrow.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.heart} source={require("../assets/heart.png")}/>
            </TouchableOpacity>
        </SafeAreaView>
        <RestaurantLook/>
    </View> 
    

  );
}}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffa401",
        width:"100%",
        height:"100%"
    },
    arrow:{
        width:40,
        padding:0,
        height:40,
        marginLeft:"5%"
        
        
     },
     topButtons:{
        height:"1%",
        flexDirection:'row',
        justifyContent:'space-between',
     },
     heart:{
        width:30,
        padding:0,
        height:30,
        marginRight:"4%",
    marginTop:"10%"}

});

export default Restaurant