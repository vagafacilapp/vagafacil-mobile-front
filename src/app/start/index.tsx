/* eslint-disable no-undef */
import React from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

import { styles } from './style';

import { RootStackParamList } from '@/types/navigation';

type StartScreenNavigationProp = NavigationProp<RootStackParamList, 'Start'>;

export function StartScreen() {
  const navigation = useNavigation<StartScreenNavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/StartImage.png')}
          resizeMode="cover"
        />
        <Image
          style={styles.routerImage}
          source={require('../../assets/routerDirection.png')}
          resizeMode="contain"
        />
        <BlurView intensity={100} style={styles.boxInfo}>
          <View style={styles.boxInfoTitle}>
            <Text style={styles.title}>
              Encontre a <Text style={{ color: 'green' }}>Vaga</Text> Perfeita
            </Text>
            <Text style={styles.subTitle}>
              Descubra e agende oportunidades de acordo com suas preferências
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Iniciar</Text>
            <View style={styles.buttonArrow}>
              <Image source={require('../../assets/arrowStart.png')} />
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </SafeAreaView>
  );
}
