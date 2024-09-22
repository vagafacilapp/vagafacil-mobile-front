import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  boxInfo: {
    position: 'absolute',
    bottom: 20,
    marginTop: 20,
    width: '80%',
    padding: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
});
