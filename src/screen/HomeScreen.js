import React, { useEffect, useCallback, useState } from "react";
import {
  RefreshControl,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {
  getList,
  resetList,
  searchList,
  setTick,
  submitTick,
} from "../redux/actions/materialActions";
import { connect } from "react-redux";
import ListMaterials from "../component/ListMaterials";
import colors from "../utils/colors";
import FormSearch from "../component/FormSearch";
import Button from "../component/Button";

function HomeScreen(props) {
  console.log("props homescreen", props);
  const {
    getList,
    resetList,
    searchList,
    setTick,
    materials,
    submitTick,
    navigation,
  } = props;
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    resetList();
  }, []);

  const getTickTotal = useCallback(() => {
    let res = [];
    materials.data.forEach((element) => {
      if (element.selected === true) {
        res.push(element);
      }
    });
    return res;
  });

  const handleTick = useCallback((item, status) => {
    setTick(item.uuid, status);
  }, []);

  const handleLoadMore = () => {
    getList();
  };

  const handleSearch = (value) => {
    searchList(value);
  };

  const handleRefresh = () => {
    console.log("handleRefresh");
    setRefresh(true);
    resetList();
    setRefresh(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormSearch onSearch={(key) => handleSearch(key)} />
      <FlatList
        data={materials.data}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => handleRefresh()}
          />
        }
        renderItem={({ item }) => (
          <ListMaterials
            data={item}
            onPress={(item, status) => handleTick(item, status)}
          />
        )}
      />
      {materials.loading ? (
        <ActivityIndicator size="small" color={colors.grey} />
      ) : null}
      {getTickTotal().length > 0 ? (
        <Button
          value={"submit "}
          onPress={() => submitTick(getTickTotal(), navigation)}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ materials }) => ({ materials });
const mapDispatchToProps = {
  getList,
  resetList,
  searchList,
  setTick,
  submitTick,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
