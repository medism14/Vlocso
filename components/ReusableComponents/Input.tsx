/** @format */

import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface InputProps {
  label: string;
  binding: boolean;
  placeholder: string;
  icon: any;
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
}

const Input: React.FC<InputProps> = ({
  label,
  binding,
  placeholder,
  icon,
  control,
  name,
  rules = {},
}) => {
  return (
    <View>
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
              />
              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={icon}
                  size={ms(20)}
                  style={{
                    color: value
                      ? "#333333"
                      : Platform.OS == "android"
                      ? "gray"
                      : "#cecece",
                  }}
                />
              </View>
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
    fontSize: ms(14),
    fontFamily: "Inter-SemiBold",
    marginBottom: Platform.OS == "ios" && ms(3),
  },
  input: {
    height: ms(40),
    borderColor: "gray",
    borderWidth: ms(1),
    padding: ms(10),
    backgroundColor: "white",
    fontSize: ms(12),
    borderRadius: ms(7),
    paddingLeft: ms(35),
  },
  iconContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: ms(30),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: ms(12),
    marginTop: ms(5),
  },
});
