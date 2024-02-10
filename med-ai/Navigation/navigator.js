import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../Screens/getstarted";
import VerifyOTP from "../Screens/auth/VerifyOTP";
import GetOTP from "../Screens/auth/GetOTP";
import CompleteProfile from "../Screens/auth/CompleteProfile";
import Home from "../Screens/home";
import Describe from "../Screens/description/Describe";
import UploadRecords from "../Screens/description/UploadRecords";
import BottomTabs from "../Utils/BottomTabs";
import ReportScreen from "../Screens/report/Report";
import DoctorList from "../Screens/doctor/doctorlist";
import Booking from "../Screens/booking";
import Success from "../Screens/booking/success";

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
      <Stack.Screen
        name="Describe"
        component={Describe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadRecords"
        component={UploadRecords}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Report"
        component={ReportScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorList"
        component={DoctorList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
