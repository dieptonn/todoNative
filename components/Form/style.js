import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: '83%',
        backgroundColor: color.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#4FD0EF',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: '#4FD0EF',
        borderRadius: 44,
        borderWidth: 1,
        borderColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#fff',
        fontSize: 27,
    },
});

export default styles;
