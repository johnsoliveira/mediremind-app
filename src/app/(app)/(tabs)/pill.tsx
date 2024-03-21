import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Pill() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View className="mt-10 relative p-4 justify-between flex-row">
          <Text className="text-3xl font-bold">Medicamentos</Text>
        </View>
        <View className="p-4">
          <Text className="font-bold text-xl">Registrar</Text>
        </View>
        <View className="p-4">
          <TouchableOpacity className="p-4 rounded-lg bg-cyan-50">
            <View className="justify-between flex-row">
              <Text className="font-semibold text-md">07:00</Text>
              <Feather name="plus" size={20} color="blue" />
            </View>
          </TouchableOpacity>
        </View>

        <View className="bg-[#ddd] flex-1 p-4">
          <Text className="text-xl font-bold mb-2">Seus Medicamentos</Text>
          <View className="border"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
