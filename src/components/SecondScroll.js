import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const temp = require('../data/Restaurants.json');
const DATA = temp.slice(0,5)

const Item = ({title,distance,picture}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source={{uri:picture}} style={{width:200,height:200, resizeMode:'contain', marginLeft:35, marginTop:10}}/>
    <Text style={styles.time}>⏱{distance} min</Text>
  </View>
);

const SecondScroll = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item title={item.title}  distance={item.distance} picture={item.picture}/>}
        keyExtractor={item => item.id}
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