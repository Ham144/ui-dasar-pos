import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import LibrariesScreen from "../screens/LibrariesScreen";
import CustomsScreen from "../screens/CustomsScreen";
import { CalculatorIcon, ClipboardList, Icon, Star } from "lucide-react-native";

const Tab = createBottomTabNavigator();

const PointOfSaleNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Star size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Libraries"
				component={LibrariesScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<ClipboardList size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Customs"
				component={CustomsScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<CalculatorIcon size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default PointOfSaleNavigator;
