/* eslint-disable no-undef */
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export function StartScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/StartImage.png')} />
      <View style={styles.boxInfo}>
        <Text style={{ fontSize: 20, color: 'white' }}>Encontre a Vaga Perfeita</Text>
        <Text>Descubra e agende oportunidades de acordo com suas preferências</Text>
        <Button onPress={() => navigation.navigate('Login')} title="Iniciar" />
      </View>
    </View>
  );
}
