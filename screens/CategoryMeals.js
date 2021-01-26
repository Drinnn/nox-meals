import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return (
    <View style={styles.container}>
      <Text>Category Meals</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetails");
        }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMeals;
