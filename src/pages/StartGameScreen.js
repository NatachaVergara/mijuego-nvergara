import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import Card from '../Components/Card'
import Input from '../Components/Input'
import Colors from '../Constant/Colors'

const StartGameScreen = () => {
    const [valueEntered, setValueEntered] = useState('')
    const handleInputNumer = text => {
        setValueEntered(text.replace(/[^0-9]/g, ''))
    }


    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}  >
            <View style={styles.container}  >
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.inputTitle} >Elija un número</Text>
                    <Input style={styles.inputField}
                        blurOnsubmit
                        autoCapitalization={'none'}
                        autoCorrect={false}
                        keyboardType={"numeric"}
                        maxLength={2}
                        value={valueEntered}
                        onChangeText={handleInputNumer}

                    />
                    <View style={styles.buttonContainer}>
                        <Button title={'Confirmar'} onClick={() => { }} color={Colors.primary} />
                        <Button title={'Limpiar'} onClick={() => { }} color={Colors.secondary} />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 10,
        alignItems: "center",

    },
    inputTitle: {
        fontSize: 15,
        marginTop: 10
    },
    inputField: {
        height: 40,
        margin: 12
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: '20px',

    }



})



export default StartGameScreen