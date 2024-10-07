/** @format */

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { ms } from "react-native-size-matters";
import globalStyles from "../../../globals/globalStyles";
import { colors } from "../../../globals/colors";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import SectionProductItem from "./SectionProductItem";

interface SectionProductProps {
  icon: React.ReactElement;
  title: string;
  elements: any[];
}

const { width } = Dimensions.get("window");
const widthWithoutPadding = width - ms(40);

const SectionProduct: React.FC<SectionProductProps> = ({
  icon,
  title,
  elements,
}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < elements.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <View style={{ marginTop: ms(30) }}>
      {/* La partie haute du composant */}
      <View style={[styles.header]}>
        {/* Pour le titre et l'icone */}
        <View style={[styles.title]}>
          {icon}
          <Text
            style={{
              fontSize: ms(16),
              fontFamily: "Inter-Bold",
              color: colors.textColor,
            }}
          >
            {title}
          </Text>
        </View>

        {/* Afficher les boutons avant et arrière */}
        <View style={styles.presImgButtonNextBack}>
          <Pressable
            onPress={() => handleBack()}
            style={({ pressed }) => [
              styles.presImgPressButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <FontAwesomeIcon icon={faChevronLeft} size={ms(12)} />
          </Pressable>

          <Pressable
            onPress={() => handleNext()}
            style={({ pressed }) => [
              styles.presImgPressButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <FontAwesomeIcon icon={faChevronRight} size={ms(12)} />
          </Pressable>
        </View>
      </View>

      {/* Pour faire une délimiation */}
      <View style={styles.titleLine} />

      {/* Les produits */}
      <View>
        <FlatList
          ref={flatListRef}
          data={elements}
          renderItem={({ item, index }) => (
            <SectionProductItem
              items={item}
              index={index}
              widthParent={widthWithoutPadding}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SectionProduct;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    gap: ms(5),
    alignItems: "center",
  },
  titleLine: {
    marginTop: ms(5),
    height: ms(2),
    width: "100%",
    backgroundColor: "#333333",
  },
  presImgButtonNextBack: {
    flexDirection: "row",
  },
  presImgPressButton: {
    paddingHorizontal: ms(10),
    paddingVertical: ms(3),
    backgroundColor: colors.secondary,
    borderRadius: ms(3),
    borderWidth: ms(1),
  },
  buttonPressed: {
    backgroundColor: colors.primary,
    transform: [{ scale: 0.95 }],
  },
});
