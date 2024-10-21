/** @format */

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  BackButton,
  Input,
  OperationTitle,
  SecondaryBody,
  ValidationButton,
} from "../../components";
import { ms } from "react-native-size-matters";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";

interface PasswordRecoveryProps {
  navigation: any;
}

interface PasswordRecoveryFormData {
  email: string;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ navigation }) => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<PasswordRecoveryFormData> = (data) => {
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
      <OperationTitle title={"Récupération du mot de passe"} />

      <SecondaryBody>
        <Input
          label="Email"
          binding={true}
          placeholder="Ex: (kaoutar@gmail.com)"
          icon={faEnvelope}
          control={control}
          name="email"
          marginTop={false}
          rules={{
            required: "L'émail est requis",
            pattern: {
              value: /\S+@\S+\.\S+$/,
              message: "Votre email n'a pas le bon format",
            },
          }}
        />

        <ValidationButton
          text={"S'authentifier"}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <Pressable onPress={() => navigation.navigate("PasswordChange")}>
          <Text>Go to passwordchange</Text>
        </Pressable>
      </SecondaryBody>
    </View>
  );
};

export default PasswordRecovery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ms(20),
  },
});
