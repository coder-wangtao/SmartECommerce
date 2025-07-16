import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import ProfilePage from "../pages/profile";
import { AppColors } from "../styles/colors";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { IS_Android } from "../constants";
export default function MainAppBottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarLabelStyle: {
          marginTop: vs(4),
          fontSize: s(12),
        },
        tabBarStyle: IS_Android && {
          height: vs(50),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="cart" size={size} color={color} />;
          },
          title: "Cart",
        }}
        component={CartPage}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
          title: "Profile",
        }}
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
