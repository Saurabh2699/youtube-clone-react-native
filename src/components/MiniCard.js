import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'

const MiniCard = (props) => {
    const navigation = useNavigation()
    const { colors } = useTheme()
    const textColor = colors.iconColor
    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoPlayer', { videoId: props.videoId, title: props.title })}>
            <View style={styles.container}>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={[styles.text, { color: textColor }]}
                        numberOfLines={3}
                        ellipsizeMode='tail'
                    >
                        {props.title}
                    </Text>
                    <Text style={[styles.miniText, { color: textColor }]}>{props.channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MiniCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 0
    },
    image: {
        width: '45%',
        height: 100
    },
    text: {
        fontSize: 17,
        width: Dimensions.get('screen').width / 2
    },
    miniText: {
        fontSize: 12
    },
    textContainer: {
        paddingLeft: 10
    }
})
