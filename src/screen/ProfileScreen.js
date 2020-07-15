import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../utils/colors";
import { width } from "../utils/dimension";
import { connect } from "react-redux";
import { getProfile, signout } from "../redux/actions/usersAction";
import HeaderProfile from "../component/HeaderProfile";
import Button from "../component/Button";
import ContentProfile from "../component/ContentProfile";

function ProfileScreen(props) {
  console.log("ProfileScreen props", props);
  const { getProfile, profile, signout } = props;
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {profile && profile.id && (
        <React.Fragment>
          <HeaderProfile name={profile.name} email={profile.email} />
          <ContentProfile roles={profile.roles} stores={profile.stores} />
        </React.Fragment>
      )}
      <Button value="Sign Out" onPress={() => signout()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.blue,
    width: width,
    height: 200,
  },
});

const mapStateToProps = ({ users }) => ({ profile: users.profile });
const mapDispatchToProps = { getProfile, signout };
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
