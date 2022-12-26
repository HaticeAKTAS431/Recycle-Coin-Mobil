import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Custom_Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput

        style={styles.inputStyle}
        {...props}>
      </TextInput>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: '100%',
    borderColor: "#b2b2b2",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,//e posta yazısının iç uzaklığını ayarlar
    paddingVertical: 8,
    fontSize: 15,
    marginVertical: 5,
  },
  inputStyle: {
    width: 300,
    height: 30,
  }
})
export default Custom_Input