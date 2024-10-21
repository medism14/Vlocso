/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../globals/colors";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

interface PostCardProps {
  title: string;
  icon: any;
  onPress: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ title, icon, onPress }) => {
  return (
    <Pressable style={styles.pageStyle} onPress={onPress}>
      {/* Titre */}
      <Text style={styles.title}>{title}</Text>

      {/* Icon */}
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faBullhorn} size={ms(60)} />

        <View style={styles.littleIcon}>{icon}</View>
      </View>

      {/* Button */}
      <Pressable onPress={onPress} style={styles.button}>
        <Text
          style={{
            fontFamily: "Inter-SemiBold",
            fontSize: ms(14),
            color: colors.primary,
          }}
        >
          Continuer
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  pageStyle: {
    width: "45%",
    backgroundColor: colors.secondary,
    padding: ms(15),
    paddingBottom: ms(10),
    borderRadius: ms(8),
    justifyContent: "space-between",
  },
  title: {
    fontSize: ms(12),
    fontFamily: "Inter-Bold",
    textAlign: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginTop: ms(10),
    alignSelf: "center",
    position: "relative",
  },
  littleIcon: {
    position: "absolute",
    top: ms(-7),
    right: ms(-12),
  },
  button: {
    backgroundColor: colors.tertiary,
    marginTop: ms(20),
    alignItems: "center",
    padding: ms(5),
    borderRadius: ms(5),
  },
});
