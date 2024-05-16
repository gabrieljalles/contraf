import { View, TextInput } from 'react-native';
import styles from './style';
import { FontAwesome} from '@expo/vector-icons';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

interface Props{
    placeholder: string
    color: string
    iconImage?: 'user' | 'lock'
    size: 20|24|32
}

const InputComponent = ({placeholder, color, iconImage, size}: Props) =>{
    
    return(
        <View style={styles.inputContainer}>
            <FontAwesome 
            size={size} 
            name={iconImage} 
            style={styles.icon} 
            color={color} 
            />
            <View style={styles.inputTextContainer}>
              <TextInput style={styles.inputText} placeholder={placeholder} placeholderTextColor="#ccc" underlineColorAndroid="transparent"/>
            </View>
          </View>
    )
}

export default InputComponent;



