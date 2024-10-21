import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { colors } from '../../globals/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

interface ButtonDeleteProps {
    onPress: () => void,
    style?: any,
} 

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onPress, style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <FontAwesomeIcon icon={faTrashCan} size={ms(16)} color={colors.accentRed} />
    </Pressable>
  )
}

export default ButtonDelete

const styles = StyleSheet.create({
    container: {
        width: ms(35),
        height: ms(35),
        borderRadius: ms(11),
        borderColor: colors.accentRed,
        borderWidth: ms(1),
        justifyContent: "center",
        alignItems: "center",
    }
})