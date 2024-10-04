/** @format */

import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faPlusCircle,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  AnnounceCreate,
  AnnounceDetails,
  AnnounceEdit,
  CGU,
  Home,
  Login,
  Messages,
  PasswordChange,
  PasswordRecovery,
  Post,
  PremiumSubscription,
  Profil,
  Register,
  Search,
} from "../screens";
import { TabBar } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomBar: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: "Recherche",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faSearch} color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PostStack"
        component={PostStack}
        options={{
          tabBarLabel: "Poster",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faPlusCircle} color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MessagesStack"
        component={MessagesStack}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faComments} color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfilStack"
        component={ProfilStack}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const PostStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={Post}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MessagesStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfilStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="PasswordChange"
      component={PasswordChange}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="PasswordRecovery"
      component={PasswordRecovery}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomBar"
          component={BottomBar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AnnounceCreate"
          component={AnnounceCreate}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AnnounceDetails"
          component={AnnounceDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AnnounceEdit"
          component={AnnounceEdit}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PremiumSubscription"
          component={PremiumSubscription}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
