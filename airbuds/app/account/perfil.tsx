import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";

import PerfilFoto from '../../components/Perfil.js';

const perfilFoto = require('../../assets/images/userIcon.png');
const friend = require('../../assets/images/friends.png');
const albumFoto = require('../../assets/images/strobo.png');

export default function Friends() {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.header}>
                <PerfilFoto perfilFotoSource={perfilFoto} />
                <Text style={styles.username}>User12345</Text>
                <Text style={styles.handle}>@User12345</Text>
            </View>
            <View style={styles.recentlyPlayedContainer}>
                <Text style={styles.recentlyPlayedText}>Recently Played</Text>
                <Image source={albumFoto} style={styles.albumArt} />
            </View>
            <View style={styles.favoriteContainer}>
                <Text style={styles.favoriteText}>Favorite Tracks</Text>
            </View>
            <Text style={styles.onRepeatText}>On Repeat</Text>
            <View style={styles.barra}>
                <Link href={'./nots/index'}>
                    <Pressable>
                        <Image source={friend} style={styles.friendIcon} />
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414', // Keep original background color
        alignItems: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    username: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    handle: {
        color: '#aaa',
        fontSize: 16,
    },
    recentlyPlayedContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    recentlyPlayedText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '600',
    },
    albumArt: {
        height: 120,
        width: 120,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
    favoriteContainer: {
        backgroundColor: '#A8E1D8', // Pastel green
        width: '90%',
        height: 70,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        elevation: 5, // Add shadow effect
    },
    favoriteText: {
        color: '#2E8B57', // Darker green
        fontSize: 24,
        fontWeight: 'bold',
    },
    onRepeatText: {
        color: '#6CA0F5', // Pastel blue
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    barra: {
        backgroundColor: '#000',
        width: '100%',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    friendIcon: {
        width: 24,
        height: 24,
    },
});
