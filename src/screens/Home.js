import React from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

export default function Home({ navigation }) {

    // const scrollY = new Animated.Value(0)
    // const diffClamp = Animated.diffClamp(scrollY, 0, 45)
    // const translateY = diffClamp.interpolate({
    //     inputRange: [0, 45],
    //     outputRange: [0, -80]
    // })

    const cardData = useSelector(state => state.cardData)
    return (
        <View style={{ flex: 1 }}>
            {/* <Animated.View
                style={{
                    transform: [
                        { translateY: translateY }
                    ],
                    elevation: 10
                }}
            > */}
            <Header />
            {/* </Animated.View> */}
            <View style={{ marginTop: 2 }}>
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
                // onScroll={(e) => {
                //     scrollY.setValue(e.nativeEvent.contentOffset.y)
                // }}
                />
            </View>

        </View>
    );
}
