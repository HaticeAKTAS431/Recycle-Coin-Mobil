import { View, Text, StyleSheet , Button, Linking } from 'react-native'
import React , {useState,useEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function Qr() {
    const [hasPermission , setHasPermission]=useState(null);//izin
    const [scanned , setScanned]=useState(false);//tarama
   
    useEffect(() => {
      (async () => {
        const {status} =await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status=='granted');
      })();
    }, []);

    const handleBarCodeScanner=({type , data}) => {
      setScanned(true);
      alert('Bar Code With Type ' + type +' and data ' + Linking.openURL(data)  + 'has been scanned')
    };
    
    if(hasPermission=== null){
      return <Text> Requesting for Camera Permission</Text>
    }
    if(hasPermission===false){
      return <Text>No Access to Camera</Text>
    }

    
    return (
    <SafeAreaView style={styles.root}>
     <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
        style={StyleSheet.absoluteFillObject}
     />
     {scanned && <Button title='Tap to Scan Again' onPress={() => setScanned(false)}/>}
  </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  root:{ 
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  
})