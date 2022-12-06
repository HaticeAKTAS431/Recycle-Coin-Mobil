import { View, Text ,StyleSheet , Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from './Custom_Input'; 


const Login_Screen = () => {
  return (
    <SafeAreaView>
        <View style={styles.root}>
          <Text style={styles.text_Title}>Hoşgeldin.</Text>
          <View style={styles.container}>
              <Text style={styles.text}>Hesabınıza giriş yapın  </Text>
              <CustomInput placeholder="E-posta" keyboardType={"email-address"}/>
              <CustomInput placeholder="Şifre"/>
          </View>
          
        </View>
    </SafeAreaView>
  )
}

export default Login_Screen

const styles=StyleSheet.create({
    root:{
        backgroundColor:"#07032E",
        alignItems:'center',
        width:'100%'
        
    },
    text_Title:{
        color:"white",
        fontSize:30,
        fontWeight:'bold',
        marginVertical:10
    },
    container:{
        backgroundColor:"white",
        height:'72%',
        width:'95%',
        marginTop:'39%',
       borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       borderTopLeftRadius:30,
       borderTopRightRadius:30,  
       padding:20
      
    },
    
    text:{
        color:"black",
        fontSize:20, 
        marginLeft:70,
    },  
    

})