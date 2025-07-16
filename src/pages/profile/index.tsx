import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/app-save-view";
import HomeHeader from "../../components/home-header";

const ProfilePage = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <Text>HomePage</Text>
    </AppSaveView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
