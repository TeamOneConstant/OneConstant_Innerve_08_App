import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import Icon, { Icons } from "./Icons";
import Explore from "../Screens/Explore";
import Home from "../Screens/home";
import History from "../Screens/History";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const TabsArray = [
  {
    route: "Home",
    label: "Home",
    name: "home",
    type: Icons.Octicons,
    component: Home,
  },
  {
    route: "Explore",
    label: "Explore",
    type: Icons.MaterialIcons,
    name: "explore",
    component: Explore,
  },
  {
    route: "History",
    label: "History",
    name: "history",
    type: Icons.MaterialIcons,
    component: History,
  },
  {
    route: "Profile",
    label: "Profile",
    name: "person-outline",
    type: Icons.Ionicons,
    component: Profile,
  },
];

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
      }}
    >
      {TabsArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarLabelStyle: styles.barLabelStyle,
              tabBarActiveTintColor: "#0165FC",
              tabBarShowLabel: true,
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  type={item.type}
                  name={item.name}
                  size={RFValue(20)}
                  style={focused ? styles.activeIcon : styles.icon}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {
    color: "#0165FC",
    paddingHorizontal: RFValue(8),
    paddingTop: RFValue(6),
    // borderRadius: 10,
    backgroundColor: "transparent",
  },
  icon: {
    color: "#000",
  },
  bar: {
    height: Platform.OS === "ios" ? RFValue(78) : RFValue(55),
    position: "absolute",
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
    paddingTop: RFValue(5),
    width,
    elevation: 0,
    // backgroundColor: 'white',
    borderTopColor: "transparent",
  },
  barLabelStyle: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(10),
    color: "black",
  },
});
