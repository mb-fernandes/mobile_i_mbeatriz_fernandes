import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";

import Button from '../components/butao.js';
import ImageViewer from '../components/ImageViewer.js';
import FotoPerfil from '../components/FotoPerfil.js';

const albumFoto = require('../assets/images/strobo.png');
const fotoPerfil = require('../assets/images/userIcon.png');
const home = require('../assets/images/home.png');
const friends = require('../assets/images/friends.png');
const perfil = require('../assets/images/perfil.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <View style={styles.fotoContainer}>
          <FotoPerfil fotoPerfilSource={fotoPerfil} />
          <Text style={styles.username}>User12345</Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageViewer albumFotoSource={albumFoto} />
        </View>
        <Text style={styles.title}>Fukakoryoku</Text>
        <Text style={styles.artist}>Vaundy</Text>
        <View style={styles.buttonContainer}>
          <Button label='play on' />
        </View>
        <StatusBar style='auto' />
      </View>
      <View style={styles.barra}>
        <View style={styles.iconContainer}>
          <Link href={'../Friends/amigos'}>
            <Pressable>
              <Image source={friends} style={styles.icon} />
            </Pressable>
          </Link>
        </View>
        <View style={styles.iconContainer}>
          <Link href={'../account/perfil'}>
            <Pressable>
              <Image source={perfil} style={styles.icon} />
            </Pressable>
          </Link>
        </View>
        <View style={styles.iconContainer}>
          <Link href={'../nots/index'}>
            <Pressable>
              <Image source={home} style={styles.icon} />
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  fotoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  username: {
    color: '#fff',
    fontSize: 15,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  artist: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  barra: {
    backgroundColor: 'black',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
