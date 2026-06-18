
/* Zona1: Importaciones, componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from '../components/Saludo';
import { Saludo2 } from '../components/Saludo2';
import { Perfil } from '../components/Perfil';

/* Zona2: Main - Componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

      <Perfil style={styles.tarjetaVerde}nombre="Diego" carrera="ISC" materia="Programación Web" cuatrimestre="9no"></Perfil>
      <Perfil style={styles.tarjetaRoja}nombre="Diego2" carrera="ISC" materia="Programación Web" cuatrimestre="9no"></Perfil>
      <Perfil style={styles.tarjetaVerde}nombre="Diego3" carrera="ISC" materia="Programación Web" cuatrimestre="9no"></Perfil>
      
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
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  tarjetaVerde:{
    backgroundColor:'green',
  },
  tarjetaRoja:{
    backgroundColor:'red',
  },
});