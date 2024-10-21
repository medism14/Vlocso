/** @format */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
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
import { useSelector } from "react-redux";

interface LoginProps {
  navigation: any;
}

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const { control, handleSubmit, reset } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
    setTimeout(() => {
      reset();
    }, 50);
  };

  const resetToHome = () => {
    navigation.reset({
      routes: [{ name: "BottomBar" }],
    });
  };

  // Récupération de l'utilisateur et de son fournisseur
  const userProvider = useSelector((state: any) => state.auth.userProvider);

  // Pour la récupération du fournisseur et de l'utilisateur
  useEffect(() => {
    if (userProvider) {
      navigation.navigate("Register");
    }
  }, [userProvider]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container]}>
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}
        >
          {/* Back button */}
          <BackButton onPress={resetToHome} />

          {/* Title et Image */}
          <OperationTitle title={"Authentification"} />

          {/* Corps pour l'authentification */}
          <SecondaryBody>
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

            <Pressable
              style={{ marginTop: ms(3) }}
              onPress={() => navigation.navigate("PasswordRecovery")}
            >
              <Text style={styles.forgetPassword}>Mot de passe oublié</Text>
            </Pressable>

            <ValidationButton
              text={"S'authentifier"}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />

            <ProviderAuth />

            <Pressable
              style={styles.changeAuth}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.changeAuthText}>
                Inscrivez-vous gratuitement
              </Text>
            </Pressable>
          </SecondaryBody>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: ms(15),
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
  changeAuth: {
    borderWidth: ms(1),
    borderColor: colors.tertiary,
    borderRadius: ms(5),
    backgroundColor: colors.primary,
    marginTop: ms(30),
    alignItems: "center",
    padding: ms(11),
  },
  changeAuthText: {
    color: colors.textColor,
    fontSize: ms(14),
    fontFamily: "Inter-Bold",
  },
});
