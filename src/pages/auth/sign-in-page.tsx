import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppSaveView from "../../components/app-save-view";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import { Image_Url } from "../../constants";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/app-text-input";
import AppText from "../../components/app-text";
import AppButton from "../../components/app-button";
import { useNavigation } from "@react-navigation/native";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <AppSaveView style={styles.container}>
      <Image
        source={{ uri: Image_Url }}
        style={styles.logo}
        resizeMode="contain"
      />
      <AppTextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Login"
        onPress={() => {
          navigation.navigate("MainAppBottomTabs");
        }}
      />
      <AppButton
        title="Sign Up"
        onPress={() => {
          navigation.navigate("SignUpPage");
        }}
        textColor={AppColors.primary}
        style={styles.registerButton}
      />
    </AppSaveView>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
    backgroundColor: AppColors.white,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
