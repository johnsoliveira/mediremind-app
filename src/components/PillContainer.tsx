import { Text, View } from "react-native";

export default function PillContainer({ title, color }) {
  return (
    <View className="flex-row space-x-2 items-center mb-2">
      <View
        className="rounded-full w-10 h-10 "
        style={{ backgroundColor: `${color}` }}
      ></View>
      <Text className="text-base font-semiBold">{title}</Text>
    </View>
  );
}
