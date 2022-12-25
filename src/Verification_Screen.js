
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React , { useRef}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Verification_Screen = () => {
  return (
    <SafeAreaView >
        <View style={styles.root}>
            <Image  style={styles.logo} source={require("./assets/logo.png")}></Image>
            <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:30, color:'green' ,marginTop:30}}>OTP Verification</Text>
            <Text style={{fontSize:20 , color:'green', paddingHorizontal:10, marginTop:25}}>Enter the OTP send to your E-mail.</Text>
           
            <View style={styles.otpContainer}>
              <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View  style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput  style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              </View>
              <View style={styles.otpContainer}>
              <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput  style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput  style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput  style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
              <View style={styles.otpBox}>
                <TextInput  style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
              </View>
            </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Verification_Screen

const styles =StyleSheet.create({
    root:{ 
         
        backgroundColor:"#07032E",
        alignItems:'center'
    },
    logo:{
        marginTop:30,
        marginRight:30,
      },
    container: {
        alignItems:'center',
        backgroundColor: "white",
        height: '80%',
        width: '100%',
        marginTop: '10%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
      otpContainer:{
        marginHorizontal:20,
        marginBottom:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
      },
      otpBox:{
        borderRadius:5,
        borderBottomColor:'grey',
        borderWidth:4,
        marginTop:40,
        marginHorizontal:20
      },
      otpText:{
        fontSize:25,
        color:'black',
        textAlign:'center',
        paddingHorizontal:8,
        paddingVertical:5,
        
      }
})