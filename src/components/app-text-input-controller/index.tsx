import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import AppTextInput from "../app-text-input";
import { AppColors } from "../../styles/colors";
import AppText from "../app-text";
import { s, vs } from "react-native-size-matters";

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: Object;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}

const AppTextInputController = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  keyboardType,
  secureTextEntry,
}: AppTextInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={error && styles.errorInput}
            secureTextEntry={secureTextEntry}
          />
          {error && <AppText style={styles.textError}>{error.message}</AppText>}
        </>
      )}
    ></Controller>
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  errorInput: {
    borderColor: AppColors.redColor,
  },
  textError: {
    color: AppColors.redColor,
    fontSize: s(12),
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: -vs(5),
  },
});
