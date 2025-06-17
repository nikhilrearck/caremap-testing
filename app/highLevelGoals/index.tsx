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
    <SafeAreaView className="flex-1 bg-white px-7 py-12">
      {/* Linked Health System */}
      <Text className="text-lg font-semibold text-cyan-700">
        High level goals (linked Health System)
      </Text>

      {/* Like hr */}
      <View className="h-px bg-gray-300 my-4" />

      {linkedGoals.map((goal, index) => (
        <View
          key={index}
          className=" border border-gray-300 p-3 rounded-md mb-2"
        >
          <Text className="text-lg text-black">{goal}</Text>
        </View>
      ))}

      {/* User Goals */}
      <Text className="text-lg font-semibold text-cyan-700 mt-4">
        High level goals (User entered)
      </Text>

      {/* Like hr */}
      <View className="h-px bg-gray-300 my-4" />

      {userGoals.map((goal, index) => (
        <View
          key={index}
          className="bg-white border border-gray-300 rounded-md px-3 py-3 mb-2"
        >
          <View className="flex-row items-start">
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

            {/* Loose 10kg in 3 months */}
            <View className="flex-1 ml-2">
              <Text className="text-lg text-black ">{goal.title}</Text>
              {goal.daysRemaining && (
                <Text className="text-sm text-gray-500 mt-1 text-right">
                  {goal.daysRemaining} days remaining
                </Text>
              )}
              <Center className="w-[280px] h-[20px]">
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
