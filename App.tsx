import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/app-text";
import AppSaveView from "./src/components/app-save-view";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store";
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
      <NavigationContainer>
        <FlashMessage position={"top"} />
        {/* <SignInPage /> */}
        <MainAppStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
