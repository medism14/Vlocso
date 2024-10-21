/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";

interface BackFormButtonProps {
  onPress: () => void;
}

const BackFormButton: React.FC<BackFormButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.comeBackForm} onPress={onPress}>
      <Text style={styles.comeBackFormText}>Retour</Text>
    </Pressable>
  );
};

export default BackFormButton;

const styles = StyleSheet.create({
  comeBackForm: {
    borderWidth: ms(1),
    borderColor: colors.tertiary,
    borderRadius: ms(5),
    backgroundColor: colors.primary,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: ms(30),
    paddingVertical: ms(6),
  },
  comeBackFormText: {
    color: colors.textColor,
    fontSize: ms(14),
    fontFamily: "Inter-Bold",
  },
});
