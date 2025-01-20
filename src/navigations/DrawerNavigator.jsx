import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PointOfSaleNavigator from "@/navigations/PointOfSaleNavigator.jsx";
import AktivitasScreen from "@/screens/AktivitasScreen.jsx";
import InventoriScreen from "@/screens/InventoriScreen.jsx";
import PengaturanScreen from "@/screens/pengaturanScreen.jsx";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Point of Sale" component={PointOfSaleNavigator} />
			<Drawer.Screen name="Aktivitas" component={AktivitasScreen} />
			<Drawer.Screen name="Inventori" component={InventoriScreen} />
			<Drawer.Screen name="Pengaturan" component={PengaturanScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
