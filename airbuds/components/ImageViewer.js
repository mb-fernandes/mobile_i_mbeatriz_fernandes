import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ albumFotoSource }) {
  return (
    <Image source={ albumFotoSource } style={styles.image} />
  );    
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
  },
});