/** @format */

import {
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import {
  faChevronDown,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "@react-native-community/datetimepicker";
import { colors } from "../../globals/colors";
import { Dropdown } from "react-native-element-dropdown";

// Définition des props pour le composant Input
interface InputProps {
  label: string;
  binding: boolean;
  placeholder: string;
  icon: any;
  rightIcon?: any;
  secure?: boolean;
  marginTop?: boolean;
  setValue?: any;
  type?: string;
  defaultDate?: Date;
  items?: any;
  multiline?: boolean;
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
}

// Composant Input principal
const Input: React.FC<InputProps> = ({
  label,
  binding,
  placeholder,
  icon,
  rightIcon,
  secure = false,
  marginTop = true,
  type = "text",
  setValue,
  defaultDate,
  items,
  multiline = false,
  control,
  name,
  rules = {},
}) => {
  // États pour gérer la visibilité du mot de passe, la date et le sélecteur de date
  const [displaySecure, setDisplaySecure] = useState(secure);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef = useRef(null);

  // Fonction pour basculer l'affichage du sélecteur de date
  const toggleDatePicker = () => {
    Keyboard.dismiss();
    setShowPicker(!showPicker);
  };

  const { width } = Dimensions.get("window");
  const dropdownMaxHeight = width > 500 ? ms(100) : ms(130);

  // Fonction pour gérer le changement de date dans le sélecteur de date
  const onChangeDatePicker = (event: any, selectedDate: Date | undefined) => {
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
      const formattedDate = selectedDate.toISOString().split("T")[0];
      setValue(name, formattedDate);
    }
    setShowPicker(false);
  };

  // Effet pour définir la date par défaut si elle est fournie
  useEffect(() => {
    if (defaultDate) {
      setDate(new Date(defaultDate));
    }

    // if (dropdownRef.current) {
    //   dropdownRef.current.measure((x, y, width, height) => {
    //     console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
    //   });
    // }
  }, [dropdownRef.current]);

  return (
    <View style={marginTop && { marginTop: ms(17) }}>
      <Text style={styles.label}>
        {label}:{binding && <>*</>}
      </Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View style={{ position: "relative" }}>
              {/* Gestion de type d'input */}
              {type === "text" && (
                <TextInput
                  style={[
                    multiline ? styles.inputTextArea : styles.input,
                    error ? styles.inputError : {},
                    rightIcon || secure ? { paddingRight: ms(30) } : {},
                  ]}
                  onChangeText={onChange}
                  value={value}
                  placeholder={placeholder}
                  secureTextEntry={displaySecure}
                  multiline={multiline}
                  numberOfLines={multiline ? 1 : undefined}
                  textAlignVertical="top"
                />
              )}

              {/* pour l'input date */}
              {type === "date" &&
                ((Platform.OS == "ios" && !showPicker) ||
                  Platform.OS == "android") && (
                  <Pressable onPress={toggleDatePicker}>
                    <TextInput
                      style={[
                        styles.input,
                        error && styles.inputError,
                        { color: "black" },
                      ]}
                      value={
                        value ? new Date(value).toLocaleDateString("fr-FR") : ""
                      }
                      placeholder={placeholder}
                      secureTextEntry={displaySecure}
                      editable={false}
                      onPressIn={toggleDatePicker}
                    />
                  </Pressable>
                )}

              {/* Pour l'input select */}
              {type === "select" && (
                <Dropdown
                  ref={dropdownRef}
                  style={[styles.input, error && styles.inputError]}
                  data={items}
                  labelField="label"
                  valueField="value"
                  placeholder={placeholder}
                  placeholderStyle={{
                    color: value
                      ? "#333333"
                      : Platform.OS === "android"
                      ? "gray"
                      : "#bfbebe",
                    fontSize: ms(13),
                  }}
                  itemTextStyle={{
                    fontSize: ms(13),
                    color: colors.textColor,
                  }}
                  selectedTextStyle={{
                    fontSize: ms(13),
                    color: "#333333",
                  }}
                  iconStyle={{
                    width: ms(22),
                    height: ms(22),
                  }}
                  value={selectedValue}
                  onChange={(item) => {
                    setSelectedValue(item.value);
                    onChange(item.value);
                  }}
                  containerStyle={{
                    maxHeight: dropdownMaxHeight,
                  }}
                />
              )}

              {/* Pour afficher la selection de date */}
              {showPicker && (
                <DatePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChangeDatePicker}
                />
              )}

              {/* Affichage de l'icon */}
              {((Platform.OS == "ios" && !showPicker) ||
                Platform.OS == "android") &&
                !multiline && (
                  <View style={[styles.iconContainer]}>
                    <FontAwesomeIcon
                      icon={icon}
                      size={ms(17)}
                      style={{
                        color: value
                          ? "#333333"
                          : Platform.OS === "android"
                          ? "gray"
                          : "#bfbebe",
                      }}
                    />
                  </View>
                )}

              {/* Pour les yeux de mot de passe */}
              {secure && (
                <Pressable
                  style={styles.viewSecureContainer}
                  onPress={() => setDisplaySecure((prev) => !prev)}
                >
                  <FontAwesomeIcon
                    icon={displaySecure ? faEyeSlash : faEye}
                    size={ms(18)}
                    style={{
                      color: "#333333",
                    }}
                  />
                </Pressable>
              )}

              {/* Pour mettre un icon à droite */}
              {rightIcon && (
                <View style={styles.viewSecureContainer}>
                  <FontAwesomeIcon
                    icon={rightIcon}
                    size={ms(17)}
                    style={{
                      color: colors.textColor,
                    }}
                  />
                </View>
              )}

              {/* Pour le défilement (flèche vers le bas) de la date */}
              {type == "date" &&
                ((Platform.OS == "ios" && !showPicker) ||
                  Platform.OS == "android") && (
                  <Pressable
                    style={styles.viewSecureContainer}
                    onPress={toggleDatePicker}
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size={ms(18)}
                      style={{
                        color: "#333333",
                      }}
                    />
                  </Pressable>
                )}
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default Input;

// Styles pour le composant Input
const styles = StyleSheet.create({
  label: {
    fontSize: ms(13.5),
    fontFamily: "Inter-Bold",
    marginBottom: Platform.OS === "ios" ? ms(3) : ms(0),
  },
  input: {
    height: ms(40),
    borderColor: "gray",
    borderWidth: ms(1),
    padding: ms(10),
    backgroundColor: "white",
    fontSize: ms(13),
    borderRadius: ms(7),
    paddingLeft: ms(30),
  },
  inputTextArea: {
    borderColor: "gray",
    borderWidth: ms(1),
    padding: ms(10),
    backgroundColor: "white",
    fontSize: ms(13),
    borderRadius: ms(7),
    height: ms(220),
    textAlignVertical: "top",
  },
  iconContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: ms(25),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: ms(11),
    marginTop: ms(5),
  },
  viewSecureContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: ms(25),
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
