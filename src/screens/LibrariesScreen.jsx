import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RegisterInvoice from "../components/RegisterInvoice";
import { Search } from "lucide-react-native";

const LibrariesScreen = () => {
	// Daftar barang yang tersedia di sisi kiri
	const availableItems = [
		{ id: 1, name: "Barang A", price: 10000 },
		{ id: 2, name: "Barang B", price: 15000 },
		{ id: 3, name: "Barang C", price: 20000 },
		{ id: 4, name: "Barang D", price: 25000 },
		{ id: 5, name: "Barang E", price: 30000 },
	];

	const [searchText, setSearchText] = useState("");

	// Daftar barang yang sudah dipilih
	const [selectedItems, setSelectedItems] = useState([]);

	// Menambahkan item ke daftar barang yang dipilih
	const addItemToBill = (item) => {
		setSelectedItems((prevItems) => [...prevItems, item]);
	};

	// Menghitung total harga barang yang dipilih
	const calculateTotal = () => {
		return selectedItems.reduce((total, item) => total + item.price, 0);
	};

	return (
		<View className="flex-1 bg-white flex-row">
			{/* Left Side */}
			<View className="w-1/2  border-r border-gray-300">
				{/* Items Grid */}
				<View className="flex-row items-center justify-between bg-white rounded-lg px-3  py-2 mb-4">
					<TextInput
						placeholder="Cari Barang..."
						value={searchText}
						onChangeText={(text) => setSearchText(text)}
						className="flex-1 text-gray-800  py-3 border rounded-md px-4"
					/>
					<Search className="ml-2" size={24} />
				</View>
				<ScrollView className="flex-1 px-4 py-3">
					<View className="flex-row flex-wrap justify-between">
						{Array.from({ length: 12 }).map((_, index) => (
							<TouchableOpacity
								key={index}
								className="w-[48%] bg-white shadow-md rounded-lg mb-4"
							>
								<Image
									source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image URL
									className="w-full h-24 rounded-t-lg"
								/>
								<View className="p-2">
									<Text className="text-gray-800 font-semibold">Item Name</Text>
									<Text className="text-gray-600">Rp 50.000</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</View>

			{/* Right Side */}
			<RegisterInvoice />
		</View>
	);
};

export default LibrariesScreen;
