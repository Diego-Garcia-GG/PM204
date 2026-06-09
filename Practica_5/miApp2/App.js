
/* Zona1: Importaciones, componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* Zona2: Main - Componentes */
export default function App() {
  return (
    <View style={styles.container}>


      <Image source={require('./assets/wave.png')}></Image> 
      <Text> -------------------------------------------- </Text>
      <Saludo></Saludo>
      <Text> -------------------------------------------- </Text>
      <Saludo2></Saludo2>
      <Text> -------------------------------------------- </Text>
      <Perfil></Perfil>
      
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
