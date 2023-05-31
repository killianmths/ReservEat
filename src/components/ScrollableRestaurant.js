import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Restaurant from './RestaurantScreen.js';

const DATA = require('../data/Restaurants.json')

const Item = ({onPress, title, picture, distance,adresse}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>⏱{distance} min</Text>
    </View>
    <Image source={{uri:picture}} style={{width:"80%",height:"58%", resizeMode:'stretch', marginLeft:"10%", marginTop:"5%",borderRadius:'25'}}/>
    <Text style={styles.description}>{adresse}</Text>
    
  </TouchableOpacity>
);

const ScrollableRestaurant = () => {
  const navigation = useNavigation()
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
  
    return (
      <Item
        item={item}
        onPress={ () => navigation.navigate("Restaurant", { data: item })}
        title={item.title}  distance={item.distance} picture={item.picture} pictures={item.pictures}/>
    );
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Restaurants</Text>
      <FlatList
         vertical={true}
         showsVerticalScrollIndicator={false}
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
    backgroundColor:'white',
  },
  item: {
    backgroundColor: '#f8f8f8',
    width:"90.5%",
    height:450,
    borderRadius:25,
    marginRight:10,
    marginLeft:20,
    marginBottom:20,
  },
  title: {
    fontSize: 22,
    marginLeft:15,
    marginTop:"5%",
    color:'black',
    fontWeight:600
  },
  time:{
      fontSize:18,
      marginRight:20,
      marginTop:"6%",
      color:'black'
  },
  textContainer:{
    
    flexDirection:'row',
    justifyContent:'space-between',
    height:50
  },
  description:{
    fontSize:20,
    marginLeft:'10%',
    marginTop:"5%",
    color:'black',
    textAlign:"center",
    marginRight:"10%"
  },
  h1:{
    fontSize:40,
    textAlign:'center',
    fontWeight:800,
    margin:20,
    color:'#ffa401'
  },

});

export default ScrollableRestaurant;