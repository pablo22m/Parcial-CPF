import { TextInput, SafeAreaView, StyleSheet, Image, Pressable, Text} from 'react-native';
import { useState } from 'react'

export default function App() {
  const [nameField, setnameField] = useState('')

  const [nome, setnome] = useState('')

  const handleSendname = () => {
    setnome(nameField)
  }

  const handleClear = () => {
    setnome('')
    setnameField('')
  }
  
  return (
    <SafeAreaView style={styles.containe}>
      {nome == '' &&
      <>
        <Image source={require('./assets/boneco.png')} style={styles.image}/>
        <TextInput 
              style={styles.text}
              placeholder='CPF'
              placeholderTextColor='#999'
              value={nameField}
              onChangeText={text => setnameField(text)}
            />
        <Pressable style={styles.entrar}>
          <Text style={styles.textoentrar} onPress={handleSendname}>LOGAR</Text>
        </Pressable>
      </>
      }
      {nome == '000.000.000-00'  &&
        <>
          <Image source={require('./assets/homem.png')} style={styles.pessoa}/>
          <Text style={styles.logado}>Você está logado com CPF: {nome}</Text>     
        {nome != '' &&
          <>
            <Pressable style={styles.limpar} onPress={handleClear}>
              <Text style={styles.limpartexto}>CPF NÃO É {nome}</Text>
            </Pressable>
          </>
        }
        </>
      }
      {nome != '000.000.000-00' &&
      <>
      </>}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containe: {
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 100,
    height: 100,
    marginTop: 250
  },
   text: {
    backgroundColor: '#eeeeee',
    padding: 5,
    margin: 20,
    border: 'solid',
    borderWidth: 8,
    width: 300
  },
  entrar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 25,
    backgroundColor: '#000000',
  },
  textoentrar:{
    color: '#ffffff',
    textAlign: 'center',
  },

  pessoa:{
    width: 100,
    height: 100,
    marginTop: 250
  },
  limpar:{
    backgroundColor: '#000000',
    textAlign: 'center',
    marginTop: 20,
    height: 30,
    width: 180,
  },
  limpartexto:{
    color: '#ffffff',
    paddingTop: 5,
    paddingLeft: 7
  },
  logado:{
    marginTop: 10,
  }
});