import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import {
  BellIcon,
  ChevronRightIcon,
  HandRaisedIcon,
  BugAntIcon,
} from "react-native-heroicons/outline";

export default function IndexScreen() {
  return (
    <View className="justify-start flex-1 p-4 ">
      {/* <Link href="/medicalCondition" push asChild>
        <Button size="xl" variant="outline" action="positive">
          <ButtonText>Medical Conditions</ButtonText>
        </Button>
      </Link> */}
      {/* Second Button */}
      <Link href="/medicalCondition" push asChild>
        <Pressable className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200 mt-8">
          <View className="flex-row items-center">
            <BellIcon size={35} color="#34D399" />
            <Text className="ml-3 text-xl font-medium text-teal-700">
              Medical Conditions
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="items-center justify-center w-6 h-6 rounded-full bg-teal-500">
              <Text className="text-sm font-bold text-white">4</Text>
            </View>
            <ChevronRightIcon size={30} color="#6B7280" className="ml-2" />
          </View>
        </Pressable>
        {/* *************************************************** */}
      </Link>
      <Link href="/highLevelGoals" push asChild>
        <Pressable className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200 mt-8">
          <View className="flex-row items-center">
            <HandRaisedIcon size={35} color="#34D399" />
            <Text className="ml-3 text-xl font-medium text-teal-700">
              High Levels Goals
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="items-center justify-center w-6 h-6 rounded-full bg-teal-500">
              <Text className="text-sm font-bold text-white">2</Text>
            </View>
            <ChevronRightIcon size={30} color="#6B7280" className="ml-2" />
          </View>
        </Pressable>
      </Link>
      {/* ************************************************* */}
      <Link href="/test2" push asChild>
        <Pressable className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200 mt-8">
          <View className="flex-row items-center">
            <BugAntIcon size={35} color="#34D399" />
            <Text className="ml-3 text-xl font-medium text-teal-700">
              Testing
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="items-center justify-center w-6 h-6 rounded-full bg-teal-500">
              <Text className="text-sm font-bold text-white">2</Text>
            </View>
            <ChevronRightIcon size={30} color="#6B7280" className="ml-2" />
          </View>
        </Pressable>
      </Link>
    </View>
  );
}
