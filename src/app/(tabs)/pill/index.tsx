import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DrugContainer from "@/components/DrugContainer";
import { Link, router, useNavigation, useRouter } from "expo-router";
import PillContainer from "@/components/PillContainer";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { medicamentos } from "@/app/mock";
import { useState } from "react";

export default function PillScreen() {
  const [medications, setMedications] = useState(medicamentos);

  const filteredMedications = medications.filter(
    (medication) => medication.taken
  );

  console.log(filteredMedications);

  const goToNavigate = () => {
    router.navigate({
      pathname: "/(tabs)/pill/register",
    });
  };

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <ScrollView style={{ flex: 1 }}>
        <View className="mt-10 relative p-4 justify-between flex-row">
          <Text className="text-3xl font-bold">Medicamentos</Text>
        </View>
        <View className="p-4">
          <Text className="font-bold text-xl">Registrar</Text>
        </View>
        <View className="p-4">
          <TouchableOpacity
            className="p-4 rounded-lg bg-cyan-50"
            onPress={() =>
              router.navigate({
                pathname: "/(tabs)/pill/register",
              })
            }
          >
            <View className="justify-between flex-row">
              <Text className="font-semibold text-md">07:00</Text>
              <Feather name="plus" size={20} color="blue" />
            </View>
            <ScrollView contentContainerStyle={{ marginTop: 8 }}>
              {medications.map((item) => (
                <PillContainer
                  title={item.title}
                  color={item.color}
                  key={item.id}
                />
              ))}
            </ScrollView>
          </TouchableOpacity>
          {filteredMedications?.length > 1 && (
            <View className="mt-5 h-auto bg-[#ededed] rounded-lg">
              <View className="p-4 border-b-2 border-[#dddd]">
                <Text className="font-bold text-base">Registrado</Text>
              </View>
              {filteredMedications?.map((medication) => (
                <TouchableOpacity
                  className="h-auto p-4 space-y-2"
                  onPress={goToNavigate}
                >
                  <View className="flex-row justify-between">
                    <Text className="font-semibold text-sm">
                      {medication.hour}
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={20}
                      color="#666"
                    />
                  </View>
                  <View className="space-x-2 flex-row items-center">
                    <AntDesign name="checkcircle" size={16} color="#39aae3" />
                    <Text>{medication.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <View className="flex-1 p-4 bg-[#ededed]">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold mb-2">Seus Medicamentos</Text>
            <TouchableOpacity className="justify-center items-center">
              <Text className="text-[#027afe] font-bold">Editar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-white mb-4 p-4 rounded-lg">
            <Text className="text-[#027afe] font-bold">
              Adicionar medicamento
            </Text>
          </TouchableOpacity>
          <View className="">
            {medications.map((item) => (
              <DrugContainer
                title={item.title}
                color={item.color}
                frequency={item.frequency}
                type={item.type}
                unity={item.unity}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
