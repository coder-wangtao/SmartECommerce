import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/app-save-view";
import HomeHeader from "../../components/home-header";
import ProductCard from "../../components/product-card";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/product";
import { s, vs } from "react-native-size-matters";

const HomePage = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCartPress={() => {}}
          />
        )}
        columnWrapperStyle={{
          //numColumns>1时生成的多项目行的可选自定义样式
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
        contentContainerStyle={{
          paddingTop: vs(10),
          paddingHorizontal: s(10),
        }}
      />
    </AppSaveView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
