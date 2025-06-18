import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import { Feather } from "@expo/vector-icons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CalendarDaysIcon, Icon } from "@/components/ui/icon";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddYourGoal() {
  const [goalDescription, setGoalDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  // states to store saved values
  const [savedGoalDescription, setSavedGoalDescription] = useState("");
  const [savedCompletionDate, setSavedCompletionDate] = useState("");

  // handler for Save button
  const handleSave = () => {
    setSavedGoalDescription(goalDescription);
    setSavedCompletionDate(completionDate);
    setGoalDescription("");
    setCompletionDate("");
  };

  // Helper to format date as MM-DD-YY
  const formatDate = (date: Date) => {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}-${dd}-${yy}`;
  };

  const handleConfirm = (date: Date) => {
    // console.log(date);
    setCompletionDate(formatDate(date));
    setShowPicker(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-8">
        {/* Header */}
        <Text className="text-xl font-semibold text-[#49afbe] mb-2">
          Add your Goal
        </Text>

        {/* Description */}
        <Text className="text-gray-600 text-base">
          Enter high level goals for your health
        </Text>

        {/* Examples */}
        <Text className="text-gray-600 text-sm mb-1">e.g.</Text>
        <View className="mb-4 ml-2">
          <Text className="text-gray-600 text-sm mb-1">
            • Walk two flights of stairs comfortably
          </Text>
          <Text className="text-gray-600 text-sm mb-1">
            • Eat solid foods and regular liquids
          </Text>
          <Text className="text-gray-600 text-sm">
            • keep my seizures under control
          </Text>
        </View>

        {/* Like hr */}
        <View className="h-px bg-gray-300 mb-4" />

        {/* Goal Description Input */}
        <Text className="text-gray-600 text-sm mb-2">
          Enter a goal description
        </Text>
        <TextInput
          value={goalDescription}
          onChangeText={setGoalDescription}
          placeholder="Your goals"
          className="border border-gray-300 rounded-md px-3 py-3 text-base mb-6"
          multiline
          numberOfLines={3}
          textAlignVertical="top"
        />

        {/* Completion Date */}
        <Text className="text-gray-600 text-sm mb-2">
          Set date to complete your goal
        </Text>

        <View className="border border-gray-300 rounded-md px-3">
          <TouchableOpacity
            className="flex-1"
            onPress={() => setShowPicker(true)}
          >
            <View className="flex-row items-center">
              <TextInput
                value={completionDate}
                placeholder="MM-DD-YY"
                className="flex-1 text-base"
                editable={false}
                pointerEvents="none"
              />
              <Icon
                as={CalendarDaysIcon}
                className="text-typography-500 m-1 w-5 h-5"
              />
              {/* <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color="gray"
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={showPicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setShowPicker(false)}
        />

        {/* Save Button */}
        <TouchableOpacity
          className="bg-[#49afbe] py-2 rounded-md mt-4"
          onPress={handleSave}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Save
          </Text>
        </TouchableOpacity>

        {/* Show saved values when save button clicked */}
        {savedGoalDescription || savedCompletionDate ? (
          <View className="mt-10">
            <Text className="text-xl font-semibold">Saved values:</Text>
            <Text className="text-lg">Goal Description:</Text>
            <Text className="text-lg">{savedGoalDescription}</Text>
            <Text className="text-gray-700 text-lg">
              <Text className="text-lg">Completion Date: </Text>
              {savedCompletionDate}
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
