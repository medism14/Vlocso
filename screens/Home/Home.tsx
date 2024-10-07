/** @format */

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Platform,
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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCar,
  faGlobe,
  faMotorcycle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../globals/colors";
import { LinearGradient } from 'expo-linear-gradient';


const recommandationsGenerale = [
  [
    {
      id: 1,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 4,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
  ],
  [
    {
      id: 1,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 4,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
  ],
  [
    {
      id: 9,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 10,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
  ],
];

const voitures = [
  [
    {
      id: 1,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 4,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 5,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 6,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 7,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 8,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 9,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 10,
      title: "Ford Mustang GT 2024",
      image: require("../../assets/ford5.jpeg"),
      category: "Vente",
      type: "Neuf",
      price: "55 000",
      location: "Corte, Corse",
      premium: false,
    },
  ],
];

const motos = [
  [
    {
      id: 1,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 4,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 5,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 6,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
    {
      id: 7,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 8,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 9,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: true,
    },
    {
      id: 10,
      title: "Honda CB 2019",
      image: require("../../assets/motoHarley.png"),
      category: "Location",
      price: "50",
      location: "Corte, Corse",
      premium: false,
    },
  ],
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
          <SectionProduct
            icon={<FontAwesomeIcon icon={faGlobe} size={ms(22)} />}
            title={"Récommandation Generale"}
            elements={recommandationsGenerale}
          />

          {/* Les produits dans recommandations voitures */}
          <SectionProduct
            icon={<FontAwesomeIcon icon={faCar} size={ms(22)} />}
            title={"Récommandation Voitures"}
            elements={voitures}
          />

          {/* Les produits dans recommandations motos */}
          <SectionProduct
            icon={<FontAwesomeIcon icon={faMotorcycle} size={ms(22)} />}
            title={"Récommandation Motos"}
            elements={motos}
          />

          {/* Components pour poster */}
        <View style={styles.bottomPostContainer}>
          <LinearGradient
            colors={['#F0F0F0', '#E0E0E0']}
            style={styles.bottomPostGradient}
          >
            <Text style={styles.bottomPostText}>
              Vendez ou louez dès maintenant
            </Text>

            <Pressable style={styles.bottomPostButton}>
              <Text style={styles.bottomPostButtonText}>
                Déposer une annonce
              </Text>
              <FontAwesomeIcon icon={faPlus} size={ms(15)} color="#FFFFFF" />
            </Pressable>
          </LinearGradient>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomPostContainer: {
    marginVertical: ms(20),
    width: "90%",
    alignSelf: "center",
    borderRadius: ms(15),
    overflow: 'hidden',
    borderWidth: ms(1),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  bottomPostGradient: {
    padding: ms(20),
    alignItems: 'center',
  },
  bottomPostText: {
    fontFamily: "Inter-ExtraBold",
    fontSize: ms(16),
    color: '#333',
    marginBottom: ms(15),
    textAlign: 'center',
  },
  bottomPostButton: {
    backgroundColor: '#2C3E50',
    borderRadius: ms(6),
    paddingVertical: ms(7),
    paddingHorizontal: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomPostButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(13),
    marginRight: ms(8),
  },
});
