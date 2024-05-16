import { Text, TouchableOpacity } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

interface props{
    buttonName: string
}


const ButtonComponent = ({buttonName}:props) =>{
    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient
              colors={['#1A60E8', '#0F3682']}
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