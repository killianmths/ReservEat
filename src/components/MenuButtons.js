import { ScrollView, Button, StyleSheet} from "react-native"
import FlatButton from "./Button"

const MenuButton =(props)=> {
   return(
     <Button title={props.name}
     buttonStyle={{
       backgroundColor:'blue',
     }}
     containerStyle={{
       width:50,
       height:50
     }}
         onPress={()=>Alert.alert('Button')}
 />
   )
 }

function MenuButtons(){
   return(
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}  style={styles.scroll}>
         <FlatButton emoji="🍖" text="Meat"/>
         <FlatButton emoji="🍣" text="Sushi"/>
         <FlatButton emoji="🍔" text="Fast Food"/>
         <FlatButton emoji="🌮" text="Mexicain"/>
         <FlatButton emoji="🫓" text="Tacos"/>
      </ScrollView>
   )
}


styles =StyleSheet.create({
   scroll:{
      marginLeft:20,
      marginTop:10
   }
})
export default MenuButtons