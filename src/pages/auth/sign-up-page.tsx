import { StyleSheet, Text, View, Image, Alert } from "react-native";
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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/app-text-input-controller";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  username: yup
    .string()
    .required("User name is required")
    .min(3, "User name must be at least 3 characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password number must be at least 6 characters"),
});

const SignUpPage = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSignUpPress = async (data: FormData) => {
    try {
      // await createUserWithEmailAndPassword(auth, data.email, data.password);
      Alert.alert("User Created!");
      navigation.navigate("MainAppBottomTabs");
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Wrong Email or Password";
      } else {
        errorMessage = "error";
      }
      showMessage({ type: "danger", message: errorMessage });
    }
  };

  return (
    <AppSaveView style={styles.container}>
      <Image
        source={{ uri: Image_Url }}
        style={styles.logo}
        resizeMode="contain"
      />
      <AppTextInputController
        control={control}
        name="username"
        placeholder="UserName"
      />
      <AppTextInputController
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AppTextInputController
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(onSignUpPress)}
      />
      <AppButton
        title="Go To Sign In"
        onPress={() => {
          navigation.navigate("SignInPage");
        }}
        textColor={AppColors.primary}
        style={styles.signInButton}
      />
    </AppSaveView>
  );
};

export default SignUpPage;

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
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
