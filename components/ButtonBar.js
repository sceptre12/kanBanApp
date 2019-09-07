import React from 'react'
import {StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    buttonBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const ButtonBar = ({leftBtnText, rightBtnText, leftBtnPress, rightBtnPress, isLeftBtnDisabled, isRightBtnDisabled, middleBtnText, middleBtnPressed, isMiddleBtnDisabled, customStyles}) => (
    <View style={{...styles.buttonBar,...customStyles}}>
        {
            leftBtnPress ? (<View style={styles.button}>
                <Button
                    disabled={isLeftBtnDisabled}
                    mode="contained"
                    onPress={leftBtnPress}
                    title={leftBtnText}
                />
            </View>) : null
        }
        {
            middleBtnText ? (
                <View style={styles.button}>
                    <Button
                        disabled={isMiddleBtnDisabled}
                        mode="contained"
                        onPress={middleBtnPressed}
                        title={middleBtnText}
                    />
                </View>
            ) : null
        }
        {
            rightBtnText ? (
                <View style={styles.button}>
                    <Button
                        disabled={isRightBtnDisabled}
                        mode="contained"
                        onPress={rightBtnPress}
                        title={rightBtnText}
                    />
                </View>
            ) : null
        }
    </View>
)