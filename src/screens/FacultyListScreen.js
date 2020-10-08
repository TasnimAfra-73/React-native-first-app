import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyListScreen = () => {
  const Faculty = [
    { name: "Mohayeminul Islam", key: "1" },
    { name: "Tajkia Toma ", key: "2" },
    { name: "Tasnim Ahmed", key: "3" },
    { name: "Sohel Ahmed", key: "4" },
    { name: "Ridwan Kabir", key: "5" },
    { name: "Talha Ibne Aziz", key: "6" },
    { name: "Mahbub Alam ", key: "7" },
    { name: "Njayou Yousuf", key: "8" },
  ];

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Faculty}
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
    borderWidth: 10,
    borderColor: "green",
    borderRadius: 20,
    paddingTop: 15,
    paddingLeft: 20,
  },
});

export default FacultyListScreen;
