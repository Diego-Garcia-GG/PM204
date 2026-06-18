
/* Zona1: Importaciones, componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackground from './ImageBackground';
import ActivityIndicator from './ActivityIndicator';
import Modal from './Modal';

/* Zona2: Main - Componentes */
export default function MenuScreen() {
    const [screen, setScreen] = useState('Menu');

    switch(screen){
        case 'Tarjetas':
            return <TarjetasScreen></TarjetasScreen>
        case 'SafeArea':
            return <SafeAreaScreen></SafeAreaScreen>
        case 'Pressable':
            return <PressableScreen></PressableScreen>
        case 'TextInput':
            return <TextInputScreen></TextInputScreen>
        case 'FlatList':
            return <FlatListScreen></FlatListScreen>
        case 'ImageBackground':
            return <ImageBackground></ImageBackground>
        case 'ActivityIndictaor':
            return <ActivityIndicator></ActivityIndicator>
        case 'Modal':
            return <Modal></Modal>
        
        
        
        case 'Menu':
            default:
                return (
                    <View style={styles.container}>
                        <View>
                            <Button title='Práctica: Tarjetas' color='red' onPress={() => setScreen('Tarjetas')}></Button>
                        </View>

                        <View>
                            <Button title='Práctica: SafeAreaView y ScrollView' color='blue' onPress={() => setScreen('SafeArea')}></Button>
                        </View>

                        <View>
                            <Button title='Práctica: Pressable y Switch' color='orange' onPress={() => setScreen('Pressable')}></Button>
                        </View>

                        <View>
                            <Button title='Práctica: TextInput y Alert' color='black' onPress={() => setScreen('TextInput')}></Button>
                        </View>

                        <View>
                            <Button title='Práctica: FlatList y Section List' color='brown' onPress={() => setScreen('FlatList')}></Button>
                        </View>
                        
                        <View>
                            <Button title='Práctica: ImageBackground y SlapshScreen' color='gray' onPress={() => setScreen('ImageBackground')}></Button>
                        </View>

                        <View>
                            <Button title='Práctica: ActivityIndicator y KeyboardAvoidingView' color='purple' onPress={() => setScreen('ImageBackground')}></Button>
                        </View>

                        <View>
                            <Button title='Práctica: Modal y Bottom Sheet' color='green' onPress={() => setScreen('ImageBackground')}></Button>
                        </View>
                        
                        <StatusBar style="auto" />
                    </View>
                );
    }
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
});
