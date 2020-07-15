import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { setUser, getProfile } from "./redux/actions/usersAction";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import RawScreen from "./screen/RawScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="RawScreen"
        component={RawScreen}
        options={{
          title: "Materials",
        }}
      />
    </HomeStack.Navigator>
  );
}

function App(props) {
  console.log("props apps", props);
  const { isLogin } = props;
  useEffect(() => {
    const { setUser, getProfile } = props;
    const retrieveToken = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem("token");
        console.log("token", token);
        if (token !== null && token !== undefined) {
          setUser(token);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    retrieveToken();
  }, []);

  return (
    <NavigationContainer>
      {isLogin ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Profile") {
                iconName = focused ? "profile" : "profile";
              }

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <React.Fragment>
            <Stack.Screen name="Home" component={HomeStackScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </React.Fragment>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = ({ users }) => ({ isLogin: users.isLogin });
const mapDispatchToProps = { setUser, getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(App);
