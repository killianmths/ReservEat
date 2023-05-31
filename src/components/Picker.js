import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import { View, StyleSheet,Text } from 'react-native';


const Items = require('../data/WheelData.json');

const rednerItem = (item, index) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>
      { item.label }
    </Text>
  </View>
);

export default function MyPicker() {
  return (
    <HorizontalPicker
      data={Items}
      renderItem={rednerItem}
      itemWidth={80}
    />
  );
}

const styles = StyleSheet.create({
  item:{
    height:100,
  },
  itemText:{
    paddingRight:20,
    paddingLeft:20,
    fontSize:16,
    fontWeight:600
  }
})
