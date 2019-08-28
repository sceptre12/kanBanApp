import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text:{
        color: 'black'
    },
    containerActive: {
        backgroundColor: 'red'
    },
    containerDormant: {
        backgroundColor: 'blue'
    }
})

export const ListItem = ({id,onPressItem,item,selected}) => (
    <TouchableOpacity onPress={onPressItem.bind(null,id)} >
        <View style={selected? styles.containerActive: styles.containerDormant}>
            <Text style={styles.text}>{JSON.stringify(item)}</Text>
        </View>
    </TouchableOpacity>
)
