import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../app-text";
import { AppColors } from "../../styles/colors";
import { shippingFees, taxes } from "../../constants";

interface ITotalsView {
  itemPrice: number;
  orderTotal: number;
}

const TotalsView: FC<ITotalsView> = ({ itemPrice, orderTotal }) => {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Item Price:</AppText>
        <AppText style={styles.textPrice}>$ {itemPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Taxes:</AppText>
        <AppText style={styles.textPrice}>$ {taxes}</AppText>
      </View>

      <View style={styles.row}>
        <AppText style={styles.textTitle}>Shipping Fee:</AppText>
        <AppText style={styles.textPrice}>$ {shippingFees}</AppText>
      </View>
      <View style={styles.separator}></View>

      <View style={styles.row}>
        <AppText style={styles.textTitle}>Sum:</AppText>
        <AppText style={styles.textPrice}>$ {orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalsView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
