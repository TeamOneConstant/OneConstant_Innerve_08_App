import React, { useCallback, useEffect } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
} from "react-native";
import globalStyles from "../../Style/index";
import { RFValue } from "react-native-responsive-fontsize";
import { useState } from "react";
import ButtonLoading from "../../Utils/BtnLoadAnimation";
import Icon, { Icons } from "../../Utils/Icons";

const { width } = Dimensions.get("window");

const GetOTP = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

  const handleNumber = (phoneNumber) => {
    // if (PhoneRegex.test(phoneNumber)) {
    setAccepted(true);
    setPhoneNumber(phoneNumber);
    setFormattedPhoneNumber("+91" + phoneNumber);
    // } else {
    //   setAccepted(false);
    // }
  };

  const sendOTP = () => {
    navigation.navigate("VerifyOTP", {
      phoneNumber: phoneNumber,
      isLogin: true,
    });
  };

  //   const sendOTP = () => {
  //     if (loading) return;
  //     setLoading(true);
  //     let phone = formattedPhoneNumber;

  //     try {
  //       signInWithPhoneNumber(phone).then(() => {
  //         navigation
  //           .navigate("VerifyOTP", {
  //             phoneNumber: phoneNumber,
  //             isLogin: true,
  //           })
  //           .catch((e) => {})
  //           .finally(() => {
  //             setLoading(false);
  //           });
  //       });
  //     } catch (e) {
  //       console.log(e);
  //       setLoading(false);
  //     }
  //   };

  const handleOTPless = () => {};

  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="never"
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={[globalStyles.main]}>
        <Text style={[globalStyles.topBoldText]}>Enter your mobile number</Text>
        <Text style={[globalStyles.smallText]}>
          We will send you an One Time Password (OTP) on this mobile number
        </Text>

        <View style={globalStyles.inputBack}>
          <Icon
            type={Icons.Feather}
            name="phone"
            size={RFValue(20)}
            style={{
              margin: RFValue(5),
              color: "#0165FC",
            }}
          />
          <TextInput
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(14),
              color: "black",
              marginHorizontal: RFValue(15),
            }}
            underlineColorAndroid="transparent"
            placeholder="Mobile number"
            keyboardType="numeric"
            placeholderTextColor="#989898"
            autoCapitalize="none"
            onChangeText={handleNumber}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            padding: RFValue(3),
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            bottom: RFValue(50),
            // left: 0,
            // right: 0,
          }}
        >
          <TouchableHighlight
            style={{
              marginTop: RFValue(8),
              marginBottom: RFValue(2),
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(8),
              backgroundColor: accepted ? "#0165FC" : "#E3E6ED",
              borderRadius: RFValue(8),
              borderColor: accepted ? "#E3E6ED" : "#0165FC",
              borderWidth: RFValue(1),
              width: width * 0.9,
              marginHorizontal: RFValue(15),
            }}
            disabled={!accepted}
            onPress={() => {
              sendOTP();
            }}
            underlayColor="#E3E6ED"
          >
            {loading ? (
              <ButtonLoading></ButtonLoading>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: accepted ? "white" : "black",
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(15),
                    textAlign: "center",
                  }}
                >
                  Get OTP
                </Text>
                <Icon
                  type={Icons.AntDesign}
                  name="arrowright"
                  size={26}
                  style={{
                    margin: RFValue(4),
                    color: accepted ? "white" : "black",
                  }}
                />
              </View>
            )}
          </TouchableHighlight>
          <View style={{ margin: RFValue(5) }}></View>
          <TouchableHighlight
            style={{
              marginTop: RFValue(2),
              marginBottom: RFValue(30),
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(8),
              backgroundColor: "#fff",
              borderRadius: RFValue(8),
              borderWidth: RFValue(1),
              borderColor: "#0165FC",
              width: width * 0.9,
              marginHorizontal: RFValue(15),
            }}
            // disabled={!accepted}
            onPress={handleOTPless}
            underlayColor="#929292"
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                type={Icons.FontAwesome5}
                name="whatsapp"
                size={26}
                style={{
                  margin: RFValue(4),
                  color: "#1FAF38",
                }}
              />
              {loading ? (
                <ButtonLoading></ButtonLoading>
              ) : (
                <Text
                  style={[
                    {
                      fontSize: RFValue(15),
                      marginStart: RFValue(4),
                      textTransform: "none",
                      fontFamily: "Poppins-Medium",
                      color: "#0165FC",
                    },
                  ]}
                >
                  Sign up with OTP Less
                </Text>
              )}
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default GetOTP;

const styles = StyleSheet.create({
  inputBack: {
    margin: RFValue(15),
    // width: width * 0.9,
    height: RFValue(50),
    borderColor: "#E3E6ED",
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(8),
    alignItems: "center",
    flexDirection: "row",
    paddingStart: RFValue(10),
    paddingEnd: RFValue(30),
  },
});
