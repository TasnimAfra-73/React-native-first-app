import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { greaterThan } from "react-native-reanimated";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View
      style={[styles.MainContainer, { alignItems: "center", paddingTop: 30 }]}
    >
      <Image source={require("./../../assets/IUT_Logo.jpg")} />
      <Text style={styles.textStyle}>Department of CSE</Text>
      <Text style={styles.textStyle}>Programme : SWE</Text>
      <View style={(styles.viewStyle, { paddingTop: 30 })}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Profile");
          }}
        >
          <Text style={styles.profiletextStyle}>My Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <Button
          title="Semester wise Course List"
          color="green"
          onPress={() => {
            props.navigation.navigate("Semesters");
          }}
        />
      </View>
      <View style={styles.viewStyle}>
        <Button
          title="List of Faculty Members"
          color="green"
          onPress={() => {
            props.navigation.navigate("Faculty List");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "green",
    paddingTop: 5,
  },
  viewStyle: {
    color: "green",
    marginVertical: 5,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "green",
  },
  profiletextStyle: {
    fontSize: 25,
    color: "green",
    borderWidth: 5,
    borderRadius: 30,
    borderColor: "green",
    paddingLeft: 10,
    paddingTop: 5,
  },
});

export default HomeScreen;
