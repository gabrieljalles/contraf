import { Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';
interface props{
    buttonName: string
    lightColor: string
    darkColor: string
}


const ButtonComponent = ({buttonName, lightColor, darkColor}:props) =>{

    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient
              colors={[`${lightColor}`,`${darkColor}`]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>{buttonName}</Text>
            </LinearGradient>
          </TouchableOpacity>
    )
}

export default ButtonComponent;