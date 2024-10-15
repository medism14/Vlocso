import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, { useRef, useEffect, useState, useCallback } from "react";
import ImgPresSliderItem from "./ImgPresSliderItem";
import { colors } from "../../../globals/colors";
import { ms } from "react-native-size-matters";

interface SlideItem {
  id: number;
  image: any; 
  text: string;
}

const data: SlideItem[] = [
  {
    id: 1,
    image: require("../../../assets/voiture.jpeg"),
    text: "Accédez facilement à notre catalogue de voiture incroyable",
  },
  {
    id: 2,
    image: require("../../../assets/ducatiPres.png"),
    text: "Explorez aisément notre sélection exceptionnelle de motos",
  },
];

const ImgPresSlider: React.FC = () => {
  const flatListRef = useRef<FlatList<SlideItem> | null>(null);
  const indexRef = useRef<number>(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Pour changer de slide
  const changementSlides = (): void => {
    if (indexRef.current >= data.length - 1) {
      indexRef.current = 0;
    } else {
      indexRef.current++;
    }

    flatListRef.current?.scrollToIndex({
      index: indexRef.current,
      animated: true,
    });
  };

  const AutoScrollingSlides = (time: number): void => {
    intervalIdRef.current = setInterval(() => {
      changementSlides();
    }, time);
  };

  const reset4Seconds = (): void => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    AutoScrollingSlides(5000);
  };

  useEffect(() => {
    AutoScrollingSlides(5000);

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
      reset4Seconds()
    }
  }, []);

  // const handleNext = (): void => {
  //   changementSlides();
  //   if (intervalIdRef.current) clearInterval(intervalIdRef.current);

  //   setTimeout(() => {
  //     reset4Seconds();
  //   }, 3000);
  // };

  // const handleBack = (): void => {
  //   changementSlides();
  //   if (intervalIdRef.current) clearInterval(intervalIdRef.current);

  //   setTimeout(() => {
  //     reset4Seconds();
  //   }, 3000);
  // };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item }) => (
          <ImgPresSliderItem
            item={item}
          />
        )}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.pagination}>
        <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
      </View>
    </View>
  );
};

export default ImgPresSlider;

const styles = StyleSheet.create({
  container: {
    gap: ms(5),
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