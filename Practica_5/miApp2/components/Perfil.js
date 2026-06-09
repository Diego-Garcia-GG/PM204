import { Text, Button, View } from "react-native";
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

export const Perfil =({nombre, carrera, materia, cuatrimestre}) => {
    const [mostrar,setMostrar] = useState(false)
    return( <View>
                <Text>{nombre}</Text>

                {mostrar &&
                <>
                    <Text>{carrera}</Text>
                    <Text>{materia}</Text>
                    <Text>{cuatrimestre}</Text>
                </>
                }

                <Button title="Ver perfil" onPress={()=>setMostrar(!mostrar)}></Button>
            </View>
    )
}
