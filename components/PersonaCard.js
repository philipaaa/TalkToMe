import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function PersonaCard({ name, image, occupation, age, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={image } style={styles.image} />
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.occupationText}>{age}</Text>
            <Text style={styles.occupationText}>{occupation}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#fff',
        maxWidth: 150,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 75,
        marginBottom: 10,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    occupationText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
})