import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "High Level Goals",
          headerStyle: {
            backgroundColor: "#49afbe",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
