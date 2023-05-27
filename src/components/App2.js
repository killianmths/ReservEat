import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity} from 'react-native';
import Validation from './Validation.js';
import SideBar from './SideBar.js';
import Scroll from './Scroll.js';
import Header from './Header.js';
import PopResto from './PopResto.js';
import SecondScroll from './SecondScroll.js';





export default function App2({navigation}) {
  
  
  return (

    <View style={styles.container}>
      <ScrollView>
      <Header/>
      <SideBar/>
      <Scroll/>
      <PopResto onPress={ () => navigation.navigate("SeeAll")}/>
      <SecondScroll/>
      <Validation onPress={ ()=>navigation.navigate("Reservation")}></Validation>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});