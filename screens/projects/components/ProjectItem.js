import React from 'react'
import {Text, TouchableOpacity, View,StyleSheet} from "react-native";

const styles = StyleSheet.create({
    text:{
        color: 'black',
        fontSize: 16
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        paddingLeft: 20
    },
    containerActive: {
        backgroundColor: 'red'
    },
    containerDormant: {
        backgroundColor: 'blue'
    }
})


export const ProjectItem = ({id,onPressItem,item,selected}) => (
    <TouchableOpacity onPress={onPressItem.bind(null,id)} >
        <View style={{...(selected? styles.containerActive : styles.containerDormant), ...styles.container }}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    </TouchableOpacity>
)