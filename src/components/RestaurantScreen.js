import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';





export default function Restaurant() {
  
  
  return (
    <View>
        <View style={{backgroundColor:'#FEA93C', width:'100%', height:'100%'}}>
            <View style={{width:'100%', height:'85%', backgroundColor:'white', marginTop:180, borderTopLeftRadius:40,borderTopRightRadius:40,alignItems:'center'}}>
                <View style={styles.container2}>
                <Image source={Bils} style={{ width: 270, height: 240,alignItems:'center', marginBottom:10 }} />
                <Text style={{fontSize:30, fontWeight:'bold', marginBottom:60}}>Bil's Diner</Text>
                <Image source={BilsInt} style={{ width: 270, height: 200,alignItems:'center', marginBottom:20 }} />
                <Text style={{color:'gray', marginBottom:3}}>Welcome to Bil's Diner!</Text>
                <Text style={{color:'gray', marginBottom:3}}>The First American Diner Of Macon</Text>
                <Text style={{color:'gray', marginBottom:25}}>31 rue Dufour 71000 Macon</Text>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.text}>Next</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
    </View> 
    

  );
}


const styles = StyleSheet.create({
    container2:{
        position: 'absolute',
        top:-100,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
    },
    container: {
      width: '92%',
      justifyContent:'center',

      height: 80,
      padding: 10,
      borderRadius:20,
      
    },
    touchable:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FEA93C',
        borderRadius:20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',

    },
    text:{
        color:'white',
        fontWeight:600,
        fontSize:22,
    }

});