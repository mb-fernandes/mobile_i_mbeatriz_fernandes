import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ perfilFotoSource }) {
  return (
    <Image source={ perfilFotoSource } style={styles.image} />
  );    
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 30,
    borderBlockColor: '#131313',
  },
});