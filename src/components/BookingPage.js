import React from "react";
import { SafeAreaView,Text,View, TouchableOpacity, Image,StyleSheet } from "react-native";
import ScrollPicker from "./Picker";
import Table from "./Table";
import Grid from "./Grid";
import SecondPicker from "./SecondPicker";
import { useNavigation } from "@react-navigation/native";


class BookingPages extends React.Component{
   
   handlePress = () => {
      this.props.navigation.goBack();
    };
   onPress = () => {
      this.props.navigation.navigate('Home');
      alert('Votre réservation est validée')
   };
    render(){
     
   return(
      <View style={styles.content}>
         <View style={styles.container}>
            <View style={styles.header}>
               <TouchableOpacity style={styles.ImageContainer} onPress={this.handlePress}>
                  <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
               </TouchableOpacity>
               {/* <View style={styles.textContainer}> */}
                  <Text style={styles.text}>
                     Book a table
                  </Text>
                  <View></View>
                  </View>
               {/* </View>  */}
            <View style={styles.scrollContainer}>
               <View style={styles.scroll}>
                  <ScrollPicker style={styles.secondPicker}/>
               </View>
               <View style={styles.rectangle}></View>
            </View>
         </View>
         
         <View style={styles.grid}>
         <Grid/>
         </View>
         <View style={styles.bottomText}>
            <Text style={styles.TextBottom}>Seats:4 | Table No. 6</Text>
            {/* <SecondPicker/> */}
            <Text style={styles.TextBottom}>Watch Table Position</Text>
            
         </View>
         
         <TouchableOpacity style={styles.Book} onPress={this.onPress}>
            <View>
               <Text style={styles.bookText} >Book</Text>
            </View>
         </TouchableOpacity>
         {/* <SafeAreaView style={styles.tables}>
            <Table/>
         </SafeAreaView> */}
      </View>
   )}
}

const styles = StyleSheet.create({
   grid:{
      height:"53%",
      marginTop:"10%"
   },
   arrow:{
      width:40,
      padding:0,
      height:40,
      
      
   },
   Book:{
      backgroundColor:"#ffa401",
      width:'90%',
      height:80,
      borderRadius:25,
      marginBottom:50,
      marginLeft:20
   },
   bookText:{
      color:'white',
      textAlign:'center',
      fontSize:25,
      fontWeight:600,
      marginTop:25
   },
   bottomText:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-between',
   margin:20,
},TextBottom:{
   fontSize:16,
   fontWeight:600
},
   tableContainer:{
      width:"100%",
      height:600,
      marginBottom:0,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   },
   scrollContainer:{
      height:"50%",
      marginTop:0
   },
   content:{
      height:"100%",
      width:'100%',
      marginBottom:100,
      backgroundColor:'white'
   },
   header:{
      flex:1,
      flexDirection:'row',
      justifyContent:"space-around",
      alignItems:'center',
      marginTop:"5%"
   },
   container:{
      width:'100%',
      height:'20%',
      marginTop:0,
   },
   ImageContainer:{
      width:50,
      overflow:'hidden',
      height:50,
      marginLeft:-40
   },
   text:{
      fontSize:25,
      fontWeight:600,
      marginTop:6,
      marginLeft:-10
   },
   scroll:{
      height:50,
      marginTop:"5%"
   },
   rectangle:{
      height:20,
      width:'100%',
      backgroundColor:'#ffa401',
      marginTop:-10,
      marginBottom:"-50%"
   },
   button:{
      width:20,
      height:20,
      backgroundColor:'#edf1f4',
      borderRadius:25,
      flex:1,
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:"19.5%",     top:"39%",
      borderColor:'black',
      borderWidth:1,

   },
   textStyle:{
      textAlign:'center'
   },
   tables:{
      flex:1,
      flexDirection:'row',
      justifyContent:"space-around"
   },
   Image:{
      width:"90%",
      height:5,
      marginLeft:20
   },
   secondPicker:{
      height:"5%",
      marginTop:"-20%"
   }

})
export default BookingPages;