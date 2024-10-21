import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { colors } from '../../globals/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

interface ButtonEditProps {
    onPress: () => void,
    style?: any,
} 

const ButtonEdit: React.FC<ButtonEditProps> = ({ onPress, style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <FontAwesomeIcon icon={faPencil} size={ms(16)} color={colors.textColor} />
    </Pressable>
  )
}

export default ButtonEdit

const styles = StyleSheet.create({
    container: {
        width: ms(35),
        height: ms(35),
        borderRadius: ms(11),
        borderColor: colors.textColor,
        borderWidth: ms(1),
        justifyContent: "center",
        alignItems: "center",
    }
})