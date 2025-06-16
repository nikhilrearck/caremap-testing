import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
// import { CheckBox } from "react-native-elements";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Feather } from "@expo/vector-icons";
// import { ProgressBar } from "react-native-paper";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Center } from "@/components/ui/center";

const linkedGoals = [
  "Establish a consistent sleep schedule for better energy and recovery.",
  "Improve cardiovascular fitness by engaging in regular aerobic activity.",
  "Eat more whole, unprocessed foods and cut down on added sugar.",
];

const userGoals = [
  {
    title: "Loose 10 Kg in 3 months",
    progress: 0.6,
    daysRemaining: 34,
  },
  {
    title: "Eat more whole, unprocessed foods and cut down on added sugar.",
  },
];

export default function GoalsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-8">
      {/* Linked Goals */}
      <Text className="text-base font-semibold text-cyan-700 mb-2">
        High level goals (linked Health System)
      </Text>

      {linkedGoals.map((goal, index) => (
        <View
          key={index}
          className="bg-gray-100 border border-gray-200 p-3 rounded-md mb-2"
        >
          <Text className="text-sm text-gray-800">{goal}</Text>
        </View>
      ))}

      {/* User Goals */}
      <Text className="text-base font-semibold text-cyan-700 mt-4 mb-2">
        High level goals (User entered)
      </Text>

      {userGoals.map((goal, index) => (
        <View
          key={index}
          className="bg-white border border-gray-300 rounded-md px-3 py-3 mb-2"
        >
          <View className="flex-row items-start justify-between">
            <View className="flex-row items-center space-x-2">
              <Checkbox
                value="goal-checkbox"
                size="md"
                isInvalid={false}
                isDisabled={false}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
              </Checkbox>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-sm text-gray-800">{goal.title}</Text>
              {goal.daysRemaining && (
                <Text className="text-xs text-gray-500 mt-1">
                  {goal.daysRemaining} days remaining
                </Text>
              )}
              <Center className="w-[300px] h-[20px]">
                <Progress value={50} size="xs" orientation="horizontal">
                  <ProgressFilledTrack className="bg-[#08B828]" />
                </Progress>
              </Center>
            </View>
            <TouchableOpacity className="ml-2">
              <Feather name="more-vertical" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Add Button */}
      <TouchableOpacity className="mt-4 bg-cyan-600 py-3 rounded items-center justify-center">
        <Text className="text-white font-semibold">Add your goals</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
