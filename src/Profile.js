
import { View, Image, StyleSheet , Button } from 'react-native'
import React  from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Profile() {
    return (
    <SafeAreaView style={styles.root}>
    <Image  style={styles.photo} source={require("./assets/photo.png")}></Image>
  </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  root:{ 
    flex:1,
    backgroundColor:"#07032E",
    alignItems:'center'
  },
  photo:{
  }
})