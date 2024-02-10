import React, { useMemo, useRef, useState } from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import BulletPoints from "../../Components/firstAid";
import Icon, { Icons } from "../../Utils/Icons";
// import MySheet from "../../Components/BottomSheet";

const { width, height } = Dimensions.get("window");

function Report({ navigation, route }) {
  const { disease, description, firstAid } = route.params;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            // flex: 1,
            alignContent: "flex-start",
            alignSelf: "flex-start",
            paddingHorizontal: RFValue(15),
          }}
        >
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <TouchableHighlight
              style={{
                width: RFValue(40),
                height: RFValue(40),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: RFValue(20),
                borderColor: "#E3E6ED",
                borderWidth: RFValue(1),
                backgroundColor: "#fff",
              }}
            >
              <Icon type={Icons.AntDesign} name="arrowleft" color="black" />
            </TouchableHighlight>

            <Text
              numberOfLines={1}
              style={{
                fontSize: RFValue(18),
                fontFamily: "Poppins-Medium",
              }}
            >
              Medical Report
            </Text>
          </View>

          <View
            style={{
              width: width * 0.9,
              height: RFValue(60),
              alignContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "Poppins-Medium",
                color: "#0165FC",
              }}
            >
              Disease
            </Text>

            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "Poppins-Medium",
                color: "#000",
              }}
            >
              {disease}
            </Text>
          </View>

          <View
            style={{
              top: RFValue(10),
              width: width * 0.9,
              height: RFValue(100),
              alignContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "Poppins-Medium",
                color: "#0165FC",
              }}
            >
              Details
            </Text>

            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "Poppins-Regular",
                textAlign: "justify",
                color: "#000",
              }}
            >
              {description}
            </Text>
          </View>

          <View
            style={{
              top: RFValue(60),
              width: width * 0.9,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "Poppins-Medium",
                color: "#0165FC",
              }}
            >
              First Aid
            </Text>

            <BulletPoints aidData={firstAid} />
          </View>

          <TouchableHighlight
            onPress={() => navigation.navigate("DoctorList")}
            style={[styles.btn]}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(15),
                textAlign: "center",
              }}
            >
              Continue
            </Text>
          </TouchableHighlight>

          {/* <MySheet /> */}
        </View>
      </SafeAreaView>
    </>
  );
}

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    position: "absolute",
    top: height * 0.82,
    // left: RFValue(20),
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(8),
    margin: RFValue(15),
  },
});
