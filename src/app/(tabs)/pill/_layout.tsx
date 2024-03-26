import { Stack } from "expo-router";

export default function PillLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[medicines]"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
