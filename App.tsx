import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/app-text";
import AppSaveView from "./src/components/app-save-view";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/font/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./src/assets/font/Nunito-Regular.ttf"),
  });
  if (!fontLoaded) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <FlashMessage position={"top"} />
            {/* <SignInPage /> */}
            <MainAppStack />
          </NavigationContainer>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
