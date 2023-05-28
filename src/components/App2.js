import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView ,Text, View, ScrollView,TouchableOpacity} from 'react-native';
import Validation from './Validation.js';
import SideBar from './SideBar.js';
import Scroll from './Scroll.js';
import Header from './Header.js';
import PopResto from './PopResto.js';
import SecondScroll from './SecondScroll.js';
import BookingPage from './BookingPage.js';





export default function App2({navigation}) {
  
  
  return (

    <View style={styles.container}>
      <ScrollView>
        <Header/>
        <SideBar/>
        <Scroll/>
        <PopResto onPress={ () => navigation.navigate("SeeAll")}/>
        <SecondScroll/>
        <Validation onPress={ ()=>navigation.navigate("Retour")}></Validation>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    width:"100%",
    height:"100%"
  }
});