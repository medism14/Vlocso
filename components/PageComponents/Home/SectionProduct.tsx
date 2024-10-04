/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import globalStyles from "../../../globals/globalStyles";

interface SectionProductProps {
  icon: React.ReactElement;
  title: string;
}

const SectionProduct: React.FC<SectionProductProps> = ({ icon, title }) => {
  return (
    <View>
      <View style={[styles.container]}>
        {icon}
        <Text style={[globalStyles.textXl, { fontFamily: "Inter-SemiBold" }]}>
          {title}
        </Text>
      </View>
      <View  style={styles.titleLine} />
    </View>
  );
};

export default SectionProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: ms(5),
    marginTop: ms(30),
    alignItems: "center",
  },
  titleLine: {
    marginTop: ms(5),
    height: ms(2),
    width: "100%",
    backgroundColor: "#333333",
  },
});
