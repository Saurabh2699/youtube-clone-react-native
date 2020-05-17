import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const Subscribed = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Subcribed screen</Text>
        </View>
    )
}

export default Subscribed

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
