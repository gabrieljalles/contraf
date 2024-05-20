import React, {useEffect, useState} from 'react'
import {Text, View, ImageBackground, TextInput, TouchableOpacity, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import DropdownComponent from '../../components/DropdownComponent';
import styles from './style';


interface RegisterScreenProps{
    navigation: StackNavigationProp<ParamListBase, "Login">;
};

const RegisterScreen = ({navigation}:RegisterScreenProps) => {

  const [userValue,setUserValue] = useState('')
  const [selectedContract, setSelectedContract] = useState('Terceirizado');
  const [passwordValue,setPasswordValue] = useState('')
  const [rePasswordValue,setRePasswordValue] = useState('')
  const [cellphoneValue,setCellphoneValue] = useState('')
 
  
  const handleUserChange= (text: string) =>{
    setUserValue(text)
  }

  const handleContractChange= (text: string) =>{
    setSelectedContract(text)
  }

  const handlePasswordChange= (text: string) =>{
    setPasswordValue(text)
  }

  const handleRePasswordChange= (text: string) =>{
    setRePasswordValue(text)
  }

  const handleCellphoneChange= (text: string) =>{
    setCellphoneValue(text)
  }

  const LinkedinHandlePress = () => {
      Linking.openURL('https://www.linkedin.com/in/gabriel-jalles-ferreira-mota-9b7bb7200/');
  }

  const handleLoginPress = () => {
      navigation.navigate('Login')
  }

  return(
      <ImageBackground
      source={require('../../../assets/background-login-register.png')}
      style={styles.background}
    >

        <View style={styles.container}>

          <ImageBackground
          source={require('../../../assets/light-background-register.png')}
          style={styles.background}
          >

            <InputComponent value={userValue} onChangeText={handleUserChange} placeholder="Digite sua usuario" iconImage='user'  color='white' size={24}/>
            <InputComponent value={cellphoneValue} onChangeText={handleCellphoneChange} placeholder="34991234567" iconImage='mobile'  color='white' size={24}/>
            {/* <InputComponent id='{inputId}' onFocus={handleFocus} onBlur={handleBlur} value={passwordValue} onChangeText={handlePasswordChange} placeholder="Digite sua senha" iconImage='lock'  color='white' size={24} typePass={true}/>
            <InputComponent id='id' onFocus={handleFocus} onBlur={handleBlur} value={rePasswordValue} onChangeText={handleRePasswordChange} placeholder="senha novamente" iconImage='lock'  color='white' size={24} typePass={true}/>
          
            <DropdownComponent/>

            <ButtonComponent buttonName="Registrar" lightColor='#1A60E8' darkColor='#0F3682'/> */}

            <View style={styles.footer}>
              <Text style={{color:'#fff'}}>Já possui conta?</Text>
              <TouchableOpacity onPress={handleLoginPress}>
                <Text style={styles.login}>  Logue aqui!</Text>
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


export default RegisterScreen;