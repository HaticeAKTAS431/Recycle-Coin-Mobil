
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Btn from './Btn';
import { buttonColor2, buttonColor3 } from './constants';
import {Formik} from 'formik';
import Input from './Custom_Input';

const Login_Screen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
      <Image  style={styles.logo} source={require("./assets/logo.png")}></Image>
        <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:30, color:'black'}}>WELCOME BACK  </Text>
        <Text style={{fontSize:20 , color:'green'}}>Login to your account  </Text>
          <Formik initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values }) => <SafeAreaView>
                <Input style={styles.input}
                placeholder='E-mail...'
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType='email-address'
              />
              <Input style={styles.input}
                placeholder='Password...'
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("ForgotPassword")}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'blue', marginBottom:50 }}>Forgot Password? </Text>
                </TouchableOpacity>
              </View>
              <Btn style={styles.btn} bgColor={buttonColor2} onPress={handleSubmit} textColor={buttonColor3} btnLabel="Login" Press={() => props.navigation.navigate("DrawerMenu")} />
              <View style={{display:'flex' , flexDirection:'row' , justifyContent:'center'}}>
                <Text style={{fontSize:15}}>Don't have an account ?</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("SignUp")}>
                  <Text style={{color:'yellow ' , fontWeight:'bold' , fontSize:15}}>Signup</Text>
                </TouchableOpacity>
              </View>
              </SafeAreaView>}
              </Formik>
     </View>
     </View>
     </SafeAreaView>
  )
}

export default Login_Screen
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#07032E",
    alignItems: 'center',
    width: '100%'
  },
  logo:{
    marginTop:50,
    marginRight:30,
  },
  container: {
    backgroundColor: "white",
    height: '70%',
    width: '100%',
    marginTop: '15%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40,
    alignItems: 'center'
  },
})

