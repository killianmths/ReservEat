import React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet,TouchableOpacity,Image } from "react-native"; 

class ProfilScreen extends React.Component {
  handlePress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.handlePress}>
            <Image source={require('../../assets/arrow.png')} style={{width:50, height:50}}/>
          </TouchableOpacity>
        <View style={{marginBottom:50}}>
          <View style={{alignItems:'center'}}>
            <View style={styles.profilimage}/>
            <Text style={{fontWeight:'bold', fontSize:20}}>Username</Text>
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity style={styles.elmtProfil}><Text style={styles.categories}>Account</Text></TouchableOpacity>
          <TouchableOpacity style={styles.elmtProfil}><Text style={styles.categories}>Reservations</Text></TouchableOpacity>
          <TouchableOpacity style={styles.elmtProfil}><Text style={styles.categories}>History</Text></TouchableOpacity>
          <TouchableOpacity style={styles.elmtProfil}><Text style={styles.categories}>Favorites</Text></TouchableOpacity>
          <TouchableOpacity style={styles.elmtProfil}><Text style={styles.categories}>About Us</Text></TouchableOpacity>
        </View>
        <Text style={{justifyContent:'center', alignContent:'center'}}>@All right reserved</Text>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    paddingLeft:8,
    paddingRight:8
  },
  elmtProfil:{
    fontSize:50,
    padding:15,
    borderWidth:1,
    borderRadius:80,
    marginBottom:20


  },
  categories:{
    fontSize:34
  },
  profilimage:{
    width:100,
    height:100,
    backgroundColor:'#FEA93C',
    borderRadius:'100%',
  }
});

export default ProfilScreen;

