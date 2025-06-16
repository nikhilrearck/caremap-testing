import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, View, Text, FlatList, StyleSheet } from "react-native";

const DATA = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Item ${i + 1}`,
}));

export default function Test2() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>

      {/* Some top content */}
      <View style={styles.box}>
        <Text>This is some content above the list.</Text>
      </View>

      <Text style={styles.subHeader}>FlatList Inside ScrollView</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.title}</Text>
          </View>
        )}
        scrollEnabled={true} // Important to avoid scroll conflicts
      />

      {/* Some bottom content */}
      <View style={styles.box}>
        <Text>This is some content below the list.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "#e3e3e3",
    marginBottom: 10,
    borderRadius: 8,
  },
  box: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
  },
});
