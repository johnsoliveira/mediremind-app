import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function DrugContainer({
  title,
  type,
  unity,
  frequency,
  color,
  onPress,
}) {
  return (
    <TouchableOpacity
      className="shadow-xl flex-row h-24 bg-white rounded-lg mb-4"
      onPress={onPress}
    >
      <View
        className="w-24 rounded-l-lg items-center justify-center"
        style={{ backgroundColor: `${color}` }}
      ></View>
      <View className="flex-col p-3">
        <View className="flex-row items-center justify-between w-10/12">
          <Text className="font-bold text-base">{title}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#666" />
        </View>
        <View className="text-black flex-col">
          <Text className="text-xs font-medium">{type}</Text>
          <Text className="text-xs font-medium">{unity}</Text>
          <View className="flex-row space-x-1 items-center">
            <FontAwesome name="calendar" color="#bcbcbc" />
            <Text className="text-xs text-[#bcbcbc] font-medium">
              {frequency}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
