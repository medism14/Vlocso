/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";

interface BackButtonProps {
    onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.homeButton}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={ms(16)}
        style={styles.homeButtonIcon}
      />
      <Text style={styles.homeButtonText}>
        Retour à la page d'accueil
      </Text>
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
        alignSelf: 'flex-start',
        marginBottom: ms(30),
      },
      homeButtonText: {
        color: "white",
        fontSize: ms(12),
        fontFamily: "Inter-Medium",
      },
      homeButtonIcon: {
        color: "white",
      }
});
