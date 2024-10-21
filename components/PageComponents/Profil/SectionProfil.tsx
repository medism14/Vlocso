/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../globals/colors";

interface SectionProfilProps {
  title: string;
  icon?: any;
  borderB?: boolean;
  onPress?: () => void,
}

const SectionProfil: React.FC<SectionProfilProps> = ({
  title,
  icon,
  borderB = true,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.elementsContainer]}>
        <View
          style={{ flexDirection: "row", alignItems: "center", gap: ms(6) }}
        >
          {icon}
          <Text style={styles.text}>{title}</Text>
        </View>

        <FontAwesomeIcon
          icon={faChevronRight}
          size={ms(20)}
          style={styles.rightArrow}
        />
      </View>
    </Pressable>
  );
};

export default SectionProfil;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(10),
    borderBottomColor: colors.textColor,
    borderBottomWidth: ms(2),
  },
  elementsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: ms(18),
    fontFamily: "Inter-Bold",
  },
  rightArrow: {
    position: "absolute",
    right: 0,
  },
});
