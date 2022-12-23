import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';


const SSS = () => {
  return (
    <SafeAreaView style={styles.root}>

    </SafeAreaView>
  )
}

export default SSS
const styles=StyleSheet.create({
  root:{ 
    flex:1,
    backgroundColor:"#07032E",
    alignItems:'center'
},
})