import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import PersonaList from '../components/PersonaList';

export default function HomeScreen() {
    const title = "Talk To Me";
    const colors = ['white']; // Define colors for each word

    return (
        <View style={styles.container}>
                  <StatusBar style="light" backgroundColor="#000" />
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>
                    {title.split(' ').map((word, index) => (
                        <Text key={index} style={{ color: colors[index % colors.length] }}>
                            {word}{' '}
                        </Text>
                    ))}
                </Text>
            </View>

            <View style={styles.listContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.refreshButtonContainer}>
                <Text style={styles.refreshText}>Refresh</Text>
            </TouchableOpacity>
                <PersonaList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#967bb6',
    },
    headerContainer: {
        width: '100%',
        padding: 20,
        backgroundColor: '#967bb6',
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listContainer: {
        flex: 1,
        width: '100%',
    },
    refreshButtonContainer: {
        position: 'absolute',
        zIndex: 1,
        bottom: 40,
        right: 0,
        left: 0,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#9bb57b',
        alignSelf: 'flex-end',
        marginHorizontal:80,
    },
    refreshText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});