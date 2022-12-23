import {   Text , TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({bgColor, textColor, btnLabel, Press}) {
  return (
    <TouchableOpacity 
    onPress={Press}
    style={{
        backgroundColor:bgColor,
        borderRadius:100,
        alignItems:'center',
        width:'70%',
        height:'6%',
        width:320,
        height:60,
        marginTop:20,
    }}>
        <Text
        style={{       
            color:textColor , 
            fontSize:20,
            fontWeight:'bold',
            marginTop:'3%',
            padding:6
        }}>
            {btnLabel}
        </Text>
    </TouchableOpacity>
  )
}