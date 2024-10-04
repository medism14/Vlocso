/** @format */

import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../../globals/colors";
import globalStyles from "../../globals/globalStyles";

const Header: React.FC = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/vlocso.png")}
        style={{ width: wp("20%"), height: undefined, aspectRatio: 1 }}
      />

      <TextInput
        style={[styles.searchBar, globalStyles.textBase]}
        placeholder="Faites votre recherche ici..."
      >
      </TextInput>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchBar: {
    padding: ms(10),
    backgroundColor: colors.inputColor,
    width: wp(80),
    height: hp(4.4),
    borderRadius: ms(5),
    fontStyle: "italic",
  },
});
