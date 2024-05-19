import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        
    
        width:240,
        height:40,
    
        borderBottomWidth: 3,
        borderRadius: 1,
        marginBottom: 25,
        borderBottomColor:'#fff',
      },
      focused:{
        borderBottomColor:'#f5ce05', 
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
        color: '#fff',
        textAlign: 'center',
      }
})

export default styles;