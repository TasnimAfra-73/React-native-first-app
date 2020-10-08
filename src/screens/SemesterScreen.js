import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SemesterScreen = (props) => {
  return (
    <View style={[styles.MainContainer, { paddingTop: 100 }]}>
      <View style={styles.viewStyle}>
        <Button
          title="First Semester"
          color="green"
          onPress={() => {
            props.navigation.navigate("Course List", "First");
          }}
        />
      </View>
      <View style={styles.viewStyle}>
        <Button
          title="Second Semester"
          color="green"
          onPress={() => {
            props.navigation.navigate("Course List", "Second");
          }}
        />
      </View>
      <View style={styles.viewStyle}>
        <Button
          title="Third Semesters"
          color="green"
          onPress={() => {
            props.navigation.navigate("Course List", "Three");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 20,
    borderWidth: 10,
    borderRadius: 30,
    borderColor: "green",
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default SemesterScreen;
