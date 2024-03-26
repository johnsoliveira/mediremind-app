import { SafeAreaView, Text, View } from "react-native";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Button } from "@/components/Button";

export default function WelcomeScreen() {
  const goToNavigate = () => {
    router.navigate("/(tabs)/pill");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ddd" }}>
      <View className="mt-10 relative p-8 flex-1 items-center justify-center">
        <View className="shadow-xl w-full h-3/4 bg-white border-[#ddd] rounded-lg justify-center items-center space-y-4">
          <Text className="font-bold text-3xl">MediRemind</Text>
          <View className="flex-row w-9/12 space-x-4 items-center">
            <Fontisto name="pills" size={40} color="#ff9c5b" />
            <Text className="text-sm text-black">
              Controle seus medicamentos em apenas um lugar
            </Text>
          </View>
          <View className="flex-row w-9/12 space-x-4 items-center">
            <MaterialCommunityIcons
              name="calendar-clock"
              size={40}
              color="#ff9c5b"
            />
            <Text>Defina horários e receba lembretes</Text>
          </View>

          <View className="absolute bottom-7 w-10/12">
            <Button
              label="Adicionar um medicamento"
              variant="secondary"
              labelClasses="text-white font-bold"
              className="bg-[#ed303c]"
              size="default"
              onPress={goToNavigate}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
