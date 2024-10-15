/** @format */

import React from "react";
import { Image, StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../globals/colors";
import type { ImageSourcePropType } from "react-native";

interface ItemProps {
  id: number;
  title: string;
  image: ImageSourcePropType;
  category: string;
  type: string;
  price: string;
  location: string;
  premium: boolean;
}

interface SectionProductItemProps {
  items: ItemProps[];
  widthParent: number;
}

const SectionProductItem: React.FC<SectionProductItemProps> = ({
  items,
  widthParent,
}) => {

  const renderProduct = (item: ItemProps) => (
    <View style={styles.product} key={item.id}>
      <View>
        <Image source={item.image} style={styles.image} accessibilityLabel={item.title} />
        {item.premium && (
          <View style={styles.premium}>
            <FontAwesomeIcon icon={faCrown} size={ms(16)} color="white" />
          </View>
        )}
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.category} numberOfLines={1}>{item.category}</Text>
      </View>

      {item.type && (
        <View style={styles.conditionCard}>
          <Text style={styles.conditionText}>{item.type}</Text>
        </View>
      )}

      <View>
        <Text style={styles.price}>{item.price}€</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </View>
  );

  const renderProductColumn = (startIndex: number) => (
    <View style={styles.productColumn}>
      {items[startIndex] && renderProduct(items[startIndex])}
      {items[startIndex + 1] && renderProduct(items[startIndex + 1])}
      {!items[startIndex] && !items[startIndex + 1] && (
        <Pressable 
          onPress={() => console.log("plus d'annonce pressed")} 
          style={styles.moreAnnonceWrapper}
          accessibilityLabel="Voir plus d'annonce"
          accessibilityRole="button"
        >
          <View style={styles.moreAnnonce}>
            <View style={styles.moreAnnonceContent}>
              <View style={styles.moreAnnoncePlus}>
                <FontAwesomeIcon icon={faPlus} size={ms(26)} />
              </View>
              <Text style={styles.moreAnnonceText}>
                Voir plus d'annonce
              </Text>
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { width: widthParent }]}>
      {renderProductColumn(0)}
      {renderProductColumn(2)}
    </View>
  );
};

export default SectionProductItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: ms(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: ms(15),
  },
  productColumn: {
    width: "48%",
    gap: 20,
    overflow: "hidden",
  },
  product: {
    overflow: "hidden",
    height: Platform.OS === "ios" ? ms(250) : ms(262),
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: ms(150),
    borderRadius: ms(5),
  },
  premium: {
    backgroundColor: colors.accentTertiary,
    paddingVertical: ms(3),
    width: "auto",
    alignSelf: "flex-start",
    position: "absolute",
    right: ms(4),
    top: ms(4),
    borderRadius: ms(6),
    paddingHorizontal: ms(7),
  },
  title: {
    fontFamily: "Inter-Bold",
    color: colors.textColor,
    marginTop: ms(7),
    fontSize: ms(14),
  },
  category: {
    fontFamily: "Inter-SemiBold",
    color: colors.textColor,
    marginTop: Platform.OS === "ios" ? ms(1) : ms(0),
    fontSize: ms(13),
  },
  conditionCard: {
    borderRadius: ms(10),
    borderWidth: ms(2),
    borderColor: colors.textColor,
    alignSelf: "flex-start",
    paddingVertical: Platform.OS === "ios" ? ms(1) : ms(0),
    paddingHorizontal: ms(15),
  },
  conditionText: {
    fontFamily: "Inter-Regular",
    color: colors.textColor,
    fontSize: ms(11),
  },
  price: {
    color: colors.accentTertiary,
    fontFamily: "Inter-SemiBold",
    fontSize: ms(12),
  },
  location: {
    fontFamily: "Inter-Italic",
    color: colors.textOpacity,
    fontSize: ms(12),
  },
  moreAnnonceWrapper: {
    flex: 1,
    width: "100%",
    padding: ms(3), 
  },
  moreAnnonce: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: "center",
    borderRadius: ms(5),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  moreAnnonceContent: {
    gap: 10,
    marginRight: ms(10),
    alignItems: "center",
  },
  moreAnnonceText: {
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    fontSize: ms(20),
    marginHorizontal: ms(10),
  },
  moreAnnoncePlus: {
    backgroundColor: colors.primary,
    width: ms(40),
    height: ms(40),
    borderRadius: ms(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
