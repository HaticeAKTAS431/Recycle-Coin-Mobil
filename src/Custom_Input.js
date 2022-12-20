import { View, StyleSheet , TextInput } from 'react-native'
import React from 'react'

const Custom_Input = ({ placeholder , onType , value}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle}
       placeholder={placeholder}
       onChangeText={onType}
       value={alue}>
       </TextInput>
    </View>
  )
}

 const styles=StyleSheet.create({
  container:{
    backgroundColor:"grey",
    width:'100%',
    borderColor:"#b2b2b2",
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:10,//e posta yazısının iç uzaklığını ayarlar
    paddingVertical:8,
    fontSize:15,
    marginVertical:10,
    
  },
  inputStyle:{

  }
 })
export default Custom_Input