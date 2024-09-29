import { FlatList, StyleSheet, View } from 'react-native';
import PersonaCard from './PersonaCard';
import personas from '../json/personas';
import { useNavigation } from '@react-navigation/native';

export default function PersonaList(){
    const navigation = useNavigation();

    function onPersonaPress(personData){
        navigation.navigate('ChatScreen', {personData});
    }

    return (
        <FlatList
            numColumns={2}
            data={personas.personas}
            contentContainerStyle={styles.listContainer}
            ListFooterComponent={<View style={{ height: 100 }} />}
            renderItem={({ item }) => (
                <PersonaCard 
                    image={item.image} 
                    name={item.fullName} 
                    occupation={item.occupation} 
                    age={item.age} 
                    onPress={() => onPersonaPress({personaData: item})} // Pass the item directly
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});
