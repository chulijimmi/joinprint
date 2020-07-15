import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import colors from "../utils/colors";
import { connect } from "react-redux";
import ListRaw from "../component/ListRaw";

function RawScreen(props) {
  const { raw } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Your total request {raw.length} </Text>
      </View>
      <FlatList
        data={raw}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListRaw data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    backgroundColor: colors.blue,
  },
  heading: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
  },
});

const mapStateToProps = ({ materials }) => ({ raw: materials.raw });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RawScreen);
