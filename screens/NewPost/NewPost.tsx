/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";
import {
  BackButton,
  BackFormButton,
  ButtonDelete,
  ButtonEdit,
  Input,
  OperationTitle,
  SecondaryBody,
  ValidationButton,
} from "../../components";
import {
  faBoxes,
  faCalendarAlt,
  faCamera,
  faCity,
  faClipboardList,
  faEnvelope,
  faEuroSign,
  faExchangeAlt,
  faGasPump,
  faGears,
  faLayerGroup,
  faMoneyBill,
  faPhone,
  faPlus,
  faRoad,
  faTachometerAlt,
  faTags,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../globals/colors";

interface NewPostProps {
  navigation: any;
}

interface NewPostData {
  title: string;
  price: number;
  type: string;
  transaction: string;
  condition: string;
  quantity: number;
  city: string;
  mark: string;
  model: string;
  year: string;
  gearbox: string;
  climatisation: string;
  klm_counter: number;
  phoneNumber: string;
  description: string;
  fuelType: string;
  images: string;
}

const typeVehiculeItems = [
  { label: "Voiture", value: "Voiture" },
  { label: "Moto", value: "Moto" },
];

const transactionItems = [
  { label: "Vente", value: "Vente" },
  { label: "Location", value: "Location" },
];

const conditionItems = [
  { label: "Neuf", value: "Neuf" },
  { label: "Occasion", value: "Occasion" },
  { label: "Peu Endommagé", value: "Peu Endommagé" },
];
const typeGearBoxItems = [
  { label: "Manuel", value: "Manuel" },
  { label: "Automatique", value: "Automatique" },
  { label: "Semi-Automatique", value: "Semi-Automatique" },
];

const climatisationItems = [
  { label: "Très bonne état", value: "Très bonne état" },
  { label: "Bonne état", value: "Bonne état" },
  { label: "Moyenne état", value: "Moyenne état" },
  { label: "Mauvaise état", value: "Mauvaise état" },
  { label: "Non fonctionnel", value: "Non fonctionnel" },
];

const fuelTypeItems = [
  { label: "Essence", value: "Essence" },
  { label: "Diesel", value: "Diesel" },
  { label: "Électrique", value: "Électrique" },
  { label: "Hybride", value: "Hybride" },
];

const NewPost: React.FC<NewPostProps> = ({ navigation }) => {
  const [step, setStep] = useState(2);
  const totalStep = 4;
  const { control, handleSubmit, reset, watch, setValue } =
    useForm<NewPostData>();
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState(false);

  const transaction = watch("transaction");

  const onSubmit = (data: NewPostData) => {
    if (step == totalStep) {
      if (images.length == 0) {
        setImageError(true);
      }
      console.log(data);
      console.log(images);
    } else {
      if (step == 1) {
        if (transaction === "location" || !data.quantity) {
          setValue("quantity", 1);
        }
      } else if (step == 2) {
        if (!data.klm_counter) {
          setValue("klm_counter", 0);
        }

        if (!data.phoneNumber) {
          setValue("phoneNumber", "");
        }
      } else if (step == 3) {
        if (!data.description) {
          setValue("description", "");
        }
      }
      setStep(step + 1);
      setTimeout(() => {
        reset({}, { keepValues: true });
      }, 50);
    }
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const handleAddImage = () => {
    if (images.length < 10) {
      setImages((prev) => [...prev, require("../../assets/voiture.jpeg")]);
    }
  };

  const handleEditImage = (indexElement: number) => {
    console.log(indexElement);
  };

  const handleDeleteImage = (indexElement: number) => {
    setImages((prev) => prev.filter((_, index) => index !== indexElement));
  };

  useEffect(() => {
    if (images.length >= 1) {
      setImageError(false);
    }
  }, [imageError, images.length]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.pageStyle}>
        <BackButton onPress={() => navigation.navigate("Home")} />

        <OperationTitle title="Création d'annonce" />

        <SecondaryBody step={step} totalStep={totalStep}>
          {step > 1 && <BackFormButton onPress={() => goToPreviousStep()} />}

          {step == 1 && (
            <>
              <Input
                label={"Titre de votre article"}
                binding={true}
                placeholder={"Ex: (Rolls Royce Phantom)"}
                icon={faEnvelope}
                control={control}
                name="title"
                marginTop={false}
                rules={{
                  required: "Le titre est requis",
                  minLength: {
                    value: 5,
                    message: "Un titre doit avoir minimum 5 caractères",
                  },
                  maxLength: {
                    value: 40,
                    message: "Un titre doit avoir maximum 40 caractères",
                  },
                }}
              />

              <Input
                label={"Prix"}
                binding={true}
                placeholder={"Ex: (50000)"}
                icon={faMoneyBill}
                rightIcon={faEuroSign}
                control={control}
                name="price"
                rules={{
                  required: "Le prix est requis",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Vous devez mettre uniquement des chiffres",
                  },
                  minLength: {
                    value: 2,
                    message: "Le prix doit avoir minimum 2 chiffres",
                  },
                }}
              />

              <Input
                label={"Type de véhicule"}
                binding={true}
                placeholder={"Ex: (Voitures)"}
                icon={faLayerGroup}
                items={typeVehiculeItems}
                type={"select"}
                control={control}
                name="type"
                rules={{
                  required: "Le type de véhicule est requis",
                }}
              />

              <Input
                label={"Type de transaction"}
                binding={true}
                placeholder={"Ex: (Location)"}
                icon={faExchangeAlt}
                items={transactionItems}
                type={"select"}
                control={control}
                name="transaction"
                rules={{
                  required: "Le type de transaction est requis",
                }}
              />

              <Input
                label={"Condition du véhicule"}
                binding={true}
                placeholder={"Ex: (Très bonne état)"}
                icon={faTachometerAlt}
                items={conditionItems}
                type={"select"}
                control={control}
                name="condition"
                rules={{
                  required: "La condition du véhicule est requise",
                }}
              />

              {transaction == "vente" && (
                <Input
                  label={"Quantité"}
                  binding={true}
                  placeholder={"Ex: (1)"}
                  icon={faBoxes}
                  control={control}
                  name="quantity"
                  rules={{
                    required: "La quantité est requise",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Vous devez mettre uniquement des chiffres",
                    },
                  }}
                />
              )}
            </>
          )}

          {step == 2 && (
            <>
              <Input
                label={"Ville"}
                binding={true}
                placeholder={"Ex: (Corte, 20250)"}
                icon={faCity}
                control={control}
                name="city"
                rules={{
                  required: "La ville est requise",
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s-]+,\s?\d{5}$/,
                    message:
                      "Veuillez respecter le format d'une ville et d'un code postal français (Ex: Corte, 20250)",
                  },
                }}
              />

              <Input
                label={"Marque"}
                binding={true}
                placeholder={"Ex: (Ford)"}
                icon={faTags}
                control={control}
                name="mark"
                rules={{
                  required: "La marque est requise",
                  minLength: {
                    value: 2,
                    message: "Une marque doit avoir minimum 2 caractères",
                  },
                }}
              />

              <Input
                label={"Modèle"}
                binding={true}
                placeholder={"Ex: (Mustang GT)"}
                icon={faClipboardList}
                control={control}
                name="model"
                rules={{
                  required: "Le modèle est requis",
                  minLength: {
                    value: 2,
                    message: "Un modèle doit avoir minimum 2 caractères",
                  },
                }}
              />

              <Input
                label={"Année"}
                binding={true}
                placeholder={"Ex: (2024)"}
                icon={faCalendarAlt}
                control={control}
                name="year"
                rules={{
                  required: "L'année est requise",
                  pattern: {
                    value: /^(19|20)\d{2}$/,
                    message: "Veuillez entrer une année valide",
                  },
                }}
              />

              <Input
                label={"Type de carburant"}
                binding={true}
                placeholder={"Ex: (Essence)"}
                icon={faGasPump}
                control={control}
                name="fuelType"
                type="select"
                items={fuelTypeItems}
                rules={{
                  required: "Le type de carburant est requis",
                }}
              />

              <Input
                label={"Type de boîte"}
                binding={true}
                placeholder={"Ex: (Manuel)"}
                icon={faGears}
                control={control}
                name="gearbox"
                type="select"
                items={typeGearBoxItems}
                rules={{
                  required: "Le type de boîte est requis",
                  minLength: {
                    value: 2,
                    message: "Le type de boîte doit avoir minimum 2 caractères",
                  },
                }}
              />

              <Input
                label={"Climatisation"}
                binding={true}
                placeholder={"Ex: (Très bonne état)"}
                icon={faWind}
                control={control}
                name="climatisation"
                type="select"
                items={climatisationItems}
                rules={{
                  required: "La climatisation est requise",
                  minLength: {
                    value: 2,
                    message: "La climatisation doit avoir minimum 2 caractères",
                  },
                }}
              />

              <Input
                label={"Kilométrage"}
                binding={false}
                placeholder={"Ex: (10000)"}
                icon={faRoad}
                control={control}
                name="klm_counter"
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Vous devez mettre uniquement des chiffres",
                  },
                }}
              />

              <Input
                label={"Numéro de téléphone à contacter"}
                binding={false}
                placeholder={"Ex: (0780853613)"}
                icon={faPhone}
                control={control}
                name="phoneNumber"
                rules={{
                  pattern: {
                    value: /^0[1-9]\d{8}$/,
                    message:
                      "Veuillez respecter le format d'un numéro de téléphone",
                  },
                }}
              />
            </>
          )}

          {step == 3 && (
            <Input
              label={"Description"}
              binding={false}
              placeholder={"Ajoutez une description à votre annonce"}
              icon={faEnvelope}
              control={control}
              name="description"
              multiline={true}
            />
          )}

          {step == 4 && (
            <>
              <Text style={styles.imageSectionTitle}>
                Ajoutez une nouvelle images en cliquant sur le bouton ci-dessous
              </Text>
              <Text style={styles.imageSectionSubTitle}>
                PS: La première image est celle qui doit donner le plus
                d’impression
              </Text>

              <Pressable
                style={styles.imageIconContainer}
                onPress={handleAddImage}
              >
                <FontAwesomeIcon icon={faCamera} size={ms(50)} />
                <FontAwesomeIcon
                  icon={faPlus}
                  size={ms(20)}
                  style={styles.plusIcon}
                />
              </Pressable>

              <Text style={styles.numberImage}>{images.length}/10</Text>

              {imageError && (
                <Text style={styles.errorImage}>
                  Veuillez ajouter au moins une image
                </Text>
              )}

              {/* Display des images */}
              {images.length >= 1 && (
                <View
                  style={{
                    alignItems: "center",
                    gap: ms(30),
                    marginTop: ms(20),
                    marginBottom: ms(30),
                  }}
                >
                  {images.map((image, index) => (
                    <View
                      key={index}
                      style={{
                        backgroundColor: colors.primary,
                        borderRadius: ms(15),
                        padding: ms(20),
                      }}
                    >
                      <Image
                        source={image}
                        style={{ width: ms(300), height: ms(120) }}
                        resizeMode="contain"
                      />

                      <ButtonEdit
                        onPress={() => handleEditImage(index)}
                        style={{
                          position: "absolute",
                          bottom: ms(8),
                          left: ms(8),
                        }}
                      />

                      <ButtonDelete
                        onPress={() => handleDeleteImage(index)}
                        style={{
                          position: "absolute",
                          bottom: ms(8),
                          right: ms(8),
                        }}
                      />
                    </View>
                  ))}
                </View>
              )}
            </>
          )}

          <ValidationButton
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            text={step == totalStep ? "Poster" : "Continuer"}
          />
        </SecondaryBody>
      </View>
    </ScrollView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: ms(15),
  },
  imageSectionTitle: {
    fontSize: ms(16),
    textDecorationLine: "underline",
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginTop: ms(20),
  },
  imageSectionSubTitle: {
    fontSize: ms(12),
    fontFamily: "Inter-Italic",
    textAlign: "center",
    marginTop: ms(10),
  },
  imageIconContainer: {
    marginTop: ms(10),
    alignSelf: "center",
    backgroundColor: colors.primary,
    width: ms(100),
    height: ms(100),
    borderRadius: ms(50),
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.textColor,
    borderWidth: ms(2),
  },
  plusIcon: {
    position: "absolute",
    top: ms(13),
    right: ms(13),
  },
  numberImage: {
    fontSize: ms(16),
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginTop: ms(20),
  },
  errorImage: {
    color: "red",
    textAlign: "center",
    fontSize: ms(15),
    fontFamily: "Inter-Medium",
    marginTop: ms(20),
    marginBottom: ms(10),
  },
});
