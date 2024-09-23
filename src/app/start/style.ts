import { StyleSheet } from 'react-native';

import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  routerImage: {
    position: 'absolute',
    top: 240,
  },
  boxInfo: {
    position: 'absolute',
    justifyContent: 'space-between',
    alignContent: 'center',
    bottom: 20,
    marginTop: 20,
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    flex: 1,
    height: 340,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: colors.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonArrow: {
    width: 50,
    height: 50,
    backgroundColor: colors.black,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
