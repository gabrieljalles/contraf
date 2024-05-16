import React, {useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import InputComponent from './src/components/inputComponent';
import ButtonComponent from './src/components/buttonComponent';




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

          <InputComponent placeholder="Digite sua matrícula" iconImage='user'  color='white' size={24}/>

          <InputComponent placeholder="Digite sua senha" iconImage='lock'  color='white' size={24}/>

          <ButtonComponent buttonName="Entrar"/>

          <View style={styles.footer}>
            <Text>Não possui conta?</Text>
            <TouchableOpacity>
            
              <Text style={styles.register}>Registre aqui!</Text>
            
            </TouchableOpacity>
          </View>
          

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
    resizeMode: 'cover',
  },
  container: {
    position: 'absolute',
    top: '40.5%',
    bottom: '5.0%',

    width:370, // arrumar isso aqui
    height:350,
    borderRadius: 50,
  },
  footer:{
    flexDirection: 'row',
  },
  register:{
    color: '24E3FD'
  }
});
