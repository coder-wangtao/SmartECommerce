import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/app-save-view";
import HomeHeader from "../../components/home-header";
import ProfileSectionButton from "../../components/profile-section-button";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/app-text";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language-bottom-sheet";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfilePage = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("USER_DATA");
    navigation.navigate("AuthStack");
  };

  return (
    <AppSaveView>
      <HomeHeader />
      <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        {t("welcome", { userName: "wangtao" })}
      </AppText>
      <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        {t("common.messages.welcome")}
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title={"My Order"}
          onPress={() => navigation.navigate("OrderPage")}
        />
        <ProfileSectionButton
          title={"Language"}
          onPress={() => SheetManager.show("LANG_SHEET")}
        />
        <ProfileSectionButton title={"Logout"} onPress={handleLogout} />
      </View>
      <LanguageBottomSheet />
    </AppSaveView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
