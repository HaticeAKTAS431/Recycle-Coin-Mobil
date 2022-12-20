import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp_Screen = (props) => {
    return (
     
      <View style={styles.root} >
       <View style={styles.container}>
        <Text>Welcome</Text>


       </View>
      </View>
      
    )
  }
  


export default SignUp_Screen

const styles=StyleSheet.create({
  root:{
    backgroundColor:"#07032E",
    alignItems:'center'
  },
  container: {
    backgroundColor: "white",
    height: '70%',
    width: '95%',
    marginTop: '63%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center'

  },
})