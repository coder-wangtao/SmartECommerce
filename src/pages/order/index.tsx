import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/app-save-view";
import { FlatList } from "react-native-gesture-handler";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import OrderItem from "../../components/order-item";

const OrderPage = () => {
  const orderData = [
    {
      id: 1,
      data: "2025-01-01",
      totalAmount: 120.5,
      totalPrice: "$150",
    },
    {
      id: 2,
      data: "2025-01-01",
      totalAmount: 120.5,
      totalPrice: "$150",
    },
    {
      id: 3,
      data: "2025-01-01",
      totalAmount: 120.5,
      totalPrice: "$150",
    },
  ];
  return (
    <AppSaveView>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: sharedPaddingHorizontal,
          paddingTop: sharedPaddingHorizontal,
        }}
        data={orderData}
        keyExtractor={(item, index) => item?.id.toString()}
        renderItem={({ item }) => {
          return (
            <OrderItem
              date={item.data}
              totalAmount={item.totalAmount}
              totalPrice={item.totalPrice}
              style={{ marginBottom: 10 }}
            />
          );
        }}
      />
    </AppSaveView>
  );
};

export default OrderPage;

const styles = StyleSheet.create({});
