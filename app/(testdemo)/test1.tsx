import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Test1() {
  const [input, setInput] = useState("");
  const [savedText, setSavedText] = useState("");
  const [age, setAge] = useState("");
  const [savedAge, setSavedAge] = useState(""); // State to save age

  const handleSave = () => {
    setSavedText(input);
    setSavedAge(age);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Type your goal..."
        value={input}
        onChangeText={setInput}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 8,
          borderRadius: 4,
        }}
      />
      <TextInput
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 8,
          borderRadius: 4,
        }}
      />
      <Button title="Save" onPress={handleSave} />
      {savedText || savedAge ? (
        <View style={{ marginTop: 16 }}>
          <Text>Your saved goal:</Text>
          <Text style={{ fontWeight: "bold" }}>{savedText}</Text>
          <Text>Your saved age:</Text>
          <Text style={{ fontWeight: "bold" }}>{savedAge}</Text>
        </View>
      ) : null}
    </View>
  );
}
