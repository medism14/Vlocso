import { Image, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";

interface MarquesItemProps {
  item: {
    image: ImageSourcePropType;
    title: string;
  };
  widthParent: number;
}

const MarquesItem: React.FC<MarquesItemProps> = ({ item, widthParent }) => {

  const pressed = (title: string) => {
    console.log(title);
  }

  return (
    <Pressable onPress={() => pressed(item.title)}  style={[styles.itemContainer, { width: widthParent / 3 }]}>
      <Image source={item.image} style={styles.image} />
    </Pressable>
  );
};

export default MarquesItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: ms(10),
  },
  image: {
    width: "100%",
    height: ms(40), 
    resizeMode: "contain",
  },
});