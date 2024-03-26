import { Button } from "@/components/Button";
import MedicineContainer from "@/components/MedicineContainer";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Platform,
  FlatList,
} from "react-native";

export default function RegisterDrug() {
  const isPresented = () => {
    router.back();
  };

  const params = useLocalSearchParams();

  return (
    <>
      <StatusBar style={Platform.OS === "android" ? "auto" : "light"} />
      <SafeAreaView style={{ flex: 1 }}>
        <View className="justify-end position-fixed mt-10">
          <Button
            label="Cancelar"
            labelClasses="text-[#88beff]"
            onPress={isPresented}
          />
        </View>

        <View className="mt-5">
          <View className="items-center space-y-1">
            <Text className="text-[#bcbcbc] text-sm font-bold">
              Registrar medicamento
            </Text>
            <Text className="text-black text-3xl font-bold">
              Medicamentos ás 07:00
            </Text>
            <Text className="text-black text-black text-base">
              4 Medicamentos
            </Text>
          </View>
        </View>
        <View className="flex-1 p-6 mt-4">
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <MedicineContainer
              title="DIPIRONA"
              color="#88beff"
              unity="500mg"
              type="Comprimido"
              quantity="2 comprimidos"
              hour="21:00"
            />
            <MedicineContainer
              title="DIPIRONA"
              color="#88beff"
              unity="500mg"
              type="Comprimido"
              quantity="2 comprimidos"
              hour="21:00"
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
