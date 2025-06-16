import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";

export default function MedicalConditionsScreen() {
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
  const [showModal, setShowModal] = useState(false);

  const toggleCheckbox = (id: number) => {
    setUserConditions(
      userConditions.map((c) =>
        c.id === id ? { ...c, checked: !c.checked } : c
      )
    );
  };

  const handleDelete = () => {
    setUserConditions(userConditions.filter((c) => !c.checked));
  };

  return (
    <ScrollView className="flex-1 bg-gray-200 px-4 py-6">
      {/* Linked Health System */}
      <Text className="text-teal-600 font-semibold text-base mb-2">
        Medical Conditions (Linked Health System)
      </Text>
      <View className="mb-6">
        <View className="bg-white rounded-lg p-4 border border-gray-200 mb-2">
          <Text className="text-gray-800">
            Attention Deficient and Hyperactivity Disorder (ADHD)
          </Text>
        </View>
        <View className="bg-white rounded-lg p-4 border border-gray-200">
          <Text className="text-gray-800">Irritable Bowel Syndrome (IBS)</Text>
        </View>
      </View>

      {/* User Entered */}
      <Text className="text-teal-600 font-semibold text-base mb-2">
        Medical Conditions (User entered)
      </Text>
      <View className="mb-4">
        {userConditions.map((condition) => (
          <View
            key={condition.id}
            className="flex-row items-center bg-white rounded-lg p-4 border border-gray-200 mb-2"
          >
            <TouchableOpacity onPress={() => toggleCheckbox(condition.id)}>
              <View className="w-5 h-5 border border-gray-400 rounded mr-2 items-center justify-center">
                {condition.checked && (
                  <MaterialIcons name="check" size={16} color="#4DB6AC" />
                )}
              </View>
            </TouchableOpacity>
            <View className="flex-1 ml-2">
              <Text className="text-gray-800">{condition.name}</Text>
            </View>
            <Text className="text-gray-500 mr-2">{condition.date}</Text>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color="#9E9E9E" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Delete Button */}
      <View className="items-end mb-4">
        <TouchableOpacity
          onPress={handleDelete}
          className={`px-4 py-1 rounded ${userConditions.some((c) => c.checked) ? "bg-teal-100" : ""}`}
          disabled={!userConditions.some((c) => c.checked)}
        >
          <Text
            className={`text-teal-300 ${!userConditions.some((c) => c.checked) ? "opacity-50" : ""}`}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add Condition Button */}
      <Pressable
        className="bg-teal-500 rounded-md p-4 items-center"
        onPress={() => setShowModal(true)}
      >
        <Text className="text-white font-medium">
          Add your child's current medical condition
        </Text>
      </Pressable>

      {/* <Center className="h-[3000px] bg-black"> */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="full"
        className="bg-gray-100 px-3"
      >
        <ModalBackdrop />
        <ModalContent className="pt-8">
          {/* <ModalHeader> */}
          <Heading size="sm" className="text-[#48afbe] text-center">
            Add your child's current medical condition
          </Heading>
          {/* <Text className="text-center text-[#48afbe] font-medium text-md">
            Add your child's current medical condition
          </Text> */}
          <View>
            <ModalCloseButton className="absolute bottom-6 right-[-10px] z-2">
              <Icon
                as={CloseIcon}
                size="xl"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </View>
          {/* </ModalHeader> */}
          <ModalBody>
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              className="w-full"
            >
              <TextareaInput
                placeholder="Enter condition"
                style={{ textAlignVertical: "top" }}
              />
            </Textarea>
          </ModalBody>
          {/* <ModalFooter> */}
          <Button
            variant="solid"
            // action="negative"
            onPress={() => {
              setShowModal(false);
            }}
            className="bg-[#48afbe]"
          >
            <ButtonText>Save</ButtonText>
          </Button>
          {/* </ModalFooter> */}
        </ModalContent>
      </Modal>
      {/* </Center> */}
    </ScrollView>
  );
}
