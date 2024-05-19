import {useState} from 'react';
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { FontAwesome} from '@expo/vector-icons';
import styles from './style'


interface DropdownComponentProps {
    selectedValue: string;
    onValueChange: string;
}

const DropdownComponent = () => {
    const [valueContract, setvalueContract]= useState()

    return (
        <View style={styles.dropdownContainer}>
            <FontAwesome 
                size={20}
                name='drivers-license-o'
                style={styles.icon} 
                color='white' 
            />
            <View style={styles.dropdown}>
                <Picker
                        placeholder='Selecione seu contrato'
                        selectedValue={valueContract}
                        style={styles.dropdown}
                        onValueChange={(itemValue, itemIndex) => setvalueContract(itemValue)}
                        dropdownIconColor='white'
                        
                    >
                        <Picker.Item label="Terceirizado" value="Terceirizado" />
                        <Picker.Item label="Dmae" value="Dmae" />
                </Picker>
            </View>
        </View>       
    )
}

export default DropdownComponent;