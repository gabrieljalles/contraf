import { View, TextInput, TextInputProps, Text } from 'react-native';
import styles from './style';
import { FontAwesome} from '@expo/vector-icons';
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

interface GenericInputProps extends TextInputProps{
    placeholder: string
    color: string
    iconImage?: 'user' | 'lock' | 'drivers-license-o' | 'mobile'
    size: 20|24|32
    value: string
    typePass?: boolean
}


const InputComponent = ({value, onChangeText, onFocus, onBlur, placeholder, color, iconImage, size, typePass=false}: GenericInputProps) => {


    return(
        <View style={[styles.inputContainer]}>
            <FontAwesome 
            size={size} 
            name={iconImage} 
            style={styles.icon} 
            color={color} 
            />
            <View style={styles.inputTextContainer}>
              <TextInput
              value={value} 
              onChangeText={onChangeText}
              style={styles.inputText} 
              placeholder={placeholder} 
              placeholderTextColor="#ccc" 
              underlineColorAndroid="transparent"
              secureTextEntry = {typePass}
              onFocus={onFocus}
              onBlur={onBlur}
              />
            </View>
          </View>
    )
}

export default InputComponent;



