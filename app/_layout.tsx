import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#49afbe",
          },
          headerTintColor: "#fff",
          // headerTitleStyle: { color: "#fff" },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Medical Overview",
            // headerTitleStyle: { color: "#fff" },
          }}
        />
        <Stack.Screen
          name="medicalCondition"
          options={{
            // title: "Medical Conditions",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="highLevelGoals"
          options={{
            // title: "Medical Conditions",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(testdemo)"
          options={{
            // title: "Medical Conditions",
            headerShown: false,
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
