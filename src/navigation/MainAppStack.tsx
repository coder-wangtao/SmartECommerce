import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutPage from "../pages/checkout";
import OrderPage from "../pages/order";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUserData } from "../store/reducers/userSlice";
import { useEffect, useState } from "react";
import { RootState } from "../store";
import { ActivityIndicator, View } from "react-native";
import { AppColors } from "../styles/colors";

const Stack = createStackNavigator();

export default function MainAppStack() {
  const dispatch = useDispatch();
  // const [renderFlag, setRenderFlag] = useState(false);
  const { userData, isLoading } = useSelector(
    (state: RootState) => state.userSlice
  );
  const isUserLoggedIn = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("USER_DATA");
      if (storedUserData) {
        dispatch(setUserData(JSON.parse(storedUserData)));
        // setRenderFlag(true);
      } else {
        dispatch(setLoading(false));
      }
    } catch (err) {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const isEmptyObject = (obj: object) => {
    return Object.keys(obj).length === 0;
  };

  if (isLoading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <ActivityIndicator size={"large"} color={AppColors.primary} />
      </View>
    );
  }

  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          isEmptyObject(userData) ? "AuthStack" : "MainAppBottomTabs"
        }
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
        <Stack.Screen
          name="CheckoutPage"
          options={{ headerShown: true }}
          component={CheckoutPage}
        />
        <Stack.Screen
          name="OrderPage"
          options={{ headerShown: true, title: "My Orders" }}
          component={OrderPage}
        />
      </Stack.Navigator>
    </>
  );
}
