import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";

function ContentProfile({ roles, stores }) {
  return (
    <View style={styles.container} testID="ContentProfile">
      <Text style={styles.heading}>Role Available</Text>
      {roles.map((item) => {
        return (
          <View key={item.id.toString()}>
            <Text style={styles.subHeading} testID="ContentProfileRolesName">
              {item.name}
            </Text>
          </View>
        );
      })}
      <Text style={styles.heading}>Store Available</Text>
      {stores.map((item) => {
        return (
          <View key={item.id.toString()} style={styles.grid}>
            <Text style={styles.subHeading} testID="ContentProfileStoreName">
              {item.name}
            </Text>
            <Text style={styles.text}>Auth Code {item.authCode}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  heading: {
    fontSize: 24,
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 15,
    color: colors.orange,
  },
  text: {
    fontSize: 13,
    marginBottom: 15,
    color: colors.grey,
  },
  grid: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 5,
    padding: 15,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.22,

    elevation: 3,
    marginVertical: 15,
  },
});

export default ContentProfile;
