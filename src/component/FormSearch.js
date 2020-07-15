import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../utils/colors";

function FormSearch({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <View style={styles.container} testID="FormSearch">
      <TextInput
        style={styles.input}
        placeholder="Search name"
        placeholderTextColor={colors.white}
        onChangeText={(text) => {
          setSearchValue(text);
        }}
        value={searchValue}
        onSubmitEditing={() => onSearch(searchValue)}
        returnKeyType={"search"}
        testID="FormSearchTextInput"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.blue,
    padding: 30,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.white,
    color: colors.white,
  },
});

export default FormSearch;
