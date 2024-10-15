/** @format */

import React, { useCallback, useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../globals/colors";
import SectionProductItem from "./SectionProductItem";

interface SectionProductProps {
  icon: React.ReactElement;
  title: string;
  elements: any[][];
}

const { width } = Dimensions.get("window");

const SectionProduct: React.FC<SectionProductProps> = ({
  icon,
  title,
  elements,
}) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const widthWithoutPadding = width - ms(40);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const handleScroll = (direction: 'back' | 'next') => {
    const newIndex = direction === 'back' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < elements.length) {
      flatListRef.current?.scrollToIndex({
        index: newIndex,
        animated: true,
      });
    }
  };

  const renderNavigationButton = (direction: 'back' | 'next') => (
    <Pressable
      onPress={() => handleScroll(direction)}
      style={({ pressed }) => [
        styles.presImgPressButton,
        pressed && styles.buttonPressed,
      ]}
      accessibilityLabel={direction === 'back' ? "Previous" : "Next"}
      accessibilityRole="button"
    >
      <FontAwesomeIcon 
        icon={direction === 'back' ? faChevronLeft : faChevronRight} 
        size={Dimensions.get("window").width > 500 ? ms(15) : ms(12)} 
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          {icon}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.presImgButtonNextBack}>
          {renderNavigationButton('back')}
          {renderNavigationButton('next')}
        </View>
      </View>

      <View style={styles.titleLine} />

      <FlatList
        ref={flatListRef}
        data={elements}
        renderItem={({ item }) => (
          <SectionProductItem
            items={item}
            widthParent={widthWithoutPadding}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default SectionProduct;

const styles = StyleSheet.create({
  container: {
    marginTop: ms(30),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    gap: Dimensions.get("window").width > 500 ? ms(8) : ms(5),
    alignItems: "center",
  },
  titleText: {
    fontSize: Dimensions.get("window").width > 500 ? ms(22) : ms(16),
    fontFamily: "Inter-Bold",
    color: colors.textColor,
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
