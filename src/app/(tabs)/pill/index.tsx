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
import { Link } from "expo-router";
import PillContainer from "@/components/PillContainer";

export default function PillScreen() {
  const DATA = [
    {
      id: 1,
      title: "Dipirona",
      type: "Comprimido",
      unity: "500mg",
      frequency: "Todos os dias",
      color: "#267da8",
    },
    {
      id: 2,
      title: "Amoxicilina",
      type: "Líquido",
      unity: "5mL",
      frequency: "Todos os dias",
      color: "#267da8",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <View style={{ flex: 1 }}>
        <View className="mt-10 relative p-4 justify-between flex-row">
          <Text className="text-3xl font-bold">Medicamentos</Text>
        </View>
        <View className="p-4">
          <Text className="font-bold text-xl">Registrar</Text>
        </View>
        <View className="p-4">
          <Link href="/(tabs)/pill/register" asChild>
            <TouchableOpacity className="p-4 rounded-lg bg-cyan-50">
              <View className="justify-between flex-row">
                <Text className="font-semibold text-md">07:00</Text>
                <Feather name="plus" size={20} color="blue" />
              </View>
              <ScrollView contentContainerStyle={{ marginTop: 8 }}>
                {DATA.map((item) => (
                  <PillContainer
                    title={item.title}
                    color={item.color}
                    key={item.id}
                  />
                ))}
              </ScrollView>
            </TouchableOpacity>
          </Link>
        </View>
        <View className="flex-1 p-4 bg-[#ededed]">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold mb-2">Seus Medicamentos</Text>
            <TouchableOpacity className="justify-center items-center">
              <Text className="text-[#88beff] font-bold">Editar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-white mb-4 p-2 rounded-lg">
            <Text className="text-[#88beff] font-bold">
              Adicionar medicamento
            </Text>
          </TouchableOpacity>
          <View className="">
            <FlatList
              data={DATA}
              renderItem={(item) => (
                <DrugContainer
                  title={item.item.title}
                  color={item.item.color}
                  frequency={item.item.frequency}
                  type={item.item.type}
                  unity={item.item.unity}
                  onPress={() => {}}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
