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
  faKey,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface ProfilInformationsProps {
  navigation: any;
}

interface ProfilInformationsData {
  password: string;
  passwordConfirmation: string;
}

const ProfilInformations: React.FC<ProfilInformationsProps> = ({
  navigation,
}) => {
  const user = useSelector((state: any) => state.auth.userLogin);
  const { control, handleSubmit, watch } = useForm<ProfilInformationsData>();
  const password = watch("password");

  const onSubmit = (data: ProfilInformationsData) => {
    console.log(data);
  };

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

        <Text style={styles.title}>Mot de passe</Text>

        <View style={styles.forms}>
          <Input
            label={"Mot de passe"}
            binding={true}
            placeholder={"Ex: (Yasmine123)"}
            icon={faKey}
            secure={true}
            control={control}
            name="password"
            rules={{
              required: "Le mot de passe est réquis",
              minLength: {
                value: 5,
                message: "Le mot de passe doit au moins contenir 5 caractère",
              },
            }}
          />

          <Input
            label={"Confirmation du mot de passe"}
            binding={true}
            placeholder={"Ex: (Yasmine123)"}
            icon={faKey}
            secure={true}
            control={control}
            name="passwordConfirmation"
            rules={{
              required: "Le mot de passe est réquis",
              minLength: {
                value: 5,
                message: "Le mot de passe doit au moins contenir 5 caractère",
              },
              validate: (value) =>
                value === password || "Les mots de passe ne correspondent pas",
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
