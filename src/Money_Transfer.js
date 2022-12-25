import { View,StyleSheet, Text ,  TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import Btn from './Btn';
import Input from './Custom_Input';


import { buttonColor2, buttonColor3 } from './constants';

const Money_Transfer = () => {
  return (
    <SafeAreaView  style={styles.root}>
      <View style={styles.Card}>
        <Text style={{fontSize:50, marginTop:40, fontWeight:'bold'}}>06,12 C</Text>
        <Text style={{textAlign:'center' , fontSize:20}}> Ad- Soyad</Text>
        <Text style={{textAlign:'center' , fontSize:10}}>SHA-256 Adresi</Text>
      </View>
      <View style={styles.container}>
        <Text  style={{fontWeight:'bold', fontSize:30, color:'black' , marginTop:20}}>Transfer</Text>
        <Formik initialValues={{ address: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values }) => <SafeAreaView>
                <Text>Amount </Text>
                <Input style={styles.input}
                placeholder=' '
                value={values.address}
                onChangeText={handleChange('adrress')}
                keyboardType='creditCardNumber'
              />
              <Text>SHA-256 Address</Text>
              <Input style={styles.input}
                placeholder=' '
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
              <Btn style={{marginTop:20}} bgColor={buttonColor2} onPress={handleSubmit} textColor={buttonColor3} btnLabel="Send Coin"  />
              </SafeAreaView>}
              </Formik>
      </View>

    </SafeAreaView>
  )
}

export default Money_Transfer
const styles=StyleSheet.create({
  root:{ 
    flex:1,
    backgroundColor:"#07032E",
    alignItems:'center',
    
  },
  Card: {
    alignItems:'center',
    backgroundColor: "white",
    height: '30%',
    width: '95%',
    marginTop: '2%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
  },
  container: {
    alignItems:'center',
    backgroundColor: "white",
    height: '62%',
    width: '95%',
    marginTop: '5%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  
})