/** @format */

import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProviderAuth: React.FC = () => {
  const [userInfo, setUserInfo] = useState(null);

  // Google Sign in
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "217146752812-f826cq3bt93ktlhlu14tdd31fvl1t8f8.apps.googleusercontent.com",
    iosClientId:
      "217146752812-fhj4jvhnks99246mm87mii00j7cmlvvo.apps.googleusercontent.com",
  });
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const startGoogleAuth = async () => {
    if (isAuthenticating) return;
    setIsAuthenticating(true);
    await promptAsync();
  };

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
    setIsAuthenticating(false);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.error("Voici les erreurs", error);
    }
  };

  // Facebook Sign in

  return (
    <View style={styles.container}>
      {/* Google */}
      <Pressable
        style={styles.providerButton}
        onPress={startGoogleAuth}
        disabled={isAuthenticating}
      >
        <Image
          source={require("../../assets/google-icon.png")}
          style={styles.providerIcon}
        />
        <Text style={styles.providerText}>Continuer avec Google</Text>
      </Pressable>

      {/* Facebook */}
      <Pressable style={styles.providerButton}>
        <Image
          source={require("../../assets/facebook-icon.png")}
          style={styles.providerIcon}
        />
        <Text style={styles.providerText}>Continuer avec Facebook</Text>
      </Pressable>

      <Text style={{ fontSize: ms(12) }}>{JSON.stringify(userInfo)}</Text>
    </View>
  );
};

export default ProviderAuth;

const styles = StyleSheet.create({
  container: {
    gap: ms(10),
    marginTop: ms(20),
  },
  providerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: ms(7),
    paddingVertical: ms(10),
    paddingHorizontal: ms(5),
    width: "100%",
    borderWidth: ms(1),
    gap: ms(8),
    borderColor: colors.textColor,
  },
  providerIcon: {
    width: ms(17),
    height: ms(17),
  },
  providerText: {
    fontSize: ms(12),
    fontFamily: "Inter-Medium",
    color: "#333333",
    textAlign: "center",
  },
});
