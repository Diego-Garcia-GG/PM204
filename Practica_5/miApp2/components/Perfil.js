import { Text, Button, View, StyleSheet } from "react-native";
import React,{ useState } from "react";

/* Componente propio de perfil usando props */

/*export const Perfil =(props) => {
    return( <View>
                <Text>{props.nombre}</Text>
                <Text>{props.carrera}</Text>
                <Text>{props.materia}</Text>
                <Text>{props.cuatrimestre}</Text>
            </View>
    )
}*/

/* Componente propio de perfil usando desestructuración */

export const Perfil =({nombre, carrera, materia, cuatrimestre, style}) => {
    const [mostrar,setMostrar] = useState(false)
    return( <View style={[styles.tarjeta, style]}>
                <Text style={styles.nombre}>{nombre}</Text>

                {mostrar &&
                <>
                    <Text style={styles.carrera}>{carrera}</Text>
                    <Text style={styles.otroTexto}>{materia}</Text>
                    <Text style={styles.otroTexto}>{cuatrimestre}</Text>
                </>
                }

                <Button title="Ver perfil" onPress={()=>setMostrar(!mostrar)}></Button>
            </View>
    )
}

const styles= StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:600,
        textTransform:'uppercase',
    },
    tarjeta:{
        borderWidth:2,
        padding:15,
        margin:10,
    },
    carrera:{
        fontSize:18,
        color:'blue',
        fontFamily:'Robot',
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Roboto',
        fontStyle:'Italic',
    },
});
