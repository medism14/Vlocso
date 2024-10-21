/** @format */

import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../../globals/colors";

const Header: React.FC = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/vlocso.png")}
        style={{ width: wp("15%"), height: undefined, aspectRatio: 1, marginVertical: ms(15) }}
      />

      <TextInput
        style={[styles.searchBar]}
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
    borderWidth: ms(1),
    borderColor: "gray",
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(4.4),
    borderRadius: ms(5),
    fontStyle: "italic",
    fontSize: ms(12),
  },
});
