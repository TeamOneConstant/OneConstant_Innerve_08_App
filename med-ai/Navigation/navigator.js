import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../Screens/getstarted";
import VerifyOTP from "../Screens/auth/VerifyOTP";
import GetOTP from "../Screens/auth/GetOTP";
import CompleteProfile from "../Screens/auth/CompleteProfile";
import Home from "../Screens/home";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetOTP"
        component={GetOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
