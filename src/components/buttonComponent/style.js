import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        width: 110,
        height: 40,
        marginTop: 5,
      },
      gradientButton:{
        borderRadius: 5,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        color: 'white',
        fontWeight: 800,
        fontSize: 24,
      }
});

export default styles;