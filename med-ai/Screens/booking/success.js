import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
// import Success from "./success";

const { width, height } = Dimensions.get("window");

const Success = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={[styles.container]}>
      <StatusBar backgroundColor={"#fff"} />
      <View
        style={{
          width: width * 0.9,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            height: RFValue(20),
            top: RFValue(250),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/success.png")}
            style={{
              alignSelf: "center",
              width: RFValue(340),
              height: RFValue(325),
            }}
          />

          <Text
            style={{
              top: RFValue(10),
              height: RFValue(30),
              fontFamily: "Poppins-Medium",
              fontSize: RFValue(20),
              color: "#000",
            }}
          >
            Congratulations !
          </Text>

          <Text
            style={{
              top: RFValue(10),
              width: RFValue(300),
              height: RFValue(65),
              textAlign: "center",
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(14),
              color: "#5d5d5d",
            }}
          >
            Your payment has been successfully processed, and your appoinment
            has been booked
          </Text>
        </View>

        <TouchableHighlight
          style={[styles.btn2]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "#0165FC",
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(15),
              textAlign: "center",
            }}
          >
            Go To Home
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btn1: {
    position: "absolute",
    top: height * 0.8,
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(8),
  },
  btn2: {
    position: "absolute",
    top: height * 0.85,
    marginVertical: RFValue(10),
    width: width * 0.9,
    backgroundColor: "rgba(28, 80, 208, 0.06)",
    borderWidth: 1,
    borderColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(8),
  },
});
