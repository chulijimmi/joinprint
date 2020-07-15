import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import { width } from "../utils/dimension";

function StoreAvailable({ stores }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Store Available<Text style={styles.number}>{stores.length}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeSoft,
    padding: 7,
    width: "40%",
    borderRadius: 5,
  },
  heading: {
    fontSize: 12,
  },
  number: {
    fontSize: 24,
    color: colors.orange,
    textAlign: "right",
  },
});

export default StoreAvailable;
