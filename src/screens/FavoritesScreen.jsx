import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import RegisterInvoice from "../components/RegisterInvoice";

const FavoritesScreen = () => {
	return (
		<View className="flex-1 bg-white flex-row">
			{/* Left Side */}
			<View className="w-1/2 border-r border-gray-300">
				{/* Items Grid */}
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

export default FavoritesScreen;
