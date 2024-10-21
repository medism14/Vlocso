/** @format */

import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";

interface ValidationButtonProps {
  handleSubmit: any;
  onSubmit: any;
  text: string;
  disabled?: boolean;
}

const ValidationButton: React.FC<ValidationButtonProps> = ({
  handleSubmit,
  onSubmit,
  text,
  disabled = false,
}) => {

  return (
    <Pressable
      style={({ pressed }) => [
        styles.submitButton,
        pressed && { transform: [{ scale: 0.95 }] },
        disabled && styles.disabledButton,
      ]}
      onPress={handleSubmit(onSubmit)}
      disabled={disabled}
    >
      <Text style={styles.submitButtonText}>{text}</Text>
    </Pressable>
  );
};

export default ValidationButton;

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: colors.tertiary,
    padding: ms(11),
    borderRadius: ms(5),
    marginTop: ms(22),
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: "white",
    fontSize: ms(14),
    fontFamily: "Inter-Bold",
  },
});
