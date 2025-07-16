import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC, ReactNode } from "react";
import { AppColors } from "../../styles/colors";
import { IS_Android } from "../../constants";

interface AppSaveView {
  children: ReactNode;
  style?: ViewStyle;
}
const AppSaveView: FC<AppSaveView> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSaveView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: IS_Android ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
