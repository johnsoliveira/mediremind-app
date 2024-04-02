import { Button } from "@/components/Button";
import MedicineContainer from "@/components/MedicineContainer";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Platform,
  FlatList,
} from "react-native";
import { medicamentos } from "@/app/mock";
import { format } from "date-fns";

export default function RegisterDrug() {
  const [medications, setMedications] = useState(medicamentos);
  const isPresented = () => {
    router.back();
  };

  const params = useLocalSearchParams();

  var todayDate = new Date();

  const handleAllTaken = () => {
    const updatedMedications = medications.map((medication) => ({
      ...medication,
      taken: true,
    }));
    setMedications(updatedMedications);
  };

  const handleChangeTaken = (index, value) => {
    const updateMedications = [...medications];
    updateMedications[index].taken = value;
    setMedications(updateMedications);
  };

  return (
    <>
      <StatusBar style={Platform.OS === "android" ? "auto" : "light"} />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          className={`justify-end items-end position-fixed ${
            Platform.OS === "android" ? "mt-10" : "mt-5"
          }`}
        >
          <Button
            label="Cancelar"
            labelClasses="text-[#027afe]"
            onPress={isPresented}
          />
        </View>

        <View className="mt-5">
          <View className="items-center space-y-1 mb-2">
            <Text className="text-[#bcbcbc] text-sm font-bold">
              Registrar medicamento
            </Text>
            <Text className="text-black text-3xl font-bold">
              Medicamentos ás {format(todayDate, "HH:mm")}
            </Text>
            <Text className="text-black text-black text-base">
              {medications.length} Medicamentos
            </Text>
          </View>
        </View>

        <View className="items-center">
          <Button
            label="Registar todos como tomados"
            labelClasses="text-[#027afe] font-semibold"
            className="bg-white rounded-2xl"
            onPress={handleAllTaken}
          />
        </View>

        <View className="flex-1 p-6 mt-4">
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            {medications.map((medication, index) => (
              <MedicineContainer
                title={medication.title}
                key={index}
                color={medication.color}
                unity={medication.unity}
                type={medication.type}
                quantity={medication.quantity}
                hour={medication.hour}
                onChange={(value) => handleChangeTaken(index, value)}
                taken={medication.taken}
              />
            ))}
          </ScrollView>
        </View>
        <View className="h-16 items-center justify-center p-8">
          <Button
            label="OK"
            className="w-full bg-[#027afe]"
            labelClasses="font-semibold text-white"
            variant="ghost"
            size="lg"
            onPress={() => {
              router.back();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
