import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import StoreAvailable from "./StoreAvailable";
import SupplierAvailable from "./SupplierAvailable";

function ListComponent({ data }) {
  const [active, setActive] = useState(false);
  return (
    data && (
      <TouchableOpacity
        style={styles.container}
        onPress={() => setActive(!active)}
      >
        <Text style={styles.heading}>
          {data.nameEng ? data.nameEng : "Unknown"}
        </Text>
        <Text style={styles.unit}>Unit {data.unit}</Text>
        <Text style={styles.unit}>Price {data.defaultPrice}</Text>
        <Text style={styles.unit}>SKU {data.sku}</Text>
        <View style={styles.grid}>
          <StoreAvailable stores={data.stores} />
          <SupplierAvailable supplier={data.supplier} />
        </View>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
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
    marginVertical: 8,
  },
  grid: {
    flexDirection: "row",
    alignContent: "stretch",
    width: "100%",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    color: colors.blue,
  },
  unit: {
    fontSize: 12,
    marginVertical: 10,
  },
});

const ListRaw = React.memo(ListComponent);

export default ListRaw;
