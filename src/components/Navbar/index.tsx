import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, View } from 'react-native';

export function NavBar({ navigation }: Readonly<BottomTabBarProps>) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        zIndex: 1,
      }}
    >
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Button onPress={() => navigation.navigate('Map')} title="Mapa" />
      <Button onPress={() => navigation.navigate('Save')} title="Salvos" />
      <Button onPress={() => navigation.navigate('Profile')} title="Perfil" />
    </View>
  );
}
