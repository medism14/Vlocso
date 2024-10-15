import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'
import { colors } from '../../globals/colors'
import { ms } from 'react-native-size-matters'

interface SecondaryBodyProps {
    children: ReactElement,
}

const SecondaryBody: React.FC<SecondaryBodyProps> = ({ children }) => {
  return (
    <View style={styles.secondaryBody}>
      {children}
    </View>
  )
}

export default SecondaryBody

const styles = StyleSheet.create({
    secondaryBody: {
        backgroundColor: colors.secondary,
        paddingVertical: ms(20),
        paddingHorizontal: ms(15),
        width: "100%",
        borderRadius: ms(10),
    }
})