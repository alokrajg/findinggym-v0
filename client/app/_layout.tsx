import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* The Stack.Screen does not need a `component` prop */}
      <Stack.Screen name="loginScreen" options={{ title: "Login" }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
