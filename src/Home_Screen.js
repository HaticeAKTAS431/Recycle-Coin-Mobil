import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
 
//db den gelen rcycle değerleri yazılacak
const Home_Screen = () => {
  return (
    <SafeAreaView style={styles.root}>
     <View style={styles.container}>
      <Text>You Have ..... Carbon Coin </Text>
     </View>
     <View style={styles.container}>
      <Text>You Have ..... Recycle Coin </Text>
     </View>
  </SafeAreaView>
  )
}
export default Home_Screen

const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: "#07032E",
    alignItems: 'center',
    width: '100%'
  },
  container:{
    backgroundColor: "white",
    height: '20%',
    width: '90%',
    marginTop: '1%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 40,
    alignItems: 'center'
  }
})