/* eslint-disable no-undef */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export function StartScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/StartImage.png')} />
      <Image style={styles.routerImage} source={require('../../assets/routerDirection.png')} />
      <View style={styles.boxInfo}>
        <View>
          <Text style={{ fontSize: 20, color: 'white' }}>
            Encontre a <Text style={{ color: 'white' }}>Vaga</Text> Perfeita
          </Text>
          <Text style={{ color: 'white' }}>
            Descubra e agende oportunidades de acordo com suas preferências
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Iniciar</Text>
          <Text style={styles.buttonArrow}>
            <Image style={styles.routerImage} source={require('../../assets/arrowStart.png')} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
