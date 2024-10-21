/** @format */

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ms } from "react-native-size-matters";
import {
  BackButton,
  BackFormButton,
  Input,
  OperationTitle,
  ProviderAuth,
  SecondaryBody,
  ValidationButton,
} from "../../components";
import {
  faEnvelope,
  faKey,
  faUser,
  faCakeCandles,
  faCity,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../globals/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setReinitialiseUserProvider } from "../../redux/features/authSlice";

interface RegisterProps {
  navigation: any;
}

interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  number: string;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const { control, handleSubmit, watch, reset, setValue } =
    useForm<RegisterFormData>();

  // Récupération de l'utilisateur et de son fournisseur
  const userProvider = useSelector((state: any) => state.auth.userProvider);
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const totalStep = 2;

  const password = watch("password");

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    if (totalStep == step) {
      console.log(data);
      console.log(userProvider);
    } else {
      setStep((prev) => prev + 1);
      setTimeout(() => {
        reset({}, { keepValues: true });
      }, 50);
    }
  };

  const resetToHome = () => {
    navigation.reset({
      routes: [{ name: "BottomBar" }],
    });
  };

  const goToPreviousStep = () => {
    dispatch(setReinitialiseUserProvider());
    reset({}, { keepValues: true });
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (userProvider) {
      setStep(2);
    }
  }, [userProvider]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container, { paddingVertical: ms(20) }]}>
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}
        >
          {/* Back button */}
          <BackButton onPress={resetToHome} />

          {/* Title et Image */}
          <OperationTitle title={"Inscription"} />

          {/* Corps pour l'authentification */}
          <SecondaryBody step={step} totalStep={totalStep}>
            {step == totalStep && (
              <BackFormButton onPress={() => goToPreviousStep()} />
            )}

            {step == 1 && (
              <>
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
                      message:
                        "Le mot de passe doit au moins contenir 5 caractère",
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
                      message:
                        "Le mot de passe doit au moins contenir 5 caractère",
                    },
                    validate: (value) =>
                      value === password ||
                      "Les mots de passe ne correspondent pas",
                  }}
                />
              </>
            )}

            {step == 2 && (
              <>
                <Input
                  label={"Prenom"}
                  binding={true}
                  placeholder={"Ex: (Chaker)"}
                  icon={faUser}
                  control={control}
                  name="firstName"
                  rules={{
                    required: "Le prénom est réquis",
                    minLength: {
                      value: 2,
                      message: "Un prénom doit au moins avoir deux caractères",
                    },
                  }}
                />

                <Input
                  label={"Nom"}
                  binding={true}
                  placeholder={"Ex: (Yaakoub)"}
                  icon={faUser}
                  control={control}
                  name="lastName"
                  rules={{
                    required: "Le prénom est réquis",
                    minLength: {
                      value: 2,
                      message: "Un nom doit au moins avoir deux caractères",
                    },
                  }}
                />

                <Input
                  label={"Date de naissance"}
                  binding={true}
                  placeholder={"Ex: (20/01/2001)"}
                  icon={faCakeCandles}
                  control={control}
                  setValue={setValue}
                  name="birthDate"
                  type="date"
                  rules={{
                    required: "Le prénom est réquis",
                  }}
                />

                <Input
                  label={"Ville"}
                  binding={true}
                  placeholder={"Ex: (Corte, 20250)"}
                  icon={faCity}
                  control={control}
                  name="city"
                  rules={{
                    required: "La ville est réquise",
                  }}
                />

                <Input
                  label={"Numéro de téléphone"}
                  binding={true}
                  placeholder={"Ex: (0780853613)"}
                  icon={faPhone}
                  control={control}
                  name="phone"
                  rules={{
                    required: "Le prénom est réquis",
                    pattern: {
                      value: /^0[1-9]\d{8}$/,
                      message:
                        "Veuillez respecter le format d'un numéro de téléphone",
                    },
                  }}
                />
              </>
            )}

            <ValidationButton
              text={step == 1 ? "Continuer" : "S'inscrire"}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />

            {step === 1 && (
              <>
                <ProviderAuth />
                <Pressable
                  style={styles.changeAuth}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.changeAuthText}>
                    Connectez-vous facilement
                  </Text>
                </Pressable>
              </>
            )}
          </SecondaryBody>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: ms(15),
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
    fontFamily: "Inter-Bold",
    fontSize: ms(12),
  },
  RedirecthighlightedText: {
    color: colors.accentTertiary,
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
