import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/app-save-view";
import {
  commonStyle,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/app-text";
import AppTextInput from "../../components/app-text-input";
import AppButton from "../../components/app-button";
import { IS_Android, IS_IOS } from "../../constants";
import AppTextInputController from "../../components/app-text-input-controller";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../store/reducers/cartSlice";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  fullName: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  phoneNumber: yup
    .string()
    .required("phoneNumber is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone number be at least 10 characters"),
  detailedAddress: yup
    .string()
    .required("Address is required")
    .min(15, "Please provide a detailed address with at least 15 characters"),
});

const CheckoutPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const saveOrder = (formData: FormData) => {
    console.log(formData);
    navigation.goBack();
    dispatch(emptyCart());
  };
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            placeholder="Full Name"
            control={control}
            name="fullName"
          />
          <AppTextInputController
            placeholder="Phone Number"
            control={control}
            name="phoneNumber"
          />
          <AppTextInputController
            placeholder="Detailed Address"
            control={control}
            name="detailedAddress"
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </AppSaveView>
  );
};

export default CheckoutPage;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyle.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_Android ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
