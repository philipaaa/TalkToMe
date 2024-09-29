import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';


export default function ChatScreen({ route }) {
    const { personData } = route.params;
    const [input, setInput] = useState('');

    return (
        <View style={styles.container}>
            <Image source={personData.personaData.image} style={styles.personaImage} />
            <Text style={styles.nameText}>{personData.personaData.fullName}</Text>
            <Text style={styles.occupationText}>{personData.personaData.occupation}</Text>
            <Text style={styles.ageText}>{personData.personaData.age}</Text>
            <ScrollView style={styles.chatBox}>
                
            </ScrollView>
            <TextInput style={styles.textInput} value={input} onChange={setInput} placeholder='Type here...'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#967bb6',
    },

    personaImage: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderRadius: 75,
    
    },
    nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    occupationText: {
        fontSize: 20,
    },
    ageText: {
        fontSize: 20,
    },

    textInput: {
        position: 'absolute',
        width: '90%',
        bottom: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: '#9bb57b',
        borderRadius: 10,
    },
    chatBox: {
        width: '100%',
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
    },
});