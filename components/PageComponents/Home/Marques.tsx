/** @format */

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ms } from "react-native-size-matters";
import { colors } from "../../../globals/colors";
import globalStyles from "../../../globals/globalStyles";
import MarquesItem from "./MarquesItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Brand {
  id: number;
  image: any;
  title: string;
}

interface MarquesProps {
  brands: Brand[];
  title: string;
  position: "left" | "right";
}

const Marques: React.FC<MarquesProps> = ({ brands, title, position }) => {
  const flatListRef = useRef<FlatList<Brand> | null>(null);
  const brandContentRef = useRef<View | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const handleMesure = () => {
      if (brandContentRef.current) {
        brandContentRef.current.measure((x, y, width, height) => {
          setWidth(width - 50);
        });
      }
    };

    const timeout = setTimeout(handleMesure, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleBack = () => {
    if (indexRef.current <= 0) {
      indexRef.current = brands.length - 3;
    } else {
      indexRef.current--;
    }
    setCurrentIndex(indexRef.current);

    flatListRef.current?.scrollToIndex({
      index: indexRef.current,
      animated: true,
    });
  };

  const handleNext = () => {
    if (indexRef.current >= brands.length - 3) {
      indexRef.current = 0;
    } else {
      indexRef.current++;
    }
    setCurrentIndex(indexRef.current);

    flatListRef.current?.scrollToIndex({
      index: indexRef.current,
      animated: true,
    });
  };

  const alignmentStyle: ViewStyle =
    position === "left"
      ? { alignItems: "flex-start" }
      : { alignItems: "flex-end" };

  return (
    <View style={alignmentStyle}>
      <Text
        style={[
          {
            fontFamily: "Inter-Bold",
            textAlign: position,
            color: colors.textColor,
            fontSize: ms(16),
          },
        ]}
      >
        {title}
      </Text>

      <View ref={brandContentRef} style={styles.brandContent}>
        <FlatList
          ref={flatListRef}
          data={brands}
          renderItem={({ item }) => (
            <MarquesItem item={item} widthParent={width} />
          )}
          pagingEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Pressable style={styles.paginationLeft} onPress={handleBack}>
          <View style={styles.PaginationButton}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              color={"white"}
              size={ms(14)}
            />
          </View>
        </Pressable>

        <Pressable style={styles.paginationRight} onPress={handleNext}>
          <View style={styles.PaginationButton}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"white"}
              size={ms(14)}
            />
          </View>
        </Pressable>

        <View style={styles.pagination}>
          {Array.from({ length: brands.length - 2 }, (_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Marques;

const styles = StyleSheet.create({
  brandContent: {
    backgroundColor: colors.secondary,
    borderWidth: ms(2),
    borderRadius: ms(10),
    paddingVertical: ms(4),
    paddingHorizontal: ms(25),
    width: "90%",
    position: "relative",
  },
  paginationLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: ms(40),
    alignItems: "center",
    justifyContent: "center",
  },
  paginationRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: ms(40),
    alignItems: "center",
    justifyContent: "center",
  },
  PaginationButton: {
    backgroundColor: colors.tertiary,
    width: ms(20),
    height: ms(20),
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
  },
  pagination: {
    alignSelf: "center",
    flexDirection: "row",
    gap: ms(1),
  },
  dot: {
    width: ms(10),
    height: ms(10),
    borderRadius: ms(5),
    marginHorizontal: ms(5),
    borderWidth: ms(2),
    borderColor: colors.textColor,
  },
  activeDot: {
    backgroundColor: "black",
  },
  inactiveDot: {
    backgroundColor: "white",
  },
});
