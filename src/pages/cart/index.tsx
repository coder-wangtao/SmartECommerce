import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/home-header";
import AppSaveView from "../../components/app-save-view";
import EmptyCart from "../../components/empty-cart";
import CartItem from "../../components/cart-item";

const CartPage = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <CartItem />
    </AppSaveView>
  );
};

export default CartPage;

const styles = StyleSheet.create({});
