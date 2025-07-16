import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../app-text";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import { AntDesign } from "@expo/vector-icons";
const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{1111}</AppText>
        <AppText style={styles.textPrice}>{22222}</AppText>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.lightGray,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: s(80),
    width: s(80),
    borderRadius: s(5),
  },
  detailsContainer: {
    flex: 3.5,
  },
  textTitle: {
    fontSize: s(14),
    color: AppColors.primary,
    fontFamily: AppFonts.Regular,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
    fontFamily: AppFonts.Bold,
    marginVertical: vs(5),
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  deleteText: {
    marginLeft: s(7),
    fontFamily: AppFonts.Regular,
    color: AppColors.medGray,
    fontSize: s(12),
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});
