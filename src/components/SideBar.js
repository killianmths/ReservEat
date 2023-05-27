import React from 'react';
import { TextInput, StyleSheet, View, Image, Button } from 'react-native';

function SideBar(){
   return(
      <View style={SideBarStyles.input}>
         <View style={SideBarStyles.imageContainer}><Image style={SideBarStyles.image} source={require('./../assets/search.png')}/></View>
         <View style={SideBarStyles.search}><TextInput style={SideBarStyles.searchType} 
      placeholder='Type here...'/>
      </View>
      <View style={SideBarStyles.imageContainer}><Image style={SideBarStyles.image} source={require('./../assets/control.png')}/></View>
      </View>
   )
}

const SideBarStyles = StyleSheet.create({
input:{
   flex:1,
   justifyContent:'center',
   flexDirection:'row',
   alignItems:'center',
   width:370,
   margin:20,
   borderRadius:20,
   height:60,
   borderStyle:'solid',
   borderColor:'#f8f8f8',
   borderWidth:2,
   
},
searchType:{
   width:280,
   height:60,
},
imageContainer:{
maxWidth:40
},
image:{
   width:25,
   height:25,
   resizeMode:'contain',
   marginRight:10
}
})
export default SideBar