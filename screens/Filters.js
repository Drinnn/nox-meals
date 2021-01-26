import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Filters = (props) => {
  return (
    <View style={styles.container}>
      <Text>Filters</Text>
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

export default Filters;
