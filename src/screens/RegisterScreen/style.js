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
        top: '10%',
        bottom: '5.0%',
    
        width:370, // arrumar isso aqui
        height:600,
        borderRadius: 50,
      },
      footer:{
        marginTop: 25,
        flexDirection: 'row',
        color: '#fff',
      },
      login:{
        color: '#f5ce05',
        fontWeight: 'bold',
      },
      poweredby:{
        color: '#cdcdcd',
        alignSelf: 'center',
        position: 'absolute',
        bottom:-50,
      },
})

export default styles;