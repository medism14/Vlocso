/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";

interface BackButtonProps {
  onPress: () => void;
  title?: string;
  marginB?: any;
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  title = "Retour à la page d'accueil",
  marginB = ms(35)
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.homeButton, marginB && { marginBottom: marginB }]}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={ms(16)}
        style={styles.homeButtonIcon}
      />
      <Text style={styles.homeButtonText}>{title}</Text>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: ms(4),
    backgroundColor: colors.accentTertiary,
    paddingVertical: ms(7),
    paddingHorizontal: ms(14),
    borderRadius: ms(4),
    alignSelf: "flex-start",
  },
  homeButtonText: {
    color: "white",
    fontSize: ms(12),
    fontFamily: "Inter-Medium",
  },
  homeButtonIcon: {
    color: "white",
  },
});
