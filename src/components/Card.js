import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'

const Card = (props) => {
    const navigation = useNavigation()
    const { colors } = useTheme()
    const textColor = colors.iconColor
    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoPlayer', { videoId: props.videoId, title: props.title })}>
            <View style={styles.card}>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <MaterialIcons style={{ color: textColor }} name='account-circle' color='#212121' size={45} />
                    <View style={styles.text}>
                        <Text
                            style={[styles.title, { color: textColor }]}
                            ellipsizeMode='tail'
                            numberOfLines={2}
                        >
                            {props.title}
                        </Text>
                        <Text style={{ color: textColor }}>{props.channel}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    description: {
        flexDirection: 'row',
        margin: 5
    },
    text: {
        marginLeft: 5
    },
    title: {
        fontSize: 20,
        width: Dimensions.get('screen').width - 50
    }
})
