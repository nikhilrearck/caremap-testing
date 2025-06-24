// import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
// import React, { useState } from "react";
// import { TextInput, ScrollView, Pressable } from "react-native";
// import {
//   Checkbox,
//   CheckboxIndicator,
//   CheckboxLabel,
//   CheckboxIcon,
// } from "@/components/ui/checkbox";
// import { CheckIcon } from "@/components/ui/icon";
// import { Modal } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { Link } from "expo-router";

// export default function MedicalConditions() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [userConditions, setUserConditions] = useState([
//     {
//       id: 1,
//       name: "Irritable Bowel Syndrome (IBS)",
//       date: "18 Apr, 2025",
//       checked: false,
//     },
//     { id: 2, name: "Condition 1", date: "18 Apr, 2025", checked: false },
//     { id: 3, name: "Condition 2", date: "18 Apr, 2025", checked: false },
//     { id: 4, name: "Condition 3", date: "18 Apr, 2025", checked: false },
//   ]);

//   return (
//     <ScrollView className="flex-1 p-4 bg-white">
//       {/* Linked Health System */}
//       <View className="mb-6 mt-4">
//         <Text className="text-lg font-semibold text-teal-700 mb-2">
//           Medical Conditions (Linked Health System)
//         </Text>

//         <View className="border border-gray-200 rounded-lg p-2 mb-2 mt-4 bg-gray-100">
//           <Text className="text-lg">
//             Attention Deficient and Hyperactivity Disorder (ADHD)
//           </Text>
//         </View>

//         <View className="border border-gray-200 rounded-lg p-2 bg-gray-100">
//           <Text className="text-lg">Irritable Bowel Syndrome (IBS)</Text>
//         </View>
//       </View>

//       {/* User Entered */}
//       <View className="mb-6">
//         <Text className="text-lg font-semibold text-teal-700 mb-4">
//           Medical Conditions (User entered)
//         </Text>

//         {userConditions.map((condition, index) => (
//           <View
//             key={condition.id}
//             className="flex-row items-center justify-between border border-gray-300 rounded-lg px-3 py-3 mb-4"
//           >
//             <View className="flex-row items-center space-x-2">
//               {/* <CheckBox value={false} /> */}
//               <Checkbox
//                 size="md"
//                 isInvalid={false}
//                 isDisabled={false}
//                 value={condition.date}
//               >
//                 <CheckboxIndicator>
//                   <CheckboxIcon as={CheckIcon} />
//                 </CheckboxIndicator>
//               </Checkbox>
//               <Text className="text-lg ml-3 max-w-52 text-left">
//                 {condition.name}
//               </Text>
//             </View>
//             <View className="flex-row items-center">
//               <Text className="text-md text-gray-500 mr-2">
//                 {condition.date}
//               </Text>
//               <TouchableOpacity>
//                 <MaterialIcons name="more-vert" size={20} color="#9E9E9E" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//         <Pressable className="bg-gray-100 rounded-md p-1 w-24 self-end border border-teal-700">
//           <Text className="text-center text-lg color-teal-700">Delete</Text>
//         </Pressable>
//       </View>

//       {/* Modal Button */}
//       <Pressable
//         className="bg-[#48afbe] rounded-md py-3 items-center"
//         onPress={() => setModalVisible(true)}
//       >
//         <Text className="text-white font-medium text-lg">
//           Add your child's current medical condition
//         </Text>
//       </Pressable>

//       {/* Modal */}
//       {/* https://reactnative.dev/docs/modal */}
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         // transparent
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View
//           className="flex-1 items-center justify-center bg-black/30 px-4"
//           // bg-black/30 for a dimmed background
//         >
//           <View className="bg-white rounded-xl px-4 pt-10 pb-4 w-full max-w-lg">
//             {/* Close Button */}
//             <TouchableOpacity
//               className="absolute right-3 top-2 z-10"
//               onPress={() => setModalVisible(false)}
//             >
//               <Ionicons name="close" size={24} color="#888" />
//             </TouchableOpacity>

//             {/* Title */}
//             <Text className="text-center text-[#48afbe] font-medium mb-4 text-md">
//               Add your child's current medical condition
//             </Text>

//             {/* TextInput */}
//             <TextInput
//               className="border border-gray-300 rounded-md p-3 mb-4"
//               placeholder="Enter condition"
//               placeholderTextColor="#888"
//               multiline
//               style={{ minHeight: 100, textAlignVertical: "top" }}
//             />

//             {/* Save Button */}
//             <Pressable
//               className="bg-[#48afbe] rounded-md py-3 items-center"
//               onPress={() => {
//                 // handle save
//                 setModalVisible(false);
//               }}
//             >
//               <Text className="text-white font-medium">Save</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>

//       <View className="mt-4">
//         <Link href="/medicalCondition/another" asChild push>
//           <Button title="Another screen" />
//         </Link>
//       </View>
//     </ScrollView>
//   );
// }

// Ankit medical condition:

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Textarea, TextareaInput } from "@/components/ui/textarea";

function MedicalConditionsPage({ onClose }: { onClose: () => void }) {
  //   const [condition, setCondition] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="py-3 bg-[#49AFBE] flex-row items-center">
        <TouchableOpacity onPress={onClose} className="p-2 ml-2">
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-xl text-white font-bold ml-4">
          Medical Conditions
        </Text>
      </View>

      <View className="px-6 py-8">
        <Text className="text-lg font-medium mb-3 text-[#48afbe]">
          Add your child's current medical condition
        </Text>

        {/* <TextArea
          className="border border-gray-300 rounded-lg p-4 mb-6"
          placeholder="Type the medical condition here"
          value={condition}
          onChangeText={setCondition}
        /> */}

        <Textarea
          size="md"
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          className="w-full"
        >
          <TextareaInput
            placeholder="Enter condition"
            style={{ textAlignVertical: "top", fontSize: 16 }}
          />
        </Textarea>

        <TouchableOpacity
          className="bg-[#49AFBE] py-3 rounded-md mt-3"
          onPress={() => {
            // console.log('Saved:', condition);
            // TODO: Push this to global state/local list
            onClose(); // Go back to list
          }}
        >
          <Text className="text-white font-bold text-center">Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function MedicalConditions() {
  const [userConditions, setUserConditions] = useState([
    {
      id: 1,
      name: "Irritable Bowel Syndrome (IBS)",
      date: "18 Apr, 2025",
      checked: false,
    },
    { id: 2, name: "Condition 1", date: "18 Apr, 2025", checked: false },
    // { id: 3, name: "Condition 2", date: "18 Apr, 2025", checked: false },
    // { id: 4, name: "Condition 3", date: "18 Apr, 2025", checked: false },
    // { id: 5, name: "Condition 4", date: "18 Apr, 2025", checked: false },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  if (showAddForm) {
    return <MedicalConditionsPage onClose={() => setShowAddForm(false)} />;
  }

  return (
    <SafeAreaView className="flex-1  bg-white">
      {/* Header */}
      <View className="py-3 bg-[#49AFBE] flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="p-2 ml-2">
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-xl text-white font-bold ml-4">
          Medical Conditions
        </Text>
      </View>

      {/* Linked System */}
      <View className="p-5 flex-1">
        <View className="mb-6 mt-4">
          <Text className="text-lg font-semibold text-teal-700 mb-2">
            Medical Conditions (Linked Health System)
          </Text>

          {/* Like hr */}
          <View className="h-px bg-gray-300 my-3" />

          <View className="border border-gray-200 rounded-lg p-2 mb-2 mt-1 bg-gray-100">
            <Text className="text-lg">
              Attention Deficient and Hyperactivity Disorder (ADHD)
            </Text>
          </View>
          <View className="border border-gray-200 rounded-lg p-2 bg-gray-100">
            <Text className="text-lg">Irritable Bowel Syndrome (IBS)</Text>
          </View>
        </View>

        {/* User Entered */}
        <View className="mb-6 flex-1">
          <Text className="text-lg font-semibold text-teal-700">
            Medical Conditions (User entered)
          </Text>

          {/* Like hr */}
          <View className="h-px bg-gray-300 my-3" />

          <View>
            <FlatList
              data={userConditions}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={true}
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={
                <Text className="text-gray-500">
                  No Medical conditions found.
                </Text>
              }
              style={{ maxHeight: 380 }}
              renderItem={({ item: condition }) => (
                <View
                  key={condition.id}
                  className="flex-row items-center justify-between border border-gray-300 rounded-lg px-3 py-3 mb-4"
                >
                  <View className="flex-row items-center space-x-2">
                    <Checkbox value={condition.name}>
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                    </Checkbox>
                    <Text className="text-lg ml-3 max-w-52 text-left">
                      {condition.name}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Text className="text-md text-gray-500 mr-2">
                      {condition.date}
                    </Text>
                    <TouchableOpacity>
                      <MaterialIcons
                        name="more-vert"
                        size={20}
                        color="#9E9E9E"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>

          <TouchableOpacity className="bg-gray-100 rounded-md p-1 w-24 self-end border border-teal-700">
            <Text className="text-center text-lg color-teal-700">Delete</Text>
          </TouchableOpacity>

          {/* Like hr */}
          <View className="h-px bg-gray-300 my-3" />

          {/* Add Condition Button */}
          <TouchableOpacity
            className="bg-[#48afbe] rounded-md py-3 items-center mt-1"
            onPress={() => setShowAddForm(true)}
          >
            <Text className="text-white font-medium text-md">
              Add your child's current medical condition
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
