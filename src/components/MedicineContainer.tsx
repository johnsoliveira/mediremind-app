import { Text, View } from "react-native";
import { Button } from "./Button";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function MedicineContainer({
  color,
  title,
  type,
  unity,
  quantity,
  hour,
}) {
  return (
    <View className="bg-white w-full h-24 rounded-xl shadow-xl mb-2 p-4 h-36">
      <View className=" flex-row space-x-2">
        <View
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: `${color}` }}
        ></View>
        <View className="flex-col">
          <Text className="font-bold text-base">{title}</Text>
          <Text className="text-xs text-[#bcbcbc] font-medium">
            {type}, {unity}
          </Text>
          <Text className="text-xs font-medium">
            {quantity}, ás {hour}
          </Text>
        </View>
      </View>
      <View className="mt-4 h-10 flex-row space-x-2">
        <Button
          label={`Não tomado`}
          labelClasses="text-[#027afe]"
          className="w-6/12"
          size="sm"
          style={{ backgroundColor: "rgba(2, 122, 254, 0.2)" }}
        />

        <Button
          label="Tomado"
          labelClasses="text-[#fff]"
          className="w-6/12 space-x-2"
          style={{ backgroundColor: "rgba(2, 122, 254, 1)" }}
          size="sm"
          icon={<AntDesign name="checkcircle" />}
        />
      </View>
    </View>
  );
}
