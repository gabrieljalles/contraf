import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';


import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './style'


type LoginScreenProps = {
  navigation: StackNavigationProp<ParamListBase, "Register">;
};

const LoginScreen = ({navigation}:LoginScreenProps) => {

  const LinkedinHandlePress = () => {
    Linking.openURL('https://www.linkedin.com/in/gabriel-jalles-ferreira-mota-9b7bb7200/');
  }

  const handleRegisterPress = () => {
    navigation.navigate('Register')
  }

  return(
      <ImageBackground
        source={require('../../../assets/background-login-register.png')}
        style={styles.background}
      >
  
          <View style={styles.container}>
  
            <ImageBackground
            source={require('../../../assets/light-background.png')}
            style={styles.background}
            >
  
              <InputComponent placeholder="Digite sua usuario" iconImage='user'  color='white' size={24}/>
  
              <InputComponent placeholder="Digite sua senha" iconImage='lock'  color='white' size={24}/>
  
              <ButtonComponent buttonName="Entrar" lightColor='#1A60E8' darkColor='#0F3682'/>
  
              <View style={styles.footer}>
                <Text style={{color:'#fff'}}>Não possui conta?</Text>
                <TouchableOpacity onPress={handleRegisterPress}>
                  <Text style={styles.register}>  Registre aqui!</Text>
                </TouchableOpacity>
  
              </View>
              <TouchableOpacity style={styles.poweredby} onPress={LinkedinHandlePress}>
                <Text style={{color:'#cdcdcd'}}>©Powered by Gabriel Jalles</Text>
              </TouchableOpacity>
            </ImageBackground>
            
          </View>
  
      </ImageBackground>
      )
}


export default LoginScreen;