import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryMeals = (props) => {
  return (
    <View style={styles.container}>
      <Text>Category Meals</Text>
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