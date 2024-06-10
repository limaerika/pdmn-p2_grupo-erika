// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PhotoList from './PhotoList'; // Corrigido o caminho do import

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PhotoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
