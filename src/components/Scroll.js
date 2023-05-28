import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = require('../data/TypeOfRestaurant.json')

const Item = ({item, onPress, backgroundColor, textColor, borderWidth}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor, borderWidth}]}>
   <Text style={styles.emoji}>{item.emoji}</Text>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const Scroll = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FEA93C' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';
    const border = item.id === selectedId ? 0:2 ;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        borderWidth={border}
      />
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
    flexDirection:'row',
    marginTop: 0,
    marginLeft:20
  },
  item: {
    width:100,
    height:120,
    marginRight:10,
    borderRadius:25,
    borderStyle:'solid',
    borderColor:'#f8f8f8',


  },
  title: {
    fontSize: 17,
    textAlign:'center',
    fontWeight:'bold'
  },
  emoji:{
   textAlign:'center',
   fontSize:50,
   marginTop:15
  }
});

export default Scroll;