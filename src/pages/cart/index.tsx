import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/home-header";
import AppSaveView from "../../components/app-save-view";
import EmptyCart from "../../components/empty-cart";
import CartItem from "../../components/cart-item";
import TotalsView from "../../components/totals-view";
import { products } from "../../data/product";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppButton from "../../components/app-button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/reducers/cartSlice";
import { shippingFees, taxes } from "../../constants";

const CartPage = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalProductPricesSum = items.reduce((acc, item) => acc + item.sum, 0);
  const orderTotal = totalProductPricesSum + shippingFees + taxes;
  return (
    <AppSaveView>
      <HomeHeader />
      {items.length > 0 ? (
        <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <CartItem
                  {...item}
                  price={item.sum}
                  onReducePress={() => dispatch(removeItemFromCart(item))}
                  onDeletePress={() => dispatch(removeProductFromCart(item))}
                  onIncreasePress={() => dispatch(addItemToCart(item))}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
          ></FlatList>
          <TotalsView
            itemPrice={totalProductPricesSum}
            orderTotal={orderTotal}
          />
          <AppButton
            title="Continue"
            onPress={() => navigation.navigate("CheckoutPage")}
          />
        </View>
      ) : (
        <EmptyCart />
      )}
    </AppSaveView>
  );
};

export default CartPage;

const styles = StyleSheet.create({});
