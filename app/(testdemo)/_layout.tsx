import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="test1"
        options={{
          headerTitle: "KeyPadHandler",
          headerStyle: {
            backgroundColor: "#49afbe",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="test2"
        options={{
          headerTitle: "Test2",
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
