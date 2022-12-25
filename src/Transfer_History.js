import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Transfer_History = () => {
  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <Text>asdfrgtyhu</Text>
        </View>
        <View style={styles.container}>
            <Text>asdfrgtyhu</Text>
        </View>
        <View style={styles.container}>
            <Text>asdfrgtyhu</Text>
        </View>
        <View style={styles.container}>
            <Text>asdfrgtyhu</Text>
        </View>
        <View style={styles.container}>
            <Text>asdfrgtyhu</Text>
        </View>
        <View style={styles.container}>
            <Text>asdfrgtyhu</Text>
        </View>
     </SafeAreaView>
  )
}

export default Transfer_History

const styles=StyleSheet.create({
  root:{ 
    backgroundColor:"#07032E",
   alignItems:'center'
  },
  container: {
    alignItems:'center',
    backgroundColor: "white",
    height:100,
    width: 350,
    marginTop: 17,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})