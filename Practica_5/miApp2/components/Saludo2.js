import { Text, Image, Button, View } from "react-native";

export const Saludo2=() => {
    return( <View>
                <Text> Hola RN: Componente Propio  3 elementos ! </Text>
                <Image source={require('../assets/wave.png')}></Image>
                <Button title="Hola S-204 !"></Button>
            </View>
    )
}