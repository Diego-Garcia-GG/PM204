
/* Zona1: Importaciones, componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/* Zona2: Main - Componentes */
export default function TextInputScreen() {
  return (
    <View style={styles.container}>
        <Text>Aquí va la práctica de Modal y Bottom Sheet</Text>
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
  }
});