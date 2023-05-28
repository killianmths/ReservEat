import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
   id: '4',
 },
 {
   id: '5',
 },
 {
   id: '6',
 }
];

const Item = ({item, onPress, backgroundColor, textColor, borderW}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
   <Image  style={styles.Image} source={require('../assets/table.jpg')}/>
   <View style={[styles.Text,{backgroundColor}, {borderColor: borderW}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.id}</Text>
    </View>
  </TouchableOpacity>
);

const Table = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FEA93C' : '#edf1f4';
    const color = item.id === selectedId ? 'white' : 'black';
    const border = item.id === selectedId ? '#FEA93C' : '#000';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        borderW={border}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      disableScrollViewPanResponder
       style={styles.content}
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
    flexDirection:'row',
    alignContent:'center',
    flexWrap:'wrap',
    width:'100%',
    marginTop:-200,
    overflow:'hidden'
  },
  
  item: {
    padding: 20,
    width:'50%',
    flex:1,
    justifyContent:'center'
  },
  Image:{
      width:120,
      height:120
  },
  title: {
    fontSize: 18,
    textAlign:'center',
    fontWeight:'bold'
  },
  Text:{
   width:25,
   height:25,
   position:'absolute',
   left:'70%',
   top:'55%',
   borderRadius:25,
   borderStyle:'solid',
   borderWidth:2


  }
});

export default Table;