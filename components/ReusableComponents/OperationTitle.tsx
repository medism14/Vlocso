/** @format */

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";

interface OperationTitleProps {
  title: string;
}

const OperationTitle: React.FC<OperationTitleProps> = ({ title }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginBottom: ms(20) }}>
      <Image
        source={require("../../assets/logo-withoutName.png")}
        style={{ width: ms(70), height: undefined, aspectRatio: 1 }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default OperationTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: ms(20),
    fontFamily: "Inter-Bold",
    textDecorationLine: "underline",
  },
});
