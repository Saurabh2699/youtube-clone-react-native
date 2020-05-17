import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview'

const VideoPlayer = ({ route }) => {
    const { videoId, title } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <WebView
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />
            </View>
            <Text
                style={styles.videoTitle}
                numberOfLines={2}
                ellipsizeMode='tail'
            >
                {title}
            </Text>
            <View style={{ borderBottomWidth: 1 }} />
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight
    },
    videoContainer: {
        width: '100%',
        height: 300
    },
    videoTitle: {
        fontSize: 20,
        width: Dimensions.get('screen').width - 50,
        margin: 10
    }
})
