import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  TextInput,
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

import { Dimensions } from "react-native";
import { CalendarDaysIcon, Icon } from "@/components/ui/icon";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const linkedGoals = [
  "Establish a consistent sleep schedule for better energy and recovery.",
  "Improve cardiovascular fitness by engaging in regular aerobic activity.",
  "Eat more whole, unprocessed foods and cut down on added sugar.",
  "Eat more whole, unprocessed foods and cut down on added sugar.",
  // "Improve cardiovascular fitness by engaging in regular aerobic activity.",
  // "Eat more whole, unprocessed foods and cut down on added sugar.",
];

type Goal = {
  title: string;
  progress?: number;
  daysRemaining?: number;
};

const userGoals = [
  {
    title: "Loose 10 Kg in 3 months",
    progress: 0.6,
    daysRemaining: 34,
  },
  {
    title: "Eat more whole, unprocessed foods and cut down on added sugar.",
  },
  {
    title: "Loose 10 Kg in 3 months",
    progress: 0.6,
    daysRemaining: 34,
    id: "15",
  },
  {
    title: "Eat more whole, unprocessed foods and cut down on added sugar.",
    id: "20",
  },
  {
    title: "Walk 10,000 steps a day.",
    id: "8",
  },
  {
    title: "Have a healthy breakfast every morning.",
    progress: 0.5,
    daysRemaining: 18,
    id: "9",
  },
  {
    title: "Avoid eating after 8 PM.",
    id: "10",
  },
];

function AddYourGoalsPage({ onClose }: { onClose: () => void }) {
  const [goalDescription, setGoalDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  // Helper to format date as MM-DD-YY
  const formatDate = (date: Date) => {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    // const yy = String(date.getFullYear()).slice(-2);
    const yy = String(date.getFullYear());
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
          minimumDate={new Date()} // Prevent selecting past dates
        />

        {/* Save Button */}
        <TouchableOpacity
          className="bg-[#49afbe] py-2 rounded-md mt-4"
          // onPress={handleSave}
          onPress={() => onClose()}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function GoalsScreen() {
  const [showAddForm, setShowAddForm] = useState(false);

  if (showAddForm) {
    return <AddYourGoalsPage onClose={() => setShowAddForm(false)} />;
  }

  const renderUserGoal = ({ item: goal }: { item: Goal }) => (
    <View className="bg-white border border-gray-300 rounded-md px-3 py-3 mb-2">
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

          {/* Goal Title */}
          <Text className="text-base text-black ml-3 flex-1">{goal.title}</Text>
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
  );

  const { height: deviceHeight } = Dimensions.get("window");

  // Example: allocate 30% for linkedGoals and 35% for userGoals
  const LINKED_GOALS_MAX_HEIGHT = deviceHeight * 0.24;
  const USER_GOALS_MAX_HEIGHT = deviceHeight * 0.32;

  return (
    <SafeAreaView className="flex-1 bg-white px-7 py-8">
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      > */}
      {/* Linked Health System */}
      <Text className="text-lg font-semibold text-cyan-700">
        High level goals (linked Health System)
      </Text>

      {/* Like hr */}
      <View className="h-px bg-gray-300 my-3" />

      <View>
        <FlatList
          data={linkedGoals}
          renderItem={({ item }) => (
            <View className="border border-gray-300 p-3 rounded-md mb-2">
              <Text className="text-base text-black">{item}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={
            <Text className="text-gray-500">
              No user linked health system found.
            </Text>
          }
          showsVerticalScrollIndicator={true}
          scrollEnabled={true} // Important!
          style={{ minHeight: 50, maxHeight: LINKED_GOALS_MAX_HEIGHT }}
          // style={{ minHeight: 50, maxHeight: 230 }}
        />
      </View>

      {/* User Entered Goals */}
      <Text className="text-lg font-semibold text-cyan-700 mt-4">
        High level goals (User entered)
      </Text>

      {/* Like hr */}
      <View className="h-px bg-gray-300 my-3" />

      <View>
        <FlatList
          data={userGoals}
          renderItem={renderUserGoal}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          scrollEnabled={true} // Important!
          style={{ maxHeight: USER_GOALS_MAX_HEIGHT }}
          // style={{ maxHeight: 300 }}
          ListEmptyComponent={
            <Text className="text-gray-500">No user goals found.</Text>
          }
        />
      </View>

      {/* Delete button */}
      <TouchableOpacity className="bg-gray-50 rounded-md px-4 py-2 mt-1 self-end border border-[#49afbe]">
        <Text className="text-center text-base color-[#49afbe]">Delete</Text>
      </TouchableOpacity>

      {/* Like hr */}
      <View className="h-px bg-gray-300 my-3" />

      {/* Add Button */}
      {/* <Link href="/highLevelGoals/addYourGoal" asChild push> */}
      <TouchableOpacity
        className="mt-1 bg-[#49afbe] py-3 rounded flex-row items-center justify-center"
        onPress={() => setShowAddForm(true)}
      >
        <Text className="text-white font-semibold">Add your goals</Text>
      </TouchableOpacity>
      {/* </Link> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

// adjust UI based on if else:

// const SMALL_LIST_THRESHOLD = 3; // adjust as needed

// export default function GoalsScreen() {
//   const isSmall =
//     linkedGoals.length <= SMALL_LIST_THRESHOLD &&
//     userGoals.length <= SMALL_LIST_THRESHOLD;

//   const renderUserGoal = ({ item: goal }: { item: Goal }) => (
//     <View className="bg-white border border-gray-300 rounded-md px-3 py-3 mb-2">
//       <View className="flex-row items-start mb-2">
//         <View className="flex-row items-center flex-1">
//           <Checkbox value="goal-checkbox" size="md">
//             <CheckboxIndicator>
//               <CheckboxIcon as={CheckIcon} />
//             </CheckboxIndicator>
//           </Checkbox>
//           <Text className="text-base text-black ml-3 flex-1">{goal.title}</Text>
//         </View>
//         <TouchableOpacity>
//           <Feather name="more-vertical" size={20} color="black" />
//         </TouchableOpacity>
//       </View>
//       <View className="flex-row justify-end">
//         {goal.daysRemaining && (
//           <Text className="text-sm text-gray-500 mr-2">
//             {goal.daysRemaining} days remaining
//           </Text>
//         )}
//       </View>
//       {goal.progress && (
//         <View className="w-full px-2 py-2">
//           <Progress
//             value={goal.progress * 100}
//             size="xs"
//             orientation="horizontal"
//           >
//             <ProgressFilledTrack className="bg-[#08B828]" />
//           </Progress>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <SafeAreaView className="flex-1 bg-white px-7 py-8">
//       <Text className="text-lg font-semibold text-cyan-700">
//         High level goals (linked Health System)
//       </Text>

//       {/* Like hr */}
//       <View className="h-px bg-gray-300 my-4" />

//       {isSmall ? (
//         <>
//           {linkedGoals.map((goal, index) => (
//             <View
//               key={index}
//               className=" border border-gray-300 p-3 rounded-md mb-2"
//             >
//               <Text className="text-base text-black">{goal}</Text>
//             </View>
//           ))}

//           {/* User Goals */}
//           <Text className="text-lg font-semibold text-cyan-700 mt-4">
//             High level goals (User entered)
//           </Text>

//           {/* Like hr */}
//           <View className="h-px bg-gray-300 my-4" />

//           {userGoals.map((goal, index) => (
//             <View
//               key={index}
//               className="bg-white border border-gray-300 rounded-md px-3 py-3 mb-2"
//             >
//               <View className="flex-row items-start mb-2">
//                 {/* CheckBox */}
//                 <View className="flex-row items-center flex-1">
//                   <Checkbox
//                     value="goal-checkbox"
//                     size="md"
//                     isInvalid={false}
//                     isDisabled={false}
//                   >
//                     <CheckboxIndicator>
//                       <CheckboxIcon as={CheckIcon} />
//                     </CheckboxIndicator>
//                   </Checkbox>

//                   {/* Loose 10Kg in 3 months*/}
//                   <Text className="text-base text-black ml-3 flex-1">
//                     {goal.title}
//                   </Text>
//                 </View>
//                 <TouchableOpacity>
//                   <Feather name="more-vertical" size={20} color="black" />
//                 </TouchableOpacity>
//               </View>

//               <View className="flex-row justify-end">
//                 {goal.daysRemaining && (
//                   <Text className="text-sm text-gray-500 mr-2">
//                     {goal.daysRemaining} days remaining
//                   </Text>
//                 )}
//               </View>

//               {goal.progress && (
//                 <View className="w-full px-2 py-2">
//                   <Progress
//                     value={goal.progress * 100}
//                     size="xs"
//                     orientation="horizontal"
//                   >
//                     <ProgressFilledTrack className="bg-[#08B828]" />
//                   </Progress>
//                 </View>
//               )}
//             </View>
//           ))}
//         </>
//       ) : (
//         <>
//           <View className="flex-1">
//             <FlatList
//               data={linkedGoals}
//               renderItem={({ item }) => (
//                 <View className="border border-gray-300 p-3 rounded-md mb-2">
//                   <Text className="text-base text-black">{item}</Text>
//                 </View>
//               )}
//               keyExtractor={(_, index) => `linked-${index}`}
//               scrollEnabled={true}
//             />
//           </View>
//           <Text className="text-lg font-semibold text-cyan-700 mt-4">
//             High level goals (User entered)
//           </Text>
//           <View className="h-px bg-gray-300 my-4" />
//           <View className="flex-1">
//             <FlatList
//               data={userGoals}
//               renderItem={renderUserGoal}
//               keyExtractor={(_, index) => `user-${index}`}
//               scrollEnabled={true}
//               ListEmptyComponent={
//                 <Text className="text-gray-500">No user goals found.</Text>
//               }
//             />
//           </View>
//         </>
//       )}

//       <TouchableOpacity className="bg-gray-50 rounded-md px-4 py-2 mt-1 self-end border border-[#49afbe]">
//         <Text className="text-center text-base color-[#49afbe]">Delete</Text>
//       </TouchableOpacity>
//       <View className="h-px bg-gray-300 my-4" />
//       <Link href="/highLevelGoals/addYourGoal" asChild push>
//         <TouchableOpacity className="mt-1 bg-[#49afbe] py-3 rounded flex-row items-center justify-center">
//           <Text className="text-white font-semibold">Add your goals</Text>
//         </TouchableOpacity>
//       </Link>
//     </SafeAreaView>
//   );
// }
