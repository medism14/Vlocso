/** @format */

import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ms } from "react-native-size-matters";
import {
  Input,
  OperationTitle,
  SecondaryBody,
  BackButton,
  ValidationButton,
} from "../../components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginProps {
  navigation: any;
}

interface LoginFormData {
  email: string;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const actualWidth = width - ms(40);
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
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
              rules={{
                required: "L'émail est requis",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Votre email n'a pas le bon format",
                },
              }}
            />

            <ValidationButton
              text={"S'authentifier"}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              disabled={Object.keys(errors).length > 0}
            />
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
});
