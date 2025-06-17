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
import { Link } from "expo-router";

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
    <SafeAreaView className="flex-1 bg-white px-7 py-8">
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
          <Text className="text-base text-black">{goal}</Text>
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
          <View className="flex-row items-start mb-2">
            {/* CheckBox */}
            <View className="flex-row items-center flex-1">
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

              {/* Loose 10Kg in 3 months*/}
              <Text className="text-base text-black ml-3 flex-1">
                {goal.title}
              </Text>
            </View>
            <TouchableOpacity>
              <Feather name="more-vertical" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-end">
            {goal.daysRemaining && (
              <Text className="text-sm text-gray-500 mr-2">
                {goal.daysRemaining} days remaining
              </Text>
            )}
          </View>

          {goal.progress && (
            <View className="w-full px-2 py-2">
              <Progress
                value={goal.progress * 100}
                size="xs"
                orientation="horizontal"
              >
                <ProgressFilledTrack className="bg-[#08B828]" />
              </Progress>
            </View>
          )}
        </View>
      ))}

      {/* Delete button */}
      <TouchableOpacity className="bg-gray-50 rounded-md px-4 py-2 mt-1 self-end border border-[#49afbe]">
        <Text className="text-center text-base color-[#49afbe]">Delete</Text>
      </TouchableOpacity>

      {/* Like hr */}
      <View className="h-px bg-gray-300 my-4" />

      {/* Add Button */}
      <Link href="/highLevelGoals/addYourGoal" asChild push>
        <TouchableOpacity className="mt-1 bg-[#49afbe] py-3 rounded flex-row items-center justify-center">
          <Text className="text-white font-semibold">Add your goals</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}
