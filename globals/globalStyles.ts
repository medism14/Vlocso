import { StyleSheet } from "react-native";
import { moderateScale as ms } from "react-native-size-matters";

export default StyleSheet.create({
  textXs: {
    fontSize: ms(8), 
  },
  textSm: {
    fontSize: ms(10),
  },
  textBase: {
    fontSize: ms(12),
  },
  textLg: {
    fontSize: ms(14), 
  },
  textXl: {
    fontSize: ms(16), 
  },
  text2xl: {
    fontSize: ms(18), 
  },
  text3xl: {
    fontSize: ms(20), 
  },
  text4xl: {
    fontSize: ms(22), 
  },
  pageDefaultStyle: {
    flex: 1,
    backgroundColor: "#fff",
  },
});