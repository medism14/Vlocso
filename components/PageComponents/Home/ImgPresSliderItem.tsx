/** @format */

import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ms } from "react-native-size-matters";
import globalStyles from "../../../globals/globalStyles";
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../../globals/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const adjustedWidth = width - ms(40);

interface ImgPresSliderItemProps {
  item: {
    image: any;
    text: string;
  };
}

type RootStackParamList = {
  Accueil: undefined;
};

const ImgPresSliderItem: React.FC<ImgPresSliderItemProps> = ({
  item,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ marginTop: ms(30), width: adjustedWidth }}>
      <Image source={item.image} style={styles.presImg} />

      {/* <View style={styles.presImgButtonNextBack}>
        <Pressable onPress={handleBack} style={styles.presImgPressButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={ms(14)} />
        </Pressable>

        <Pressable onPress={handleNext} style={styles.presImgPressButton}>
          <FontAwesomeIcon icon={faChevronRight} size={ms(14)} />
        </Pressable>
      </View> */}

      <View style={styles.imgPresTextContainer}>
        <Text style={styles.imgPresText}>
          {item.text}
        </Text>
      </View>

      <View style={styles.presImgButtonContainer}>
        <TouchableOpacity
          onPress={() => console.log("touched")}
          style={styles.presImgButton}
        >
          <Text style={{ fontFamily: "Inter-SemiBold", fontSize: ms(12) }}>
            Acheter ou louer dès maintenant
          </Text>
          <FontAwesomeIcon icon={faAngleRight} />
        </TouchableOpacity>
      </View>

      <View style={styles.presImgBlackOverlay} />
    </View>
  );
};

export default ImgPresSliderItem;

const styles = StyleSheet.create({
  presImg: {
    width: adjustedWidth,
    height: hp(20),
    marginHorizontal: "auto",
    borderRadius: ms(10),
    position: "relative",
  },
  presImgBlackOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: ms(10),
  },
  imgPresTextContainer: {
    position: "absolute",
    transform: [{ translateY: 25 }],
    bottom: "50%",
    width: "100%",
    alignItems: "center",
    zIndex: 20,
  },
  imgPresText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Inter-Black",
    marginHorizontal: ms(10),
    fontSize: ms(18),
  },
  presImgButtonContainer: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    alignItems: "center",
    zIndex: 15,
  },
  presImgButton: {
    backgroundColor: "white",
    paddingVertical: ms(5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ms(15),
    borderRadius: ms(5),
  },
  presImgButtonNextBack: {
    flexDirection: "row",
    zIndex: 30,
    position: "absolute",
    top: 0,
    right: 0,
  },
  presImgPressButton: {
    paddingHorizontal: ms(10),
    paddingVertical: ms(3),
    backgroundColor: colors.secondary,
    borderRadius: ms(3),
    borderWidth: ms(1),
  },
});
