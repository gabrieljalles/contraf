import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        
    
        width:240,
        height:40,
    
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        borderRadius: 1,
        marginBottom: 25,
      },
      icon:{
        width:'10%',
      },
      inputTextContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'90%',
        
      },
      inputText:{
        fontSize:16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
      }
})

export default styles;