import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
    return (
        <View style={[styles.card, props.styles]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20
    }
})


export default Card