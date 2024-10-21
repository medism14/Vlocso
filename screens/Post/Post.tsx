/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../globals/colors";
import { BackButton, OperationTitle, PostCard } from "../../components";
import { ms } from "react-native-size-matters";
import { faPlus, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Post: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.pageStyle}>
      <BackButton onPress={() => navigation.navigate("Home")} />

      {/* Title et Image */}
      <OperationTitle title={"Mise en ligne d'annonce"} />

      <View style={styles.cardSection}>
        <PostCard
          title="Créer une nouvelle annonce"
          onPress={() => navigation.navigate("NewPost")}
          icon={<FontAwesomeIcon icon={faPlus} size={ms(15)} />}
        />
        <PostCard
          title="Rélancer une annonce"
          onPress={() => console.log("Relancer annonce")}
          icon={<FontAwesomeIcon icon={faRepeat} size={ms(15)} />}
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
  },
  cardSection: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
