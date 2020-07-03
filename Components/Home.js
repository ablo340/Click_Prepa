import React from 'react'
import { StyleSheet, View, Button, Text, Alert, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends React.Component {
    render(){
        return (
            <View style={styles.main_container}>
                <TouchableOpacity onPress={() => Alert.alert('Pop up à propos')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>A propos</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed on Faire ta prepa')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Faire une prepa</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed on Mes prepas')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Mes prepas</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}   

const styles = StyleSheet.create({
    main_container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: 'chartreuse',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    text: {
        fontSize: 50,
        fontStyle: 'italic',
        fontWeight: "bold"
    },
    buttonText: {
        textAlign: 'center',
        padding: 30,
        color: 'white',
        fontSize: 15
    }
})

export default Home