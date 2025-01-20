import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function Layout() {
	return <Stack screenOptions={{ headerShown: false }} />;
}
