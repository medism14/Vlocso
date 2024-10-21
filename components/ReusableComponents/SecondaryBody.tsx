/** @format */

import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { colors } from "../../globals/colors";
import { ms } from "react-native-size-matters";

interface SecondaryBodyProps {
  children: ReactElement | ReactElement[];
  step?: number;
  totalStep?: number;
}

const SecondaryBody: React.FC<SecondaryBodyProps> = ({
  children,
  step,
  totalStep,
}) => {
  const { width } = Dimensions.get("window");

  const getWidthElement = (): number => {
    if (step && totalStep && totalStep > 0) {
      return (width - ms(30)) * (step / totalStep);
    }
    return 0;
  };

  return (
    <View style={[styles.secondaryBody, step ? styles.secondaryBodyRadiusIfStep : { borderRadius: ms(8) }]}>
      {step && totalStep && (
        <View style={[styles.step, { width: getWidthElement() }]} />
      )}

      {children}
    </View>
  );
};

export default SecondaryBody;

const styles = StyleSheet.create({
  secondaryBody: {
    backgroundColor: colors.secondary,
    paddingVertical: ms(20),
    paddingHorizontal: ms(15),
    width: "100%",
  },
  secondaryBodyRadiusIfStep: {
    borderBottomLeftRadius: ms(8),
    borderBottomRightRadius: ms(8),
    paddingVertical: ms(27),
  },
  step: {
    backgroundColor: colors.tertiary,
    height: ms(7),
    position: "absolute",
    top: ms(0),
    left: ms(0),
  },
});
