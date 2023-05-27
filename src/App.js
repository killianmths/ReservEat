import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Alert} from 'react-native';
import SideBar from './components/SideBar';
import PopResto from './components/PopResto';
import SecondMenuButton from './components/SecondMenuButton';
import MenuButtons from './components/MenuButtons';



  export default class App extends React.Component{
    
    render() {
      return (
      <View>
    <ScrollView >
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.hungry}>Hungry Now ?🔥</Text>
        </View>
        <View style={styles.btn}><Button 
        title=''
        backgroundColor="red"
        onPress={()=>Alert.alert('Button')}
        /></View>
      </View>
     
    <SideBar/>
    <ScrollView horizontal={true}>
        <MenuButtons/>
    </ScrollView>
    <PopResto/>
    <SecondMenuButton/>
    </ScrollView> 
    </View>);
}}

const styles = StyleSheet.create({
  button:{
    width:50,
    height:50
  },
  bold:{
    fontWeight:'bold',
    fontSize:25
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    color:'grey',
    marginTop:60,
    marginLeft:20,

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
  MenuButtons:{
    width:100,
    height:120,
    marginLeft:20,
    borderRadius:25,
    backgroundColor:'red',
    flex:1,
    flexDirection:'row'
  }
});
