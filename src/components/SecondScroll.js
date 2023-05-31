import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  NavLink
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Restaurant from './RestaurantScreen.js'
import { useNavigation, useRoute } from '@react-navigation/native';


const temp = require('../data/Restaurants.json');
const DATA = temp.slice(0,5)

const Item = ({item,title,distance,picture,onPress,pictures}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source={{uri:picture}} style={{width:200,height:170,borderRadius:25, resizeMode:'stretch', marginLeft:35, marginTop:"10%"}}/>
    <Text style={styles.time}>⏱{distance} min</Text>
  </TouchableOpacity>
);

const SecondScroll = () => {
  const navigation =useNavigation()
  const [selectedId, setSelectedId]=useState();

  const renderItem =({item}) => {

  return ( 
    <Item 
    item={item}
    onPress={ () => navigation.navigate("Restaurant", { data: item })}
    title={item.title}  distance={item.distance} picture={item.picture} pictures={item.pictures}/>
  );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft:20
  },
  item: {
    backgroundColor: '#f8f8f8',
    width:270,
    height:320,
    borderRadius:25,
    marginRight:10
  },
  title: {
    fontSize: 22,
    fontWeight:'500',
    marginLeft:15,
    marginTop:15
  },
  time:{
      fontSize:18,
      marginLeft:10,
      marginTop:20
  }
});

export default SecondScroll;