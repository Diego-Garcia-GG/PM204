/* Zona1: Importaciones, componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native'


import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

/* Zona2: Main - Componentes */
export default function SafeAreaScreen() {
  const [mostrarMensaje, setMostrarMensaje] = useState(true);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis tareas</Text>
      </View>

      {mostrarMensaje && (
        <View style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>Bienvenido de Nuevo!</Text>
          <TouchableOpacity onPress={() => setMostrarMensaje(false)}>
            <Text style={styles.mensajeCerrar}>X</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.listaContenido}
        showsVerticalScrollIndicator={false}
      >
        {[
          'Comprar Pan',
          'Estudiar React Native',
          'Aprender importaciones',
          'Llamar a alguien',
          'Revisar un correo',
          'Leer un libro',
          'Practicar guitarra',
          'Sacar a pasear al perro',
          'Hacer la tarea'
        ].map((tarea, i) => (
          <View key={i} style={styles.tarjeta}>
            <Text style={styles.tarjetaTexto}>{tarea}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  encabezado: {
    padding: 20,
    backgroundColor: 'black',
  },
  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  mensaje: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff3cd',
    padding: 14,
    margin: 16,
    borderRadius: 8,
  },
  mensajeTexto: {
    fontSize: 14,
    color: 'black',
  },
  mensajeCerrar: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 6,
  },
  scroll: {
    flex: 1,
  },
  listaContenido: {
    padding: 16,
    paddingBottom: 40,
  },
  tarjeta: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  tarjetaTexto: {
    fontSize: 15,
    color: 'black',
  },
});