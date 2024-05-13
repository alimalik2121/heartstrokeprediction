import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const MealPlannerScreen = () => {
  const [mealPlan, setMealPlan] = useState({});
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [preferences, setPreferences] = useState("");

  const generateMealPlan = () => {
    const data = {
      age: age,
      weight: weight,
      restrictions: restrictions,
      preferences: preferences,
    };

    axios
      .post("http://192.168.1.15:5000/mealplan", data)
      .then((response) => {
        setMealPlan(response.data);
      })
      .catch((error) => {
        console.error("Error generating meal plan:", error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20 }}>
        Fill in your details to generate a personalized meal plan:
      </Text>
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, width: 200 }}
      />
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, width: 200 }}
      />
      <TextInput
        placeholder="Dietary Restrictions"
        value={restrictions}
        onChangeText={(text) => setRestrictions(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, width: 200 }}
      />
      <TextInput
        placeholder="Food Preferences"
        value={preferences}
        onChangeText={(text) => setPreferences(text)}
        style={{ marginBottom: 20, paddingHorizontal: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, width: 200 }}
      />
      <Button title="Generate Meal Plan" onPress={generateMealPlan} />
      <View style={{ marginTop: 20 }}>
        <Text>Breakfast: {mealPlan.breakfast}</Text>
        <Text>Lunch: {mealPlan.lunch}</Text>
        <Text>Dinner: {mealPlan.dinner}</Text>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   }
// })

 export default MealPlannerScreen;
