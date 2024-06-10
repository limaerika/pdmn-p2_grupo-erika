import React, { useState } from 'react';
import { View, Button, ScrollView, Image, StyleSheet } from 'react-native';
import { getCatPhotos } from './api';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  const loadPhotos = async () => {
    const newPhotos = await getCatPhotos();
    setPhotos([...photos, ...newPhotos]);
  };

  const clearPhotos = () => {
    setPhotos([]);
  };

  return (

    <View style={styles.container}>
      <View>
        <Button title="Carregar Fotos" onPress={loadPhotos} />
        <Button title="Limpar Fotos" onPress={clearPhotos} color="red" />
      </View>

      <ScrollView style={styles.scrollView}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo.url }} style={styles.photo} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  scrollView: {
    marginTop: 10,
    width: '100%',
  },
  photo: {
    width: '100%',
    height: undefined, // Para tornar a altura responsiva
    aspectRatio: 1, // Manter a proporção da imagem
    marginBottom: 10, // Adicionando margem inferior de 5px para as imagens
  }
});

export default PhotoList;
