import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';

const width = Dimensions.get('window').width

export default function App() {//Es como el constructor de la vista 
  const [text, setText] = useState('Formulario')
  const [submit, setSubmit] = useState('')
  const titulo= 'Formulario'

  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <TextInput 
        style = {styles.input} 
        placeholder = 'Escribe aqui'
        onChangeText = {t => setText(t)}
        defaultValue = {''}
      /> 
      <Button onPress={() => {
        setSubmit(text)
        alert('Se guardo lo siguiente: '+ text)
      }} title="Aceptar"/>
      <Text>{submit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    borderBottomColor:'#ccc',
    borderBottomWidth: 1,
    width: '100%',//width: width
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


