/** @format */

import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Modal, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationProp } from "@react-navigation/native";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBullhorn,
  faCamera,
  faCrown,
  faHistory,
  faInfoCircle,
  faLock,
  faMoneyBillWave,
  faSignOutAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { SectionProfil } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profil: React.FC<ProfileProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(require("../../assets/userIcon.png"));
  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector((state: any) => state.auth.userLogin);

  const handleModifyImage = () => {
    console.log("loup");
    setImage(require("../../assets/yaakoub.png"));
    setModalVisible(false);
  };

  const handleRemoveImage = () => {
    setImage(require("../../assets/userIcon.png"));
    setModalVisible(false);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={styles.modalOverlay}
          onTouchEnd={() => setModalVisible(false)}
        >
          <View
            style={styles.modalBody}
            onTouchEnd={(event) => event.stopPropagation()}
          >
            <Pressable
              style={{
                backgroundColor: colors.textColor,
                borderRadius: ms(2),
                alignSelf: "flex-end",
              }}
              onPress={() => setModalVisible(false)}
            >
              <FontAwesomeIcon icon={faTimes} size={ms(24)} color="white" />
            </Pressable>

            <View style={{ marginTop: ms(20), gap: ms(10) }}>
              <Pressable
                style={[styles.addButtonModal, styles.buttonModal]}
                onPress={() => handleModifyImage()}
              >
                <Text style={styles.addButtonModalText}>
                  Télécharger depuis l'appareil
                </Text>
              </Pressable>

              {image != require("../../assets/userIcon.png") && (
                <Pressable
                  style={[styles.removeButtonModal, styles.buttonModal]}
                  onPress={handleRemoveImage}
                >
                  <Text style={styles.removeButtonModalText}>Retirer</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Modal>

      <View style={[styles.container]}>
        {/* L'information de l'utilisateur */}
        <View style={styles.userInfo}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.userImage}
          >
            <Image source={image} style={styles.userInfoImage} />

            <Pressable
              onPress={() => setModalVisible(true)}
              style={styles.cameraContainer}
            >
              <FontAwesomeIcon icon={faCamera} size={ms(18)} color={"white"} />
            </Pressable>
          </Pressable>

          <Text style={styles.userInfoName}>Chaker Yaakoub</Text>

          <Text style={styles.userInfoText}>
            Ajoutez une photo de profil pour augmenter la confiance d’autres
            utilisateurs
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <SectionProfil
            icon={<FontAwesomeIcon icon={faBullhorn} size={ms(18)} />}
            title={"Mes annonces"}
          />
          <SectionProfil
            icon={<FontAwesomeIcon icon={faHistory} size={ms(18)} />}
            title={"Mon historique"}
          />
          <SectionProfil
            icon={<FontAwesomeIcon icon={faMoneyBillWave} size={ms(18)} />}
            title={"Mes achats"}
          />
          <SectionProfil
            icon={<FontAwesomeIcon icon={faCrown} size={ms(18)} />}
            title={"Mise en premium"}
          />
        </View>

        <View style={styles.sectionContainer}>
          <SectionProfil
            onPress={() => navigation.navigate("ProfilInformations")}
            icon={<FontAwesomeIcon icon={faInfoCircle} size={ms(18)} />}
            title={"Informations générales"}
          />
          <SectionProfil
            onPress={() => navigation.navigate("ProfilPassword")}
            icon={<FontAwesomeIcon icon={faLock} size={ms(18)} />}
            title={"Mot de passe"}
          />
          <SectionProfil
            icon={<FontAwesomeIcon icon={faSignOutAlt} size={ms(18)} />}
            title={"Deconnexion"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: ms(10),
    paddingBottom: ms(20),
  },
  userInfo: {
    alignItems: "center",
    marginTop: ms(20),
    gap: ms(8),
  },
  userInfoImage: {
    width: wp(40),
    borderRadius: wp(20),
    height: undefined,
    aspectRatio: 1,
  },
  userInfoName: {
    fontSize: ms(20),
    fontFamily: "Inter-Bold",
  },
  userInfoText: {
    fontSize: ms(12),
    fontFamily: "Inter-Italic",
    textAlign: "center",
  },
  sectionContainer: {
    backgroundColor: "white",
    paddingVertical: ms(20),
    marginTop: ms(20),
    paddingHorizontal: ms(30),
    borderRadius: ms(10),
    gap: ms(25),
  },
  cameraContainer: {
    backgroundColor: colors.textColor,
    paddingVertical: ms(4),
    paddingHorizontal: ms(6),
    borderRadius: ms(5),
    position: "absolute",
    bottom: wp(20) / 8,
    right: wp(20) / 8,
  },
  userImage: {
    borderRadius: wp(20),
    width: wp(40),
    height: wp(40),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: colors.textColor,
        shadowOffset: { width: ms(0), height: ms(0) },
        shadowOpacity: ms(0.5),
        shadowRadius: ms(5),
      },
      android: {
        elevation: ms(5),
      }
    }),
  },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalBody: {
    backgroundColor: "white",
    paddingVertical: ms(15),
    paddingHorizontal: ms(20),
    borderRadius: ms(7),
    width: wp(80),
  },
  buttonModal: {
    padding: ms(12),
    borderWidth: ms(3),
    borderRadius: ms(10),
    alignItems: "center",
  },
  addButtonModal: {
    borderColor: colors.tertiary,
  },
  addButtonModalText: {
    color: colors.tertiary,
    fontSize: ms(14),
    fontFamily: "Inter-Bold",
  },
  removeButtonModal: {
    borderColor: colors.accentRed,
  },
  removeButtonModalText: {
    color: colors.accentRed,
    fontSize: ms(14),
    fontFamily: "Inter-Bold",
  },
});
