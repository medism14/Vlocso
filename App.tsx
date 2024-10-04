/** @format */

import * as SplashScreen from "expo-splash-screen";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import globalStyle from "./globals/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigator from "./navigation/StackNavigator";

SplashScreen.preventAutoHideAsync();

interface AppProps {
  route?: any;
}

export default function App({ route }: AppProps) {
  const [fontsLoaded] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-BlackItalic": require("./assets/fonts/Inter-BlackItalic.ttf"),
    "Inter-ExtraBoldItalic": require("./assets/fonts/Inter-ExtraBoldItalic.ttf"),
    "Inter-ExtraLightItalic": require("./assets/fonts/Inter-ExtraLightItalic.ttf"),
    "Inter-LightItalic": require("./assets/fonts/Inter-LightItalic.ttf"),
    "Inter-MediumItalic": require("./assets/fonts/Inter-MediumItalic.ttf"),
    "Inter-SemiBoldItalic": require("./assets/fonts/Inter-SemiBoldItalic.ttf"),
    "Inter-ThinItalic": require("./assets/fonts/Inter-ThinItalic.ttf"),
    "Inter-BoldItalic": require("./assets/fonts/Inter-BoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.chargingContainer}>
        <Image
          source={require("./assets/charging4.gif")}
          style={{ width: wp("100%"), height: hp("100%") }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <StackNavigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chargingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pageContainer: {
    flex: 1,
  },
});