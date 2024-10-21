/** @format */

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ms } from "react-native-size-matters";
import {
  BackButton,
  Input,
  OperationTitle,
  SecondaryBody,
  ValidationButton,
} from "../../components";
import { faKey } from "@fortawesome/free-solid-svg-icons";

interface PasswordChangeProps {
  navigation: any;
}

interface PasswordChangeFormData {
  password: string;
  passwordConfirmation: string;
}

const PasswordChange: React.FC<PasswordChangeProps> = ({ navigation }) => {
  const { control, handleSubmit, reset, watch } = useForm<PasswordChangeFormData>();

  const password = watch("password");

  const onSubmit: SubmitHandler<PasswordChangeFormData> = (data) => {
    console.log(data);
    setTimeout(() => {
      reset();
    }, 50);
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <BackButton
        title="Revenir à la page de connexion"
        onPress={() => navigation.goBack()}
      />

      {/* Title et Image */}
      <OperationTitle title={"Changement de mot de passe"} />

      <SecondaryBody>
        <Input
          label={"Mot de passe"}
          binding={true}
          placeholder={"Ex: (Yasmine123)"}
          marginTop={false}
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
          text={"S'authentifier"}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </SecondaryBody>
    </View>
  );
};

export default PasswordChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ms(20),
  },
});
