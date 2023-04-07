import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the dashboard!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 50,
  },
});

export default DashboardScreen;
