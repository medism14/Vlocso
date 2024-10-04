/** @format */

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyles from "../../globals/globalStyles";
import React from "react";
import {
  AllMarques,
  Header,
  ImgPresSlider,
  Marques,
  SectionProduct,
} from "../../components";
import { ms } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const recommandationsGenerale = [
  {
    id: 1,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 2,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 3,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 4,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 5,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 6,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 7,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 8,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 9,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 10,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
];

const voitures = [
  {
    id: 1,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 2,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 3,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 4,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 5,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 6,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 7,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 8,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 9,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
  {
    id: 10,
    title: "Ford Mustang GT 2024",
    image: require("../../assets/mustang gt.png"),
    category: "Vente",
    type: "Neuf",
    price: "55 000",
    location: "Corte, Corse",
  },
];

const motos = [
  {
    id: 1,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 2,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 3,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 4,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 5,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 6,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 7,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 8,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 9,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
  {
    id: 10,
    title: "Honda CB 2019",
    image: require("../../assets/motoHarley.png"),
    category: "Location",
    price: "50",
    location: "Corte, Corse",
  },
];

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={globalStyles.pageDefaultStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Englobement de tout le contenu */}
        <View style={{ paddingHorizontal: ms(20) }}>
          {/* l'en-tête */}
          <Header />

          {/* Les images de présentation */}
          <ImgPresSlider />

          {/* L'affichages des marques */}
          <AllMarques />

          {/* Les produits dans recommandations générales */}
          <SectionProduct icon={<FontAwesomeIcon icon={faGlobe} size={ms(22)} />} title={"Récommandation Generale"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  presImg: {
    width: "100%",
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
  },
  presImgblackOverlay: {
    position: "absolute",
    bottom: "0%",
  },
  presImgButtonContainer: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    alignItems: "center",
    zIndex: 15,
  },
  presImgButton: {
    transform: [{ translateX: -25 }],
    bottom: 0,
    backgroundColor: "white",
    paddingVertical: ms(5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ms(15),
    borderRadius: ms(5),
  },
});
