import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { API_URL } from '../config';

export default function ActualizarScreen() {
  const router = useRouter();
  const { id, nombre: nombreInicial, edad: edadInicial } = useLocalSearchParams();
  const [nombre, setNombre] = useState(nombreInicial);
  const [edad, setEdad] = useState(edadInicial);
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarCambios = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje("Vacios", "Completa edad y nombre en el formulario");
      return;
    }

    try {
      setCargando(true);
      const respuesta = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic YWRtaW46MTIzNA=="
        },
        body: JSON.stringify({ nombre: nombre, edad: Number(edad) })
      });
      const datos = await respuesta.json();
      console.log(datos);
      mostrarMensaje("Éxito", "Usuario actualizado correctamente");
      router.back();
    } catch (error) {
      mostrarMensaje("Error", "No fue posible guardar");
      console.log("Error API", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
          editable={!cargando}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
          editable={!cargando}
        />

        <Pressable 
          style={[styles.boton, cargando && { backgroundColor: '#9CA3AF' }]} 
          onPress={guardarCambios} 
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? "Guardando..." : "Guardar cambios"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#EAB308',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
