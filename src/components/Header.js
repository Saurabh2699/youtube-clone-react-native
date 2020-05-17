import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

    const navigation = useNavigation()
    const { colors } = useTheme()
    const myColor = colors.iconColor

    const dispatch = useDispatch()
    const currentTheme = useSelector(state => state.darkMode)

    return (
        <View style={[styles.container, { backgroundColor: colors.headerColor }]}>
            <View style={styles.logoContainer}>
                <AntDesign style={styles.logo} name='youtube' size={32} color='red' />
                <Text style={[styles.title, { color: myColor }]}>YouTube</Text>
            </View>
            <View style={styles.util}>
                <Ionicons
                    name='md-videocam'
                    color={myColor}
                    size={32}
                />
                <Ionicons
                    name='md-search'
                    color={myColor}
                    size={32}
                    onPress={() => navigation.navigate('search')}
                />
                <MaterialIcons
                    name='account-circle'
                    color={myColor}
                    size={32}
                    onPress={() => dispatch({ type: 'CHANGE_THEME', payload: !currentTheme })}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: Constant.statusBarHeight,
        height: 45,
        justifyContent: 'space-between',
        elevation: 5
    },
    logoContainer: {
        flexDirection: 'row',
        margin: 5
    },
    logo: {
        marginLeft: 20
    },
    title: {
        fontSize: 22,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    util: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
        margin: 5
    }
})

export default Header
