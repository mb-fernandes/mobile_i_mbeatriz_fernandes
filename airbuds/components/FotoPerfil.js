import { StyleSheet, Image } from 'react-native';

export default function FotoPerfil({ fotoPerfilSource }) {
    return (
      <Image source={ fotoPerfilSource } style={styles.image} />
    );    
  }
  
  const styles = StyleSheet.create({
    image: {
      width: 70,
      height: 70,
      borderRadius: 10,
    },
});