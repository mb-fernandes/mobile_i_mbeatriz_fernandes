import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

import FotoPerfil from '../../components/FotoPerfil.js';

const fotoPerfil = require('../../assets/images/userIcon.png');


export default function friends (){
    return(
        <View style={styles.container}>
            <View style={styles.centerContainer}>
            <FotoPerfil fotoPerfilSource={fotoPerfil}/>
            <View>
            <StatusBar style='auto'/>  
            </View>  
            </View>
            <View style={styles.barra}>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoContainer: {
       paddingRight: 100,
      alignItems: 'center',
      marginVertical: 20,
  },
  barra:{
    backgroundColor: 'black',
    width: '100%',
    height: 65,
  }
});