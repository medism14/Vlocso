/** @format */

import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  label: string;
  binding: boolean;
  placeholder: string;
  icon: any;
  secure?: boolean;
  marginTop?: boolean;
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
}

const Input: React.FC<InputProps> = ({
  label,
  binding,
  placeholder,
  icon,
  secure = false,
  marginTop = true,
  control,
  name,
  rules = {},
}) => {
  const [displaySecure, setDisplaySecure] = useState(secure);

  return (
    <View style={marginTop && { marginTop: ms(20) }}>
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
              <TextInput
                style={[styles.input, error && styles.inputError]}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                secureTextEntry={displaySecure}
              />
              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={icon}
                  size={ms(17)}
                  style={{
                    color: value
                      ? "#333333"
                      : Platform.OS == "android"
                      ? "gray"
                      : "#cecece",
                  }}
                />
              </View>

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
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: ms(13.5),
    fontFamily: "Inter-Bold",
    marginBottom: Platform.OS == "ios" ? ms(3) : ms(0),
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
