import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/app-save-view";
import HomeHeader from "../../components/home-header";
import ProfileSectionButton from "../../components/profile-section-button";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/app-text";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = () => {
  const navigation = useNavigation();
  return (
    <AppSaveView>
      <HomeHeader />
      <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello,wangtao
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title={"My Order"}
          onPress={() => navigation.navigate("OrderPage")}
        />
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"Logout"} />
      </View>
    </AppSaveView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
