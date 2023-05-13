import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.top}>
                    <Text style={styles.topText}>Top</Text>
                </View>
            </View>
            <View style={styles.containerMid}>
                <View style={styles.mid}>
                    <Text style={styles.midText}>Middle</Text>
                </View>
            </View>
            <View style={styles.containerBot}>
                <View style={styles.bot}>
                    <Text style={styles.botText}>Bottom</Text>
                </View>
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3FDFF',
    },
    containerTop: {
        flex: 1,
        backgroundColor: '#E3FDFF',
    },

    containerMid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3FDFF',
    },

    containerBot: {
        flex: 1,
        backgroundColor: '#E3FDFF',
    },
    top: {
        marginTop: 80,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderWidth: 1,
        borderColor: '#666600',
        borderRadius: 8,
    },
    bot: {
        marginTop: 80,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#7ee6fd',
        padding: 20,
        borderRadius: 18,
    },
    mid: {
        width: 150,
        height: 150,
        backgroundColor: '#2DFF57',
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },

    topText: {
        fontSize: 20,
        color: '#54B4DC',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    midText: {
        fontSize: 20,
        color: '#54B4DC',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
