import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const ExploreCard = ({ name }) => {
    return (
        <View style={styles.exploreContainer}>
            <Text style={styles.exploreTitle}>
                {name}
            </Text>
        </View>
    )
}

const Explore = () => {
    const cardData = useSelector(state => state.cardData)
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={styles.exploreArea}>
                    <ExploreCard name='Trending' />
                    <ExploreCard name='Gaming' />
                    <ExploreCard name='Music' />
                    <ExploreCard name='News' />
                    <ExploreCard name='Movies/TV' />
                    <ExploreCard name='Fashion' />
                </View>
                <Text style={styles.trending} >Trending Videos</Text>
                <FlatList
                    data={cardData}
                    renderItem={({ item }) => {
                        return <Card
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={item => item.id.videoId}
                />
            </ScrollView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    exploreContainer: {
        backgroundColor: 'red',
        width: 200,
        height: 50,
        borderRadius: 4,
        marginTop: 10
    },
    exploreTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        padding: 10
    },
    exploreArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    trending: {
        margin: 8,
        fontSize: 22,
        borderBottomWidth: 1
    }
})
