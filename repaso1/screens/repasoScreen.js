import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Switch, 
  TouchableOpacity, 
  Alert, 
  ScrollView 
} from 'react-native';

export default function RepasoScreen() {
  // Estados para capturar el texto de los inputs
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  // Estados para las preguntas de Sí/No (Switches)
  const [asisteTaller, setAsisteTaller] = useState(false);
  const [requiereConstancia, setRequiereConstancia] = useState(false);
  const [participaDeportes, setParticipaDeportes] = useState(false);

  // Función de validación y envío de alertas
  const handleEnviarRegistro = () => {
    // 1. Validar que no existan TextInputs vacíos (Imagen_552ab2.png)
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      Alert.alert(
        'Campos incompletos', 
        'Debes llenar todos los campos.'
      );
      return;
    }

    // 2. Validar que el semestre sea estrictamente numérico (Imagen_552ab2.png)
    const numSemestre = Number(semestre);
    if (isNaN(numSemestre) || semestre.trim() === '') {
      Alert.alert(
        'Error', 
        'El semestre debe ser un número.'
      );
      return;
    }

    // 3. Formatear booleanos de los Switches a "Sí" o "No" para el Alert
    const tallerTexto = asisteTaller ? 'Sí' : 'No';
    const constanciaTexto = requiereConstancia ? 'Sí' : 'No';
    const deportesTexto = participaDeportes ? 'Sí' : 'No';

    // 4. Mostrar el Alert final con el formato exacto solicitado (Imagen_552d60.png)
    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${tallerTexto}\nConstancia: ${constanciaTexto}\nDeportes: ${deportesTexto}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Título Principal de la Imagen_552a78.png */}
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>
      
      {/* Inputs de Captura */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput 
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput 
          style={styles.input}
          placeholder="Semestre"
          value={semestre}
          onChangeText={setSemestre}
          keyboardType="numeric"
        />
      </View>

      {/* Sección Opciones de la Imagen_552d60.png */}
      <Text style={styles.seccionTitulo}>Opciones</Text>
      
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
        <Switch 
          value={asisteTaller}
          onValueChange={setAsisteTaller}
          trackColor={{ false: '#767577', true: '#0084ff' }}
          thumbColor={asisteTaller ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
        <Switch 
          value={requiereConstancia}
          onValueChange={setRequiereConstancia}
          trackColor={{ false: '#767577', true: '#0084ff' }}
          thumbColor={requiereConstancia ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
        <Switch 
          value={participaDeportes}
          onValueChange={setParticipaDeportes}
          trackColor={{ false: '#767577', true: '#0084ff' }}
          thumbColor={participaDeportes ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      {/* Botón de Registro */}
      <TouchableOpacity style={styles.boton} onPress={handleEnviarRegistro}>
        <Text style={styles.botonTexto}>Enviar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  seccionTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
    marginTop: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333333',
  },
  boton: {
    backgroundColor: '#007bff', 
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});