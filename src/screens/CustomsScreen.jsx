import { Trash2 } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CustomsScreen() {
	// State untuk menyimpan input dan daftar tambahan
	const [inputValue, setInputValue] = useState("");
	const [additionalItems, setAdditionalItems] = useState([]);
	const [total, setTotal] = useState(0);

	// Fungsi untuk menambahkan angka ke input
	const handleButtonPress = (value) => {
		if (value === "C") {
			setInputValue(""); // Clear input
		} else if (value === "del") {
			setInputValue(inputValue.slice(0, -1)); // Menghapus karakter terakhir
		} else if (value === "+") {
			const numericValue = parseFloat(inputValue);
			if (!isNaN(numericValue)) {
				setAdditionalItems([
					...additionalItems,
					{ name: `Item ${additionalItems.length + 1}`, value: numericValue },
				]);
				setTotal(total + numericValue); // Menambahkan ke total
				setInputValue(""); // Reset input setelah menambah
			}
		} else {
			setInputValue(inputValue + value); // Menambahkan angka ke input
		}
	};
	// Fungsi untuk menghapus item
	const handleDeleteItem = (index) => {
		const updatedItems = additionalItems.filter((_, i) => i !== index);
		setAdditionalItems(updatedItems);
		const newTotal = updatedItems.reduce((acc, item) => acc + item.value, 0);
		setTotal(newTotal); // Update total setelah menghapus item
	};

	// Fungsi untuk mengubah nama item
	const handleRenameItem = (index, newName) => {
		const updatedItems = [...additionalItems];
		updatedItems[index].name = newName;
		setAdditionalItems(updatedItems);
	};

	return (
		<View className="flex-1 flex-row">
			{/* Layout Kiri: Tombol Input */}
			<View className="w-1/2 p-4 h-[90%]">
				<View style={{ width: "100%" }} className="mb-4">
					<Text
						style={{ fontSize: 48 }}
						className="text-2xl font-semibold text-end px-4 py-2"
					>
						Rp{inputValue}
					</Text>
				</View>
				<View className="grid grid-cols-3 gap-4 h-full">
					{[
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"0",
						"00",
						"+", // Tombol '+' sekarang sebaris dengan '0' dan '00'
						"C",
						"del", // Tombol 'C' dan 'del' sebaris
					].map((button, index) => (
						<TouchableOpacity
							key={button}
							onPress={() => handleButtonPress(button)}
							className={`${button === "del" ? "bg-red-300" : ""} ${
								button === "+" ? "bg-green-300" : ""
							} bg-gray-200 p-4 flex-1 justify-center items-center`}
						>
							<Text className="text-xl font-semibold">{button}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			{/* Layout Kanan: Daftar Tambahan dan Total */}
			<View className="w-1/2 p-4">
				<Text className="text-2xl font-semibold mb-4">Daftar Tambahan</Text>
				<ScrollView className="space-y-2">
					{additionalItems.length > 0 ? (
						additionalItems.map((item, index) => (
							<View
								key={index}
								className="flex-row justify-between items-center"
							>
								<TextInput
									value={item.name}
									onChangeText={(text) => handleRenameItem(index, text)}
									className="text-lg py-2 px-1 rounded-md mx-2 flex-1"
								/>
								<Text className="text-lg">{item.value.toFixed(2)}</Text>
								<TouchableOpacity
									onPress={() => handleDeleteItem(index)}
									className="ml-2"
								>
									<Trash2 size={24} color="red" />{" "}
									{/* Ikon hapus dari Lucide */}
								</TouchableOpacity>
							</View>
						))
					) : (
						<Text className="text-gray-500">Tidak ada tambahan</Text>
					)}
				</ScrollView>

				<View className="mt-4">
					<Text className="text-xl font-semibold">
						Total Tambahan: {total.toFixed(2)}
					</Text>
				</View>
			</View>
		</View>
	);
}
