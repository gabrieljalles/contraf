import React, {useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default function App() {
  
  return(
    <ImageBackground
      source={require('./assets/background-login-register.png')}
      style={styles.background}
    >
      <StatusBar style="light" />

      <View style={styles.container}>

        <ImageBackground
        source={require('./assets/light-background.png')}
        style={styles.background}
        >

        </ImageBackground>


      
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    position: 'absolute',
    top: '40.5%',
    bottom: '5.0%',

    width:370,
    height:350,
    borderRadius: 15,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
