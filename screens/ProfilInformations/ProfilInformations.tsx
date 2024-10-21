/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../globals/colors";
import { ms } from "react-native-size-matters";
import { BackButton, Input, ValidationButton } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  faEnvelope,
  faUser,
  faMapMarkerAlt,
  faPhone,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";

interface ProfilInformationsProps {
  navigation: any;
}

interface ProfilInformationsData {
  email: string;
  firstName: string;
  lastName: string;
  birth: string;
  city: string;
  number: string;
}

const ProfilInformations: React.FC<ProfilInformationsProps> = ({
  navigation,
}) => {
  const user = useSelector((state: any) => state.auth.userLogin);
  const { control, handleSubmit, setValue, reset } = useForm<ProfilInformationsData>();

  const onSubmit = (data: ProfilInformationsData) => {
    console.log(data);
  };

  useEffect(() => {
    reset({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      birth: user.birth,
      city: user.city,
      number: user.number,
    });
  }, [user]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.pageStyle}>
        <BackButton
          onPress={() => navigation.goBack()}
          title="Retour en arrière"
          marginB={ms(0)}
        />

        <Text style={styles.title}>Informations personnels</Text>

        <View style={styles.forms}>
          <Input
            label={"Email"}
            binding={true}
            placeholder={"Ex: (kaoutar@gmail.com)"}
            icon={faEnvelope}
            control={control}
            name="email"
            marginTop={false}
            rules={{
              required: "L'émail est requis",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Votre email n'a pas le bon format",
              },
            }}
          />

          <Input
            label={"Prénom"}
            binding={true}
            placeholder={"Ex: (Kaoutar)"}
            icon={faUser}
            control={control}
            name="firstName"
            rules={{
              required: "Le prénom est requis",
            }}
          />

          <Input
            label={"Nom"}
            binding={true}
            placeholder={"Ex: (Dupont)"}
            icon={faUser}
            control={control}
            name="lastName"
            rules={{
              required: "Le nom est requis",
            }}
          />

          <Input
            label={"Date de naissance"}
            binding={true}
            placeholder={"Ex: (20/01/2001)"}
            icon={faCakeCandles}
            control={control}
            setValue={setValue}
            name="birth"
            type="date"
            defaultDate={user.birth}
            rules={{
              required: "Le prénom est réquis",
            }}
          />

          <Input
            label={"Ville"}
            binding={true}
            placeholder={"Ex: (Paris)"}
            icon={faMapMarkerAlt}
            control={control}
            name="city"
            rules={{
              required: "La ville est requise",
            }}
          />

          <Input
            label={"Numéro de téléphone"}
            binding={true}
            placeholder={"Ex: (0123456789)"}
            icon={faPhone}
            control={control}
            name="number"
            rules={{
              required: "Le numéro de téléphone est requis",
            }}
          />

          <ValidationButton
            text={"Sauvegarder"}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilInformations;

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: ms(15),
    justifyContent: "center",
  },
  title: {
    fontSize: ms(22),
    marginTop: ms(25),
    fontFamily: "Inter-ExtraBold",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  forms: {
    backgroundColor: colors.primary,
    paddingHorizontal: ms(20),
    paddingVertical: ms(30),
    marginTop: ms(20),
    borderRadius: ms(10),
  },
});
