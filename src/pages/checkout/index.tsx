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

const CheckoutPage = () => {
  const { control, handleSubmit } = useForm({});

  const saveOrder = (formData) => {
    console.log(formData);
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
