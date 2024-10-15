/** @format */

import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Text, Pressable } from "react-native";
import { ms } from "react-native-size-matters";
import {
  Input,
  OperationTitle,
  SecondaryBody,
  BackButton,
  ValidationButton,
  ProviderAuth,
} from "../../components";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { colors } from "../../globals/colors";

interface LoginProps {
  navigation: any;
}

interface LoginFormData {
  email: string;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const actualWidth = width - ms(40);
  const { control, handleSubmit, reset } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
    setTimeout(() => {
      reset();
    }, 50);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "relative",
          width: actualWidth,
          alignItems: "center",
        }}
      >
        {/* Back button */}
        <BackButton onPress={() => navigation.goBack()} />

        {/* Title et Image */}
        <OperationTitle title={"Authentification"} />

        {/* Corps pour l'authentification */}
        <SecondaryBody>
          <View>
            <Input
              label={"Email"}
              binding={true}
              placeholder={"Ex:(kaoutar@gmail.com)"}
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
              label={"Mot de passe"}
              binding={true}
              placeholder={"Ex:(Yasmine123)"}
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

            <Pressable
              style={{ marginTop: ms(3) }}
              onPress={() =>
                navigation.navigate("AuthStack", {
                  screen: "PasswordRecovery",
                })
              }
            >
              <Text style={styles.forgetPassword}>Mot de passe oublié</Text>
            </Pressable>

            <ValidationButton
              text={"S'authentifier"}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />

            <Text style={styles.redirectText}>
              Vous n'avez pas de compte ?{" "}
              <Text style={styles.RedirecthighlightedText}>Inscrivez-vous</Text>
            </Text>

            <ProviderAuth />
          </View>
        </SecondaryBody>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    padding: ms(10),
    borderRadius: ms(5),
    borderWidth: ms(1),
  },
  errorText: {
    color: "red",
    fontSize: ms(12),
    marginTop: ms(5),
  },
  button: {
    backgroundColor: "#007AFF",
    padding: ms(10),
    borderRadius: ms(5),
    marginTop: ms(10),
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: ms(16),
    fontWeight: "bold",
  },
  forgetPassword: {
    fontSize: ms(11),
    fontFamily: "Inter-Medium",
  },
  redirectText: {
    textAlign: "center",
    marginTop: ms(17),
    fontFamily: "Inter-SemiBold",
    fontSize: ms(12),
  },
  RedirecthighlightedText: {
    color: colors.accentTertiary,
  },
});
