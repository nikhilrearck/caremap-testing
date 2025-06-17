import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, View, Text, FlatList, StyleSheet } from "react-native";

const DATA = [
  { id: "1", title: "The only limit is your mind." },
  { id: "2", title: "Dream big. Work hard. Stay focused." },
  { id: "3", title: "Turn your wounds into wisdom." },
  { id: "4", title: "Hustle in silence, let success make the noise." },
  { id: "5", title: "Doubt kills more dreams than failure ever will." },
  { id: "6", title: "Success is not for the lazy." },
  { id: "7", title: "Push yourself, because no one else will do it for you." },
  { id: "8", title: "Great things never come from comfort zones." },
  {
    id: "9",
    title: "Discipline is doing it even when you don’t feel like it.",
  },
  { id: "10", title: "If it was easy, everyone would do it." },
  { id: "11", title: "Stay hungry. Stay foolish." },
  { id: "12", title: "Small steps every day." },
  { id: "13", title: "Fall seven times, stand up eight." },
  { id: "14", title: "Nothing changes if nothing changes." },
  { id: "15", title: "Be stronger than your excuses." },
  { id: "16", title: "Don’t stop until you’re proud." },
  { id: "17", title: "You are your only limit." },
  { id: "18", title: "Work hard in silence. Let success be your noise." },
  { id: "19", title: "Your future is created by what you do today." },
  { id: "20", title: "The harder you work, the luckier you get." },
];

export default function Test2() {
  return (
    <View style={styles.container} className="flex-1">
      <Text style={styles.header}>Welcome</Text>

      {/* Some top content */}
      <View style={styles.box}>
        <Text>This is some content above the list.</Text>
      </View>

      <Text style={styles.subHeader}>FlatList Example</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>
              {item.id}- {item.title}
            </Text>
          </View>
        )}
        scrollEnabled={true} // Important to avoid scroll conflicts
      />

      {/* Some bottom content */}
      <View style={styles.box}>
        <Text>This is some content below the list.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
  },
  listItem: {
    padding: 16,
    // backgroundColor: "#e3e3e3",
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 8,
  },
  box: {
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
  },
});
