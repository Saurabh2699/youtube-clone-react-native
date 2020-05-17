import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import { emitNotification } from 'expo/build/Notifications/Notifications'
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@react-navigation/native'

//const api_key = 'AIzaSyBmxySOsNO8kOAn-iI3s5J946OqG1QoUKA'
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=new%20english%20songs&type=video&key=AIzaSyBmxySOsNO8kOAn-iI3s5J946OqG1QoUKA

const Search = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const { colors } = useTheme()
    const textColor = colors.iconColor
    const dark = colors.headerColor
    const dispatch = useDispatch()
    const miniCardData = useSelector(state => state.cardData)
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${search}&type=video&key=AIzaSyBmxySOsNO8kOAn-iI3s5J946OqG1QoUKA`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                dispatch({ type: 'FETCH_DATA', payload: data.items })
            })
    }

    return (
        <View style={styles.container}>
            <View style={[styles.searchArea, { backgroundColor: dark }]}>
                <Ionicons style={{ color: textColor }} name='md-arrow-back' size={32} onPress={() => navigation.goBack()} />
                <TextInput
                    onChangeText={(text) => setSearch(text)}
                    style={{ width: '70%', backgroundColor: 'white' }}
                />
                <Ionicons style={{ color: textColor }} name='md-send' size={32} onPress={() => fetchData()} />
            </View>

            {
                loading ? <ActivityIndicator style={{ marginTop: 10 }} size='large' color='red' /> : null
            }


            <FlatList
                data={miniCardData}
                renderItem={({ item }) => {
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item => item.id.videoId}

            />

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight
    },
    searchArea: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around',
        elevation: 5,
    }
})
