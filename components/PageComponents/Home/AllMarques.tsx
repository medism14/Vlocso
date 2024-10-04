/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Marques from "./Marques";
import { ms } from "react-native-size-matters";

const brandsCars = [
  {
    id: 1,
    title: 'Audi',
    image: require("../../../assets/Audi.png"),
  },
  {
    id: 2,
    title: 'Mercedez',
    image: require("../../../assets/Mercedez.png"),
  },
  {
    id: 3,
    title: 'Ducati',
    image: require("../../../assets/Ducati.png"),
  },
  {
    id: 4,
    title: 'Maybach',
    image: require("../../../assets/maybach.png"),
  },
  {
    id: 5,
    title: 'Suzuki',
    image: require("../../../assets/Suzuki.png"),
  },
  {
    id: 6,
    title: 'Yamaha',
    image: require("../../../assets/Yamaha.png"),
  },
];

const brandsMotos = [
  {
    id: 1,
    title: 'Audi',
    image: require("../../../assets/Audi.png"),
  },
  {
    id: 2,
    title: 'Mercedez',
    image: require("../../../assets/Mercedez.png"),
  },
  {
    id: 3,
    title: 'Ducati',
    image: require("../../../assets/Ducati.png"),
  },
  {
    id: 4,
    title: 'Maybach',
    image: require("../../../assets/maybach.png"),
  },
  {
    id: 5,
    title: 'Suzuki',
    image: require("../../../assets/Suzuki.png"),
  },
  {
    id: 6,
    title: 'Yamaha',
    image: require("../../../assets/Yamaha.png"),
  },
];

const AllMarques: React.FC = () => {

  return (
    <View style={{ marginTop: ms(30), gap: ms(30) }}>
      <Marques brands={brandsCars} title={"Marques de voitures"} position={"left"} />

      <Marques brands={brandsMotos} title={"Marques de motos"} position={"right"}/>
    </View>
  );
};

export default AllMarques;

const styles = StyleSheet.create({});
