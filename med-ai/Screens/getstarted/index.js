import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import globalStyles from "../../Style/index";

const { height } = Dimensions.get("window");

function GetStarted({ navigation }) {
  const imageAspectRatio = 1080 / 872;
  const scaledWidth = Dimensions.get("window").width;
  const scaledHeight = scaledWidth / imageAspectRatio;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#0165FC"} />
        <View
          style={{
            width: scaledWidth,
            height: height * 0.7,
          }}
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../../assets/app_logo.png")}
                style={{
                  width: RFValue(30),
                  height: RFValue(30),
                }}
              />
              <Text style={[styles.logoText]}>Med-AI</Text>
            </View>
            <Image
              source={require("../../assets/images/doc_img.png")}
              style={{
                width: scaledWidth,
                height: RFValue(400),
                // margin: RFValue(0),
                top: RFValue(40),
              }}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            padding: RFValue(15),
            width: width,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: RFValue(15),
              fontFamily: "Poppins-SemiBold",
              textAlign: "center",
            }}
          >
            Unleashing the Potential of AI for Cutting Edge Medical Innovations
            Operations
          </Text>
          <Text
            style={{
              color: "#929292",
              fontSize: RFValue(12),
              fontFamily: "Poppins-SemiBold",
              marginVertical: RFValue(10),
              textAlign: "center",
            }}
          >
            In our pursuit of healthcare excellence, we are unlocking the full
            potential of artificial intelligence to spearhead
          </Text>

          <TouchableHighlight
            style={[styles.btn]}
            onPress={() => navigation.navigate("GetOTP")}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(15),
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0165FC",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "white",
    fontSize: RFValue(22),
    fontFamily: "Poppins-SemiBold",
    margin: RFValue(6),
  },
  btn: {
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(8),
    marginHorizontal: RFValue(15),
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(12),
  },
});

export default GetStarted;
