import React, { useState, useCallback } from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { width } from "../utils/dimension";
import colors from "../utils/colors";

function InputText({
  label,
  onChangeText,
  defaultValue,
  secureTextEntry,
  onChangeSecureTextEntry,
  rightIcon,
}) {
  const [background, setBackground] = useState(colors.greyLight);
  const [border, setBorder] = useState(colors.grey);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.textinput,
          {
            backgroundColor: background,
            borderColor: border,
          },
        ]}
        placeholder={label}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setBackground(colors.blueLight), setBorder(colors.blue);
        }}
        onBlur={() => {
          setBackground(colors.greyLight), setBorder(colors.grey);
        }}
      />
      {rightIcon ? (
        <AntDesign
          style={styles.icon}
          name="eyeo"
          size={32}
          color={colors.grey}
          onPress={onChangeSecureTextEntry}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginTop: 15,
    position: "relative",
  },
  label: {
    fontSize: 14,
    marginBottom: 15,
  },
  textinput: {
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 40,
  },
});

export default InputText;
