import * as React from 'react';
import { View , Text  , StyleSheet , Image } from 'react-native';
import Btn from './Btn';
import {  buttonColor2 } from './constants';

const WelcomeScreen=(props) => {
    return(
       <View style={styles.root}>
        <Image  style={styles.logo} source={require("./assets/logo.png")}></Image>
        <Text style={styles.text_Title}>Welcome.</Text>
        <Text style={styles.text_Body}>Get started logging into your account.</Text>
        <Btn bgColor={buttonColor2} textColor="white" btnLabel="Giriş Yap" Press={() => props.navigation.navigate("Login")}/>
        <Btn bgColor="white" textColor={buttonColor2} btnLabel="Kayıt Ol" Press={() =>props.navigation.navigate("SignUp")}/>
       </View>
    );
}


const styles = StyleSheet.create({
    root:{ 
        flex:1,
        backgroundColor:"#07032E",
        alignItems:'center'
    },
    logo:{
        marginTop:'30%',

    },
    text_Title:{
        fontSize:40,
        color:"#c6e2ff",
        fontWeight:'bold',
        marginTop:'5%',
    },
    text_Body:{
        fontSize:20,
        color:"#c6e2ff",
        fontWeight:'bold',
        marginTop:'3%',
        marginBottom:'40%'
        
    },
   
    
})


export default WelcomeScreen;