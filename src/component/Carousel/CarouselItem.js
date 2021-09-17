import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
    },

    image: {
        width: width - 20,
        height: height / 5,
        borderRadius: 5
    },
})

export default CarouselItem