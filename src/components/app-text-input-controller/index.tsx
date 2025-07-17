import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInput from "../app-text-input";

const AppTextInputController = ({
  control,
  name,
  rules,
  placeholder,
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AppTextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      )}
    ></Controller>
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({});
