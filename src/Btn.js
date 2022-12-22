import {   Text , TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({bgColor, textColor, btnLabel, Press}) {
  return (
    <TouchableOpacity 
    onPress={Press}

    style={{
        backgroundColor:bgColor,
        borderRadius:10,
        alignItems:'center',
        width:320,
        height:50,
        marginVertical:5,
        
    }}>
        <Text
        style={{       
            color:textColor , 
            fontSize:20,
            fontWeight:'bold',
            marginTop:2,
            padding:8,
           
        }}>
            {btnLabel}
        </Text>
    </TouchableOpacity>
  )
}
