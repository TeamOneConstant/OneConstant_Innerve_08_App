import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableHighlight,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles from "../../Style/index";
const { width, height } = Dimensions.get("window");

const Describe = () => {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (inputValue.trim() !== "") {
      setProgress(0.5);

      setTimeout(() => {
        navigation.navigate("UploadRecords", { inputValue });
      }, 1000);
    } else {
      alert("Please describe your current health issue in detail."); //Warning modal to be added
    }
  };

  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"#fff"} />
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            width: RFValue(105),
            height: RFValue(20),
            top: RFValue(20),
            left: RFValue(25),
            color: "#686868",
            fontFamily: "Poppins-Regular",
            fontSize: RFValue(15),
          }}
        >
          Section 1 Of 2
        </Text>

        <ProgressBar
          width={RFValue(300)}
          height={RFValue(10)}
          progress={progress}
          style={{
            top: RFValue(30),
            left: RFValue(25),
            borderRadius: 60,
            color: "#0165FC",
          }}
        />

        <Text
          style={{
            width: RFValue(250),
            height: RFValue(30),
            top: RFValue(60),
            left: RFValue(25),
            color: "#000",
            fontFamily: "Poppins-Regular",
            fontSize: RFValue(18),
          }}
        >
          Describe Your Disease here
        </Text>

        <Text
          style={{
            width: RFValue(320),
            height: RFValue(40),
            top: RFValue(65),
            left: RFValue(25),
            color: "#686868",
            fontFamily: "Poppins-Regular",
            fontSize: RFValue(12),
          }}
        >
          Kindly provide a detailed description of your symptoms and any
          relevant medical history
        </Text>

        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={{
            width: RFValue(315),
            height: RFValue(150),
            top: RFValue(80),
            left: RFValue(25),
            padding: RFValue(8),
            textAlignVertical: "top",
            textAlign: "left",
            borderWidth: 1,
            borderRadius: 8,
            borderStyle: "solid",
            borderColor: "#0165FC",
          }}
        />

        <TouchableHighlight style={[styles.btn]} onPress={handleNext}>
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
      </View>
    </SafeAreaView>
  );
};

export default Describe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0165FC",
  },
  btn: {
    position: "absolute",
    top: height * 0.9,
    left: RFValue(20),
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(8),
  },
});
