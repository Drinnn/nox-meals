import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetails = (props) => {
  return (
    <View style={styles.container}>
      <Text>Meal Details</Text>
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

export default MealDetails;
