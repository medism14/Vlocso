/** @format */

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  NavigationProp,
} from "@react-navigation/native";
import globalStyles from "../../globals/globalStyles";
import { ms } from "react-native-size-matters";

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profil: React.FC<ProfileProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={[globalStyles.pageDefaultStyle, styles.container]}>
      <Text style={{ fontSize: ms(18) }}>Voici le texte</Text>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
