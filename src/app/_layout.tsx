import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AppLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
