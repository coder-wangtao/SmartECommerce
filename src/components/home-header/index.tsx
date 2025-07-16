import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import { Image_Url } from "../../constants";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: Image_Url }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: vs(5),
  },
  logo: {
    height: vs(40),
    width: s(40),
    tintColor: AppColors.white,
  },
});
