import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image, FlatList } from "react-native";
import { Link } from "expo-router";

const friendsData = [
    { id: '1', name: 'Riikan', icon: require('../../assets/images/userIcon.png') },
    { id: '2', name: 'Mabi', icon: require('../../assets/images/userIcon.png') },
    { id: '3', name: 'Martinabox', icon: require('../../assets/images/userIcon.png') },
    // Add more friends as needed
];

export default function Friends() {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Text style={styles.title}>Friends List</Text>
            <FlatList
                data={friendsData}
                renderItem={({ item }) => (
                    <View style={styles.friendItem}>
                        <Image source={item.icon} style={styles.friendIcon} />
                        <Text style={styles.friendName}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                style={styles.list}
            />
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Friend</Text>
            </Pressable>
            <View style={styles.barra}>
                <Link href={'./nots/index'}>
                    <Pressable>
                        <Image source={require('../../assets/images/friends.png')} style={styles.friendIcon} />
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    list: {
        width: '100%',
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#A8E1D8', // Pastel background for each friend item
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
    },
    friendIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    friendName: {
        color: '#2E8B57',
        fontSize: 20,
    },
    addButton: {
        backgroundColor: '#6CA0F5', // Button color
        padding: 15,
        borderRadius: 30,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    barra: {
        backgroundColor: '#000',
        width: '100%',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
