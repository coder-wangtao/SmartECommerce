import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignInPage from "../pages/auth/sign-in-page";
import SignUpPage from "../pages/auth/sign-up-page";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInPage" component={SignInPage}></Stack.Screen>
      <Stack.Screen name="SignUpPage" component={SignUpPage}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
