/** @format */

import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Pressable,
  Platform,
  Dimensions,
} from "react-native";
import globalStyles from "../../globals/globalStyles";
import React, { useEffect } from "react";
import {
  AllMarques,
  Header,
  ImgPresSlider,
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
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../redux/features/authSlice";

const recommandationsGenerale = [
  [
    {
      id: 1,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      mark: "Ford",
      premium: true,
    },
    {
      id: 2,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 4,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
  ],
  [
    {
      id: 1,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 4,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
  ],
  [
    {
      id: 9,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 10,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
  ],
];

const voitures = [
  [
    {
      id: 1,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 4,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 5,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 6,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 7,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 8,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 9,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 10,
      title: "Ford Mustang GT 2024",
      images: [require("../../assets/ford5.jpeg")],
      type: "Voiture",
      transaction: "Vente",
      quantity: 4,
      condition: "Neuf",
      price: "55 000",
      city: "Corte, Corse",
      premium: false,
    },
  ],
];

const motos = [
  [
    {
      id: 1,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 2,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 3,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 4,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 5,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 6,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
    {
      id: 7,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 8,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
  ],
  [
    {
      id: 9,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: true,
    },
    {
      id: 10,
      title: "Honda CB 2019",
      images: [require("../../assets/motoHarley.png")],
      type: "Moto",
      transaction: "Location",
      quantity: 1,
      price: "50",
      city: "Corte, Corse",
      premium: false,
    },
  ],
];

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserLogin = async () => {
      const user = await AsyncStorage.getItem("@user");
      if (user) {
        dispatch(setUserLogin(JSON.parse(user)));
      } else {
        const defaultUser = {
          email: "medism@gmail.com",
          password: "medism123",
          firstName: "Mohamed",
          lastName: "Ismael Otban",
          birth: "2000-01-01",
          city: "Djibouti-Ville",
          number: "0780853613",
          profile_picture:
            "https://lh3.googleusercontent.com/pw/AP1GczM9qs6h0JFwsIh_oGPZprLDBbVxdViyqzEodR6PoAgt0gsszE5HgBRZ5w8ttT8DmI64Ih2jZSpdar-Ipww7s2ADDZ_ksK2ke7UwGyMbdNzN5z4iyXkOw6DqfSc5UzIxFMITzvsjPuIscF4E0-UYzzB0bXBmdntuRlRLoLa_wmQUyMnINXCU_vrW8oXvXuOLHuN1Wa0vp6OHx-E_2AlfFJPtzKDTc4oZarHU98-8WP2KzLUT7NYs7ybqovB2BKQ6eCz0yL-iQJuJPVJn4yccGEn7c48yi_nJDV087arvZmjub5E6artdXWdABsWZP7IOK60EmSKSNjPY1kQZWhwW9zRZd63rBiY-CUpHc96DUbgUOlXAxeU1qGjyxNIweuUQIjCJnd2OdadSpNvsZS8Yk5Tx7GX-ue9S8y4bXMjw2J97QRJbAzATfIctbxGtSBYaCZpO-DVQqWnNHskKay3klhXrTb9KKtWAhRZE4kQSz6MbKZJ0cX4XH3SmBvSPOiKU-1ylyNAN66HmtQWo92oUDeaSZUFxVaGK_hDK5ALq6J6X6UbokLEeUt5gt5yxYZN6noiZasVneAYo_MlV7L2jdSk30MPqRZgx8NxBULVoyElO4uCxHQn2M4nTbOJMivKvQZary7wy6azD_jVqBiNitFzo4Ya2VUmuCHFDPmRdvoC9t_0papBSeg2bn2-otL3WiT2KS3u6QlDZsLMVv9X3jXXQUMKQuzlR0cWqSO5wnwJJU-0FpqMUD4wS96oCJ-PO77v-qruSvzEkw0_DZJ62eqLK3v24jBOMCYp2yVVlADwqyz3uPL5yJVw2FurMFdlRkmUdwdVUNrLAPO_L7r5tM6OcmLxcCCq3wjk0KgWu0XEPi3z25YwdY13JYbHSRqugAod77SfGUxASOAF1MdZm-xfFOKeL6jcOp_26Il569rh7Q_U8rDPzpqSojJ-ws7IvjqmicJ1vej57-2mjUfdrvZSYzNB9hYL18w=w413-h508-s-no?authuser=0",
        };
        await AsyncStorage.setItem("@user", JSON.stringify(defaultUser));
        const user = await AsyncStorage.getItem("@user");
        dispatch(setUserLogin(JSON.parse(user)));
      }
    };

    const logoutUser = async () => {
      await AsyncStorage.removeItem("@user");
      dispatch(setUserLogin(null));
    };

    checkUserLogin();
    // logoutUser();
  }, [dispatch]);

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
            icon={
              <FontAwesomeIcon
                icon={faGlobe}
                size={Dimensions.get("window").width > 500 ? ms(22) : ms(16)}
              />
            }
            title={"Récommandation Generale"}
            elements={recommandationsGenerale}
          />

          {/* Les produits dans recommandations voitures */}
          <SectionProduct
            icon={
              <FontAwesomeIcon
                icon={faCar}
                size={Dimensions.get("window").width > 500 ? ms(23) : ms(16)}
              />
            }
            title={"Récommandation Voitures"}
            elements={voitures}
          />

          {/* Les produits dans recommandations motos */}
          <SectionProduct
            icon={
              <FontAwesomeIcon
                icon={faMotorcycle}
                size={Dimensions.get("window").width > 500 ? ms(27) : ms(16)}
              />
            }
            title={"Récommandation Motos"}
            elements={motos}
          />

          {/* Components pour poster */}
          <View style={styles.bottomPostContainer}>
            <LinearGradient
              colors={["#F0F0F0", "#E0E0E0"]}
              style={styles.bottomPostGradient}
            >
              <Text style={styles.bottomPostText}>
                Vendez ou louez dès maintenant
              </Text>

              <Pressable style={styles.bottomPostButton}>
                <Text style={styles.bottomPostButtonText}>
                  Déposer une annonce
                </Text>
                <FontAwesomeIcon icon={faPlus} size={ms(17)} color="#FFFFFF" />
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
    backgroundColor: colors.secondary,
    marginTop: ms(0),
    marginBottom: ms(30),
    width: "90%",
    alignSelf: "center",
    borderRadius: ms(15),
    borderWidth: ms(1),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: ms(0), height: ms(0) },
        shadowOpacity: ms(0.3),
        shadowRadius: ms(8),
      },
      android: {
        elevation: ms(4),
      },
    }),
  },
  bottomPostGradient: {
    borderRadius: ms(15),
    padding: ms(20),
    alignItems: "center",
  },
  bottomPostText: {
    fontFamily: "Inter-ExtraBold",
    fontSize: ms(16),
    color: "#333",
    marginBottom: ms(15),
    textAlign: "center",
  },
  bottomPostButton: {
    backgroundColor: "#2C3E50",
    borderRadius: ms(6),
    paddingVertical: ms(10),
    paddingHorizontal: ms(22),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomPostButtonText: {
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    fontSize: ms(14),
    marginRight: ms(8),
  },
});
