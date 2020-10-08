import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ProfileScreen = (props) => {
  console.log(props);
  return (
    <View
      style={[styles.MainContainer, { alignItems: "center", paddingTop: 60 }]}
    >
      <Image
        style={styles.logo}
        source={require("./../../assets/Profile.jpg")}
      />
      <Text style={styles.textStyle}>Name: Tasnim Jarin Afra</Text>
      <Text style={styles.textStyle}>Student ID: 170042073</Text>
      <Text style={styles.textStyle}>Room no: 107 NFHR</Text>
      <Text style={styles.textStyle}>Email: tasnimjarin@iut-dhaka.edu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 23,
    color: "green",
    paddingTop: 20,
  },
  logo: {
    width: 150,
    height: 200,
  },
});

export default ProfileScreen;
