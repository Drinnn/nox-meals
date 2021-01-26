import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
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
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? colors.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
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
