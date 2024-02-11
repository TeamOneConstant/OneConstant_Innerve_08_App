import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../../Style/index";
import { RFValue } from "react-native-responsive-fontsize";
import OTPTextView from "react-native-otp-textinput";
import ButtonLoading from "../../Utils/BtnLoadAnimation";
import Icon, { Icons } from "../../Utils/Icons";
import { createAuthToken, loginWithPhoneNumber } from "../../API/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../../Utils/Context";
const { width } = Dimensions.get("window");

const VerifyOTP = ({ route, navigation }) => {
  const { setUserLogin, setUser } = useContext(AppContext);
  const [accepted, setAccepted] = useState(false);
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const { phoneNumber, isLogin } = route.params;

  const handleOTP = (text) => {
    if (text.length === 6) {
      setOTP(text);
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  };

  const resendOTP = () => {};
  const verify = () => {
    setLoading(true);
    loginWithPhoneNumber(phoneNumber)
      .then((data) => {
        console.log(data.authToken.access);
        AsyncStorage.setItem("user", JSON.stringify(data.authToken.access))
          .then(() => {
            setUser(data.data);
            setUserLogin(true);
            navigation.navigate("BottomTabs", { isLogin: true });
          })
          .catch((e) => {
            console.log("Can't save details");
          });
      })
      .catch((e) => {
        console.log("Error in log in: ", e);
        createAuthToken(phoneNumber)
          .then((data) => {
            console.log(data);
          })
          .catch((e) => {
            Alert.alert(
              "504 Network Error",
              "Please check your Internet Connection"
            );
          });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="never"
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={[globalStyles.main]}>
        <Text style={[globalStyles.topBoldText]}>
          Verify with OTP sent to {phoneNumber}
        </Text>
        <Text style={[globalStyles.smallText]}>
          We have sent you an One Time Password (OTP) on this mobile number
        </Text>

        <OTPTextView
          borderColor="#0165FC"
          handleTextChange={(e) => handleOTP(e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={6}
          color="black"
          inputCellLength={1}
        />

        <TouchableOpacity
          onPress={() => {
            resendOTP();
          }}
        >
          <Text style={styles.redText}>Resend OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              position: "absolute",
              bottom: 10,
              left: 0,
              right: 0,
              marginTop: RFValue(10),
              marginBottom: RFValue(20),
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(12),
              backgroundColor: "#0165FC",
              borderRadius: RFValue(8),
              borderWidth: 1,
              width: width * 0.92,
              marginHorizontal: RFValue(16),
            },
            { backgroundColor: accepted ? "#0165FC" : "grey" },
          ]}
          disabled={!accepted}
          onPress={() => {
            verify();
          }}
          underlayColor="#fff"
        >
          {loading ? (
            <ButtonLoading />
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
                  color: "white",
                  fontFamily: "Poppins-Regular",
                  fontSize: RFValue(15),
                  textAlign: "center",
                }}
              >
                Verify
              </Text>
              <Icon
                type={Icons.AntDesign}
                name="arrowright"
                size={26}
                style={{
                  margin: RFValue(4),
                  color: "white",
                }}
              />
            </View>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  textInputContainer: {
    alignSelf: "center",
    width: "100%",
    marginVertical: RFValue(16),
    color: "white",
    letterSpacing: 0,
    borderColor: "white",
  },
  roundedTextInput: {
    borderRadius: RFValue(8),
    borderWidth: RFValue(1),
    borderColor: "white",
  },
  redText: {
    color: "#0165FC",
    marginTop: RFValue(6),
    marginHorizontal: RFValue(10),
    fontSize: RFValue(14),
    textDecorationLine: "underline",
    fontFamily: "Poppins-SemiBold",
  },
});
