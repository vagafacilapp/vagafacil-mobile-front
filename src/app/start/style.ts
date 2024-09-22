import { StyleSheet } from 'react-native';

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
  boxInfo: {
    position: 'absolute',
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
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
});
