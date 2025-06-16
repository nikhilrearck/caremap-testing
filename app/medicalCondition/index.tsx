import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { TextInput, ScrollView, Pressable } from "react-native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

export default function MedicalConditions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userConditions, setUserConditions] = useState([
    {
      id: 1,
      name: "Irritable Bowel Syndrome (IBS)",
      date: "18 Apr, 2025",
      checked: false,
    },
    { id: 2, name: "Condition 1", date: "18 Apr, 2025", checked: false },
    { id: 3, name: "Condition 2", date: "18 Apr, 2025", checked: false },
    { id: 4, name: "Condition 3", date: "18 Apr, 2025", checked: false },
  ]);

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      {/* Linked Health System */}
      <View className="mb-6 mt-4">
        <Text className="text-lg font-semibold text-teal-700 mb-2">
          Medical Conditions (Linked Health System)
        </Text>

        <View className="border border-gray-200 rounded-lg p-2 mb-2 mt-4 bg-gray-100">
          <Text className="text-lg">
            Attention Deficient and Hyperactivity Disorder (ADHD)
          </Text>
        </View>

        <View className="border border-gray-200 rounded-lg p-2 bg-gray-100">
          <Text className="text-lg">Irritable Bowel Syndrome (IBS)</Text>
        </View>
      </View>

      {/* User Entered */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-teal-700 mb-4">
          Medical Conditions (User entered)
        </Text>

        {userConditions.map((condition, index) => (
          <View
            key={condition.id}
            className="flex-row items-center justify-between border border-gray-300 rounded-lg px-3 py-3 mb-4"
          >
            <View className="flex-row items-center space-x-2">
              {/* <CheckBox value={false} /> */}
              <Checkbox
                size="md"
                isInvalid={false}
                isDisabled={false}
                value={condition.date}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
              </Checkbox>
              <Text className="text-lg ml-3 max-w-56 text-left">
                {condition.name}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-md text-gray-500 mr-2">
                {condition.date}
              </Text>
              <TouchableOpacity>
                <MaterialIcons name="more-vert" size={20} color="#9E9E9E" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <Pressable className="bg-gray-100 rounded-md p-1 w-24 self-end border border-teal-700">
          <Text className="text-center text-lg color-teal-700">Delete</Text>
        </Pressable>
      </View>

      {/* Modal Button */}
      <Pressable
        className="bg-[#48afbe] rounded-lg py-3 items-center"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white font-medium text-lg">
          Add your child's current medical condition
        </Text>
      </Pressable>

      {/* Modal */}
      {/* https://reactnative.dev/docs/modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        // transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          className="flex-1 items-center justify-center bg-black/30 px-4"
          // bg-black/30 for a dimmed background
        >
          <View className="bg-white rounded-xl px-4 pt-10 pb-4 w-full max-w-lg">
            {/* Close Button */}
            <TouchableOpacity
              className="absolute right-3 top-2 z-10"
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="#888" />
            </TouchableOpacity>

            {/* Title */}
            <Text className="text-center text-[#48afbe] font-medium mb-4 text-md">
              Add your child's current medical condition
            </Text>

            {/* TextInput */}
            <TextInput
              className="border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Enter condition"
              placeholderTextColor="#888"
              multiline
              style={{ minHeight: 100, textAlignVertical: "top" }}
            />

            {/* Save Button */}
            <Pressable
              className="bg-[#48afbe] rounded-md py-3 items-center"
              onPress={() => {
                // handle save
                setModalVisible(false);
              }}
            >
              <Text className="text-white font-medium">Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View className="mt-4">
        <Link href="/medicalCondition/another" asChild push>
          <Button title="Another screen" />
        </Link>
      </View>
    </ScrollView>
  );
}
