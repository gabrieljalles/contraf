import { StyleSheet } from "react-native";

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
      color: '#fff',
    },
    register:{
      color: '#24E3FD',
      fontWeight: 'bold',
    },
    poweredby:{
      color: '#cdcdcd',
      alignSelf: 'center',
      position: 'absolute',
      bottom:-75,
    },
});

export default styles;