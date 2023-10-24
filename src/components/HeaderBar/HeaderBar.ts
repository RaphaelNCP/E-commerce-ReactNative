import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00A9FF',
    },
    image: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 30,
        width: 80,
        backgroundColor: '#89CFF3',
        borderRadius: 10,
        padding: 5,
    },
    text: {
        marginRight: 10,
        width: 80,
        fontWeight: 'bold',
    },
});

