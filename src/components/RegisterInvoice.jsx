import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const RegisterInvoice = () => {
	return (
		<View className="w-1/2 h-full py-4">
			{/* Billing Section */}
			<View className="bg-white w-full h-full px-4 pt-4">
				{/* Header Section */}
				<View className="flex-row justify-between items-center mb-4">
					<Text className="text-base font-bold text-gray-800">
						+ Add Customer
					</Text>
					<Text className="text-sm text-gray-500">Dine In ▼</Text>
				</View>

				{/* Billing Items */}
				<View className="border-t border-b border-gray-300 py-4 mb-4">
					<View className="flex-row justify-between items-center mb-2">
						<Text className="text-sm text-gray-800">
							Toripaitan Ramen Shio x2
						</Text>
						<Text className="text-sm text-gray-800">Rp 112.000</Text>
					</View>
					<View className="flex-row justify-between items-center mb-2">
						<Text className="text-sm text-gray-800">Salmon Ikura</Text>
						<Text className="text-sm text-gray-800">Rp 45.000</Text>
					</View>
					<View className="flex-row justify-between items-center">
						<Text className="text-sm text-gray-500">Discounts</Text>
						<Text className="text-sm text-gray-500">(Rp 5.000)</Text>
					</View>
				</View>

				{/* Subtotals and Charges */}
				<View className="border-b border-gray-300 pb-4 mb-4 flex-1 h-full">
					<View className="flex-row justify-between items-center mb-1">
						<Text className="text-sm text-gray-800">Sub-Total</Text>
						<Text className="text-sm text-gray-800">Rp 152.000</Text>
					</View>
					<View className="flex-row justify-between items-center mb-1">
						<Text className="text-sm text-gray-500">Service Charge (15%)</Text>
						<Text className="text-sm text-gray-500">Rp 22.800</Text>
					</View>
					<View className="flex-row justify-between items-center">
						<Text className="text-sm text-gray-500">Take Away Fee (5%)</Text>
						<Text className="text-sm text-gray-500">Rp 7.600</Text>
					</View>
				</View>

				{/* Total Section */}
				<View className="flex-row justify-between items-center mb-4">
					<Text className="text-base font-bold text-gray-800">Total</Text>
					<Text className="text-base font-bold text-gray-800">Rp 182.400</Text>
				</View>

				{/* Clear Sale Button */}
				<TouchableOpacity className="bg-transparent py-2 mb-4">
					<Text className="text-center text-sm text-gray-500">Clear Sale</Text>
				</TouchableOpacity>

				{/* Action Buttons */}
				<View className="flex-row justify-between">
					<TouchableOpacity className="flex-1 bg-gray-200 rounded-lg py-3 mr-2">
						<Text className="text-center text-sm font-semibold text-gray-700">
							Save Bill
						</Text>
					</TouchableOpacity>
					<TouchableOpacity className="flex-1 bg-gray-200 rounded-lg py-3 mx-2">
						<Text className="text-center text-sm font-semibold text-gray-700">
							Print Bill
						</Text>
					</TouchableOpacity>
				</View>
				<View className="flex-row justify-between mt-2">
					<TouchableOpacity className="flex-1 bg-blue-500 rounded-lg py-3">
						<Text className="text-center text-sm font-semibold text-white">
							Charge Rp 182.400
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default RegisterInvoice;
