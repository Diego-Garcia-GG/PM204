import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import RepasoScreen from '../screens/repasoScreen'; // Importación exacta

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <RepasoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});