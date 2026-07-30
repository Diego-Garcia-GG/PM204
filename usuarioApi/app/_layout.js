import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="detalle" options={{ title: "Detalle del usuario", headerShown: true }} />
            <Stack.Screen name="actualizar" options={{ title: "Actualizar Usuario", headerShown: true }} />
        </Stack>
    );
}

