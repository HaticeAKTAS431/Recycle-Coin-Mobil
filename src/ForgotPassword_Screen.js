import { View, StyleSheet,Image,Text,TextInput} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import Btn from './Btn';
import { buttonColor2, buttonColor3 } from './constants';
import {Formik} from 'formik';
import Input from './Custom_Input';


const ForgotPassword_Screen = (props) => {
  return (
   <SafeAreaView>
    <View style={styles.root}>
      <Image  style={styles.logo} source={require("./assets/logo.png")}></Image>
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:30, color:'green' ,marginTop:30}}>Forgot Password?</Text>
        <Text style={{fontSize:20 , color:'green', paddingHorizontal:10, marginTop:25}}>Enter your e-mail address and we'll send you link to reset your password.</Text>
        <Formik initialValues={{  email:''}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values }) => <SafeAreaView>
              <Input style={styles.input}
                placeholder='E-mail...'
                value={values.email}
                onChangeText={handleChange('email')}/>
              <Btn bgColor={buttonColor2} onPress={handleSubmit} textColor={buttonColor3} btnLabel="Send Mail"
               Press={() => props.navigation.navigate("Verification")} />
              <Btn bgColor={buttonColor2} onPress={handleSubmit} textColor={buttonColor3} btnLabel="Back"
               Press={() => props.navigation.navigate("Login")} />
              </SafeAreaView>}
              </Formik>
      </View>
    </View>
   </SafeAreaView>
  )
}
export default ForgotPassword_Screen
const styles=StyleSheet.create({
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
})