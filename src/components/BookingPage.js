import React from "react";
import { SafeAreaView,Text,View, TouchableOpacity, Image,StyleSheet } from "react-native";
import ScrollPicker from "./Picker";
import Table from "./Table";


class BookingPages extends React.Component{
   handlePress = () => {
      this.props.navigation.goBack();
    };
    render(){
   return(
      <View style={styles.content}>
         <View style={styles.container}>
            <TouchableOpacity style={styles.ImageContainer} onPress={this.handlePress}>
               <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
            </TouchableOpacity>
            {/* <View style={styles.textContainer}> */}
               <Text style={styles.text}>
                  Book a table
               </Text>
               <View></View>
            {/* </View>  */}
         </View>
         
         <View style={styles.scrollContainer}>
            <View style={styles.scroll}>
               <ScrollPicker />
            </View>
            <View style={styles.rectangle}></View>
         </View>
         {/* <View style={styles.column}>
            <View style={styles.row}>
               <View style={styles.tableContainer}>
                  <TouchableOpacity >
                  <Image  style={styles.table}source={require('../assets/table.jpg')}/>
                  
                     <View style={styles.button}><Text style={styles.textStyle}>1</Text></View>
                  </TouchableOpacity>
               </View>
               <View style={styles.tableContainer}>
                  <TouchableOpacity >
                  <Image  style={styles.table}source={require('../assets/table.jpg')}/>
                  
                     <View style={styles.button}><Text style={styles.textStyle}>2</Text></View>
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.row}>
               <View style={styles.tableContainer}>
                  <TouchableOpacity >
                  <Image  style={styles.table}source={require('../assets/table.jpg')}/>
                  
                     <View style={styles.button}><Text style={styles.textStyle}>3</Text></View>
                  </TouchableOpacity>
               </View>
               <View style={styles.tableContainer}>
                  <TouchableOpacity >
                  <Image  style={styles.table}source={require('../assets/table.jpg')}/>
                  
                     <View style={styles.button}><Text style={styles.textStyle}>4</Text></View>
                  </TouchableOpacity>
               </View>
            </View>
            
            
            <View style={styles.row}>
               <View style={styles.tableContainer}>
                  <TouchableOpacity >
                     <Image  style={styles.table}source={require('../assets/table.jpg')}/>
                     <View style={styles.button}><Text style={styles.textStyle}>5</Text></View>
                  </TouchableOpacity>
               </View>
               <View style={styles.tableContainer}>
                  <TouchableOpacity >
                  <Image  style={styles.table}source={require('../assets/table.jpg')}/>
                     <View style={styles.button}><Text style={styles.textStyle}>6</Text></View>
                  </TouchableOpacity>
               </View>
               </View> 
          </View> */}
         <Image style={styles.Image} source={require('../assets/tables.jpg')}/>
         <View style={styles.bottomText}>
            <Text style={styles.TextBottom}>Seats:4 | Table No. 6</Text>
            <Text style={styles.TextBottom}>Watch Table Position</Text>
         </View>
         <TouchableOpacity style={styles.Book}>
            <View>
               <Text style={styles.bookText}>Book</Text>
            </View>
         </TouchableOpacity>
         {/* <SafeAreaView style={styles.tables}>
            <Table/>
         </SafeAreaView> */}
      </View>
   )}
}

const styles = StyleSheet.create({
   arrow:{
      width:40,
      padding:0,
      height:40,
      
      
   },
   Book:{
      backgroundColor:"#FEA93C",
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
      height:150,
      marginBottom:20,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   },
   scrollContainer:{
      height:"10%",
      marginTop:20
   },
   content:{
      height:"100%",
      width:'100%',
      marginBottom:100,
      backgroundColor:'white'
   },
   container:{
      flex:1,
      width:'100%',
      height:'10%',
      flexDirection:'row',
      marginTop:50,
      justifyContent:'space-around',
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
      height:50
   },
   rectangle:{
      height:20,
      width:'100%',
      backgroundColor:'#FEA93C',
      marginTop:-10
   },
   table:{
      width:140,
      height:140,
      paddingBottom:20
   },
   column:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:20,
      height:"100%"
   },
   row:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      
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
      height:500,
      marginLeft:20
   }

})
export default BookingPages;