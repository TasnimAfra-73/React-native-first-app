import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const CourseListScreen = (props) => {
  let semester = props.route.params;
  console.log(semester);
  let coursedata;
  const CourseList1 = [
    { name: "CSE 4101", key: "1" },
    { name: "CSE 4102", key: "2" },
    { name: "CSE 4103", key: "3" },
    { name: "CSE 4104", key: "4" },
    { name: "CSE 4105", key: "5" },
    { name: "CSE 4106", key: "6" },
    { name: "CSE 4107", key: "7" },
    { name: "CSE 4108", key: "8" },
    { name: "CSE 4109", key: "9" },
  ];

  const CourseList2 = [
    { name: "CSE 4201", key: "1" },
    { name: "CSE 4202", key: "2" },
    { name: "CSE 4203", key: "3" },
    { name: "CSE 4204", key: "4" },
    { name: "CSE 4205", key: "5" },
    { name: "CSE 4206", key: "6" },
    { name: "CSE 4207", key: "7" },
    { name: "CSE 4208", key: "8" },
    { name: "CSE 4209", key: "9" },
  ];

  const CourseList3 = [
    { name: "CSE 4301", key: "1" },
    { name: "CSE 4302", key: "2" },
    { name: "CSE 4303", key: "3" },
    { name: "CSE 4304", key: "4" },
    { name: "CSE 4305", key: "5" },
    { name: "CSE 4306", key: "6" },
    { name: "CSE 4307", key: "7" },
    { name: "CSE 4308", key: "8" },
    { name: "CSE 4309", key: "9" },
  ];

  if (semester == "First") {
    coursedata = CourseList1;
  } else if (semester == "Second") {
    coursedata = CourseList2;
  } else {
    semester = "Third";
    coursedata = CourseList3;
  }
  return (
    <View
      style={[styles.MainContainer, { alignItems: "center", paddingTop: 20 }]}
    >
      <Text
        style={[
          styles.textStyle,
          {
            fontSize: 20,
            marginTop: 10,
            alignItems: "center",
          },
        ]}
      >
        {semester} Semester
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={coursedata}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>{item.key + ". " + item.name}</Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "green",
    marginVertical: 20,
  },
});

export default CourseListScreen;
