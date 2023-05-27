import React from "react";
import {View, Pressable, Text} from "react-native"

function ProfilePicture(){
   return (
      <View>
         <Pressable
        onPressOut={() => {

        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      </View>
   )
}

export default ProfilePicture