import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    square: {
        width: 48,
        height: 36,

        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    even: {
        backgroundColor: color.third,
    },
    odd: {
        backgroundColor: color.second,
    },

    number: {
        color: color.white,
        fontWeight: 16,
        fontWeight: 'bold',
        fontSize: 18,
    },
    content: {
        width: '80%',
        fontSize: 16,
    },
});

export default styles;
