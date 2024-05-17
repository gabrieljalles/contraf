import React, {useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';


import InputComponent from './src/components/inputComponent';
import ButtonComponent from './src/components/buttonComponent';

const handlePress = () => {
  Linking.openURL('https://www.google.com');
}

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

            <ButtonComponent buttonName="Entrar" lightColor='#1A60E8' darkColor='#0F3682'/>

            <View style={styles.footer}>
              <Text style={{color:'#fff', fontWeight:600,}}>Não possui conta?</Text>
              <TouchableOpacity>
                <Text style={styles.register}>  Registre aqui!</Text>
              </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.poweredby} onPress={handlePress}>
              <Text style={{color:'#cdcdcd'}}>©Powered by Gabriel Jalles</Text>
            </TouchableOpacity>
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
    marginTop: 25,
    flexDirection: 'row',
    fontWeight:600,
    color: '#fff',
  },
  register:{
    color: '#24E3FD',
    justifyContent: 'space-around',
    fontWeight: 600,
  },
  poweredby:{
    color: '#cdcdcd',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom:-50,
  },
});
