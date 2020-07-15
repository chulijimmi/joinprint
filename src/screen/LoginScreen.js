import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { setUser, loginUser } from "../redux/actions/usersAction";

import Button from "../component/Button";
import Input from "../component/Input";
import logo from "../../assets/logo.png";

function LoginScreen(props) {
  const { loginUser } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>Sign In </Text>
      <Text style={styles.subHeading}>Put your username and password </Text>
      <Input
        label={"Username"}
        defaultValue={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        label={"Password"}
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={secure}
        onChangeSecureTextEntry={() => setSecure(!secure)}
        rightIcon={true}
      />
      <Button value="Sign In" onPress={() => loginUser(username, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 15,
    width: 200,
    height: 43,
  },
  heading: {
    fontSize: 24,
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 15,
  },
});

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = { setUser, loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
