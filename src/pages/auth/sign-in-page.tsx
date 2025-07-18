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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/app-text-input-controller";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password number be at least 6 characters"),
});

const SignInPage = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onLoginPress = async (data: FormData) => {
    try {
      // const userCredential = await signInWithEmailAndPassword(
      //   auth,
      //   data.email,
      //   data.password
      // );
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
      <AppButton title="Login" onPress={handleSubmit(onLoginPress)} />
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
