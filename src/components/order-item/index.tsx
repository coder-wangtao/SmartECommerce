import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import AppText from "../app-text";
import { commonStyle } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import { s } from "react-native-size-matters";

interface OrderItemProps {
  date: string;
  style?: object;
  totalAmount: number;
  totalPrice: string;
}

const OrderItem: FC<OrderItemProps> = ({
  date,
  style,
  totalAmount,
  totalPrice,
}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>Order Details:</AppText>
      <View style={styles.divider} />
      <View style={styles.summaryContainer}>
        <View>
          <AppText>Total Price:{totalPrice}</AppText>
          <AppText>Date:{date}</AppText>
        </View>
        <View style={styles.amountContainer}>
          <AppText style={styles.totalAmount}>
            {Math.abs(totalAmount).toFixed(2)} $
          </AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    ...commonStyle.shadow,
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: s(15),
  },
  title: {
    textTransform: "uppercase",
    fontSize: s(17),
    marginBottom: s(5),
    color: AppColors.primary,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.primary,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  amountContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  totalAmount: {
    color: AppColors.secondaryColor,
  },
  date: {
    color: AppColors.secondaryColor,
  },
});
