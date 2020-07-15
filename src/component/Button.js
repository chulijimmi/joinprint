import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import { width } from "../utils/dimension";

function Button({ value, onPress }) {
  return (
    <View style={styles.container} testID="button">
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text} testID="buttonValue">
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    marginHorizontal: 15,
    margin: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default Button;
