import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = props => {
    return (
        <TextInput style={[styles.input, props.style]} />
    )
}


const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'Grey',
        borderBottomWidth: 1,
        marginVertical: 10

    }

})
export default Input