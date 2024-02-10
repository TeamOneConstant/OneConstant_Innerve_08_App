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
  TouchableOpacity,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles from "../../Style/index";
import { predictDisease } from "../../API/describe";
const { width, height } = Dimensions.get("window");

const Describe = () => {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(0.5);

  const handleNext = () => {
    if (inputValue.trim() !== "") {
      setProgress(1);

      predictDisease(inputValue)
        .then((res) => {
          console.log(res);
          navigation.navigate("Report", {
            disease: res.data.disease,
            description: res.data.description,
            firstAid: res.data.first_aid,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Please describe your current health issue in detail."); //Warning modal to be added
    }
  };

  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={"#fff"} />
      <View style={{ marginHorizontal: RFValue(15) }}>
        <Text
          style={{
            color: "#686868",
            fontFamily: "Poppins-Regular",
            fontSize: RFValue(15),
          }}
        >
          Section 2 Of 2
        </Text>

        <ProgressBar
          width={RFValue(300)}
          height={RFValue(6)}
          progress={progress}
          style={{
            borderRadius: 60,
            color: "#0165FC",
            borderColor: "transparent",
            marginVertical: RFValue(5),
          }}
          unfilledColor="#B0CFFE"
        />

        <Text
          style={{
            color: "#000",
            fontFamily: "Poppins-SemiBold",
            fontSize: RFValue(18),
            marginVertical: RFValue(10),
          }}
        >
          Describe Your Disease here
        </Text>

        <Text
          style={{
            width: RFValue(320),
            height: RFValue(40),
            color: "#686868",
            fontFamily: "Poppins-Medium",
            fontSize: RFValue(12),
            marginBottom: RFValue(5),
          }}
        >
          Kindly provide a detailed description of your symptoms and any
          relevant medical history
        </Text>

        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          multiline={true}
          style={{
            height: RFValue(150),
            padding: RFValue(10),
            textAlignVertical: "top",
            textAlign: "left",
            borderWidth: RFValue(1),
            borderRadius: 8,
            borderStyle: "solid",
            borderColor: "#0165FC",
            fontFamily: "Poppins-Regular",
            fontSize: RFValue(14),
            flexWrap: "wrap",
            // textAlign: "justify",
          }}
        />

        <TouchableOpacity style={[styles.btn]} onPress={handleNext}>
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
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Describe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: RFValue(8),
  },
  btn: {
    bottom: RFValue(-300),
    width: width * 0.88,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(10),
    // margin: RFValue(15),
  },
});
