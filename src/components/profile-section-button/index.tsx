import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppText from "../app-text";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { MaterialIcons } from "@expo/vector-icons";
const ProfileSectionButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
      </View>
      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColors.medGray}
        ></MaterialIcons>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: AppColors.lightGray,
    borderBottomWidth: 1,
    paddingBottom: vs(10),
    marginTop: vs(14),
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: s(8),
  },
  textTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Regular,
    color: AppColors.primary,
  },
});
