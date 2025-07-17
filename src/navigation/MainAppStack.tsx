import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutPage from "../pages/checkout";
import OrderPage from "../pages/order";

export default function MainAppStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
  );
}
