import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text, Pressable, StyleSheet, ActivityIndicator, Modal, Platform, Alert } from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { API_URL } from '../config';

export default function DetalleScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [eliminando, setEliminando] = useState(false);

  const obtenerUsuario = async () => {
    try {
      const respuesta = await fetch(`${API_URL}${id}`);
      const datos = await respuesta.json();
      setUsuario(datos);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      obtenerUsuario();
    }, [id])
  );

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const eliminarUsuario = async () => {
    setModalVisible(false);
    setEliminando(true);
    try {
      const respuesta = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Basic YWRtaW46MTIzNA=='
        }
      });
      if (respuesta.status === 200) {
        mostrarMensaje("Éxito", "Usuario eliminado correctamente");
        router.back();
      } else {
        mostrarMensaje("Error", "No fue posible eliminar al usuario");
      }
    } catch (error) {
      mostrarMensaje("Error", "No fue posible conectar con el servidor");
    } finally {
      setEliminando(false);
    }
  };

  if (cargando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  if (!usuario) {
    return (
      <View style={styles.centro}>
        <Text>Usuario no encontrado</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.tituloSecundario}>Detalles del Usuario</Text>

        <View style={styles.detalleGrupo}>
          <Text style={styles.etiqueta}>Nombre</Text>
          <Text style={styles.valor}>{usuario.nombre}</Text>
        </View>

        <View style={styles.detalleGrupo}>
          <Text style={styles.etiqueta}>Edad</Text>
          <Text style={styles.valor}>{usuario.edad} años</Text>
        </View>

        <Pressable 
          style={styles.botonActualizar} 
          onPress={() => router.push({ pathname: '/actualizar', params: { id: usuario.id, nombre: usuario.nombre, edad: usuario.edad.toString() } })}
        >
          <Text style={styles.textoBoton}>Actualizar</Text>
        </Pressable>

        <Pressable 
          style={styles.botonEliminar} 
          onPress={() => setModalVisible(true)}
          disabled={eliminando}
        >
          {eliminando ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.textoBoton}>Eliminar</Text>
          )}
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalContenedor}>
            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>
            <Text style={styles.modalTexto}>¿Estás seguro de que deseas eliminar al usuario {usuario.nombre}?</Text>
            <View style={styles.modalBotones}>
              <Pressable style={styles.modalBotonCancelar} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalTextoBotonCancelar}>Cancelar</Text>
              </Pressable>
              <Pressable style={styles.modalBotonConfirmar} onPress={eliminarUsuario}>
                <Text style={styles.modalTextoBotonConfirmar}>Si, eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  tituloSecundario: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },
  detalleGrupo: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 10,
  },
  etiqueta: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 5,
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  botonActualizar: {
    backgroundColor: '#EAB308',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  botonEliminar: {
    backgroundColor: '#DC2626',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContenedor: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 15,
  },
  modalTexto: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  modalBotones: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalBotonCancelar: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  modalBotonConfirmar: {
    flex: 1,
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
  modalTextoBotonCancelar: {
    color: '#4B5563',
    fontWeight: 'bold',
    fontSize: 15,
  },
  modalTextoBotonConfirmar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
