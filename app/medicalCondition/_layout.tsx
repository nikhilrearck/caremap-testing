import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Medical Conditions",
          headerStyle: {
            backgroundColor: "#49afbe",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="another"
        options={{ headerTitle: "Medical Condition 2" }}
      />
    </Stack>
  );
}
