import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FacultyListScreen from "./src/screens/FacultyListScreen";
import SemesterScreen from "./src/screens/SemesterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CourseListScreen from "./src/screens/CourseListScreen";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
        <stack.Screen
          name="Faculty List"
          component={FacultyListScreen}
          options={{
            title: "Faculty List",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
        <stack.Screen
          name="Semesters"
          component={SemesterScreen}
          options={{
            title: "Semesters",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
        <stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
        <stack.Screen
          name="Course List"
          component={CourseListScreen}
          options={{
            title: "Course List",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
