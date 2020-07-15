import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../utils/dimension";
import colors from "../utils/colors";

function HeaderProfile({ name, email }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerName} testID="HeaderProfileName">
        {name}
      </Text>
      <Text style={styles.headerEmail} testID="HeaderProfileEmail">
        {email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    width: width,
    height: 200,
  },
  headerName: {
    fontSize: 24,
    color: colors.white,
    marginTop: 30,
    marginLeft: 15,
  },
  headerEmail: {
    fontSize: 14,
    color: colors.white,
    marginTop: 15,
    marginLeft: 15,
  },
});

export default HeaderProfile;
