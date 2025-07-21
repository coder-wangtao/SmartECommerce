import { ActionSheetIOS, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../app-text";
import AppButton from "../app-button";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../radio-with-title";
import { languagesArr } from "../../localization/languagesList";
import i18n from "../../localization/i18n";

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const onLanguagePress = (code: string) => {
    setSelectedLang(code);
  };

  const handleConfirm = () => {
    SheetManager.hide("LANG_SHEET");
    i18n.changeLanguage(selectedLang);
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.appText}>Change Language</AppText>
        {languagesArr.map((lang) => {
          return (
            <RadioWithTitle
              key={lang.code}
              title={lang.label}
              selected={selectedLang === lang.code}
              onPress={() => onLanguagePress(lang.code)}
            />
          );
        })}
        <AppButton title="Confirm" onPress={handleConfirm}></AppButton>
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
  appText: {
    marginBottom: vs(20),
    textAlign: "center",
  },
});
