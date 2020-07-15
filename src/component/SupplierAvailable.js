import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import { color } from "react-native-reanimated";

function SupplierAvailable({ supplier }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Supplier Available</Text>
      <Text style={styles.subHeading}>{supplier.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueSoft,
    padding: 7,
    width: "50%",
    borderRadius: 5,
  },
  heading: {
    fontSize: 12,
  },
  subHeading: {
    fontSize: 12,
    color: colors.grey,
  },
});

export default SupplierAvailable;
