
import { View, Text, StyleSheet, Image ,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Btn from './Btn';
import { buttonColor2, buttonColor3 } from './constants';
import {Formik} from 'formik';
import Input from './Custom_Input';

const SignUp_Screen = (props) => {
    return (
     <SafeAreaView>
      <View style={styles.root} >
       <Image  style={styles.logo} source={require("./assets/logo.png")}></Image>
       <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:30, color:'green' ,marginTop:20}}>WELCOME </Text>
        <Formik initialValues={{ name:'', surname:'', email:'', phonenumber:'', password:''}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values }) =>
             <SafeAreaView>
              <Input style={styles.input}
                placeholder='Name...'
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <Input style={styles.input}
                placeholder='Surname...'
                value={values.surname}
                onChangeText={handleChange('surname')}
              />
              <Input style={styles.input}
                placeholder='E-mail...'
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType='email-address'
              />
              <Input style={styles.input}
                placeholder='Phonenumber...'
                value={values.phonenumber}
                onChangeText={handleChange('phonenumber')}
                keyboardType='phone-pad'
              />
                 <Input style={styles.input}
                placeholder='Password...'
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
              <Btn bgColor={buttonColor2} onPress={handleSubmit} textColor={buttonColor3} btnLabel="Sign Up" />
              <View style={{display:'flex' , flexDirection:'row' , justifyContent:'center'}}>
                <Text style={{fontSize:15}}>Already have an account ?</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Login")}>
                  <Text style={{color:'yellow ' , fontWeight:'bold' , fontSize:15}}>Login</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>}
          </Formik>
       </View>
      </View>
    </SafeAreaView>  
    )}
export default SignUp_Screen
const styles=StyleSheet.create({
  root:{
    backgroundColor:"#07032E",
    alignItems:'center'
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
    alignItems: 'center'
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
    borderColor: 'grey',
  },
})
