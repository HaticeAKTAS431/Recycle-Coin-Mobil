import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import Btn from './Btn';
import { buttonColor2, buttonColor3 } from './constants';


const Login_Screen = (props) => {
  return (
    <SafeAreaView>
       
      <View style={styles.root}>
        <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:30, color:'green'}}>WELCOME BACK  </Text>
        <Text style={{fontSize:20 , color:'green'}}>Login to your account  </Text>
          <Formik initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values }) => <SafeAreaView>
              <TextInput style={styles.Email}
                placeholder='E-mail...'
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType='email-address'
              />
              <TextInput style={styles.password}
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
              <Btn style={styles.btn} bgColor={buttonColor2} onPress={handleSubmit} textColor={buttonColor3} btnLabel="Login" />
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
  container: {
    backgroundColor: "white",
    height: '70%',
    width: '95%',
    marginTop: '61%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40,
    alignItems: 'center'

  },

  
  Email: {
    fontSize: 15,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    borderColor: 'grey'
  },
  password: {
    fontSize: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    borderColor: 'grey',
   marginBottom:15
  },
 

})
