import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoryMeals = (props) => {
  return (
    <View style={styles.container}>
      <Text>Category Meals</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetails");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMeals;
