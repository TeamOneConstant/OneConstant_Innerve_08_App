import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { AsyncStorage } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { RFValue } from "react-native-responsive-fontsize";
import * as DocumentPicker from "expo-document-picker";
import ImagePicker from "react-native-image-picker";
import globalStyles from "../../Style/index";
import Icon, { Icons } from "../../Utils/Icons";
const { width, height } = Dimensions.get("window");

function UploadRecords() {
  const navigation = useNavigation();

  const [progress, setProgress] = useState(0);

  const handleUploadDoc = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      // document storing logic here
      if (result.type === "success") {
        setProgress(0.5);
      }

      const fileUri = result.uri;
      await AsyncStorage.setItem("fileUri", fileUri);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        alert("File not selected");
      } else {
        console.log("Error while uploading the Document", error);
      }
    }
  };

  const handleOpenCamera = () => {
    try {
      const options = {
        title: "Select Image",
        storageOptions: {
          skipBackup: true,
          path: "images",
        },
      };

      ImagePicker.launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else {
          // image storing logic here
          setProgress(1);
        }
      });
    } catch (error) {
      console.log("Error while taking the photo", error);
    }
  };

  const handleNext = () => {
    if (progress === 0.5) {
      setTimeout(() => {
        navigation.navigate("Describe");
      }, 1000);
    } else {
      // alert(
      //   "Please upload a photo / pdf of your medical report or any image containing information about your medication."
      // );
    }
  };

  const handleSkip = () => {
    navigation.navigate("Describe");
  };

  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={"#fff"} />

      <View style={{ marginHorizontal: RFValue(15) }}>
        <View
          style={{
            // flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#686868",
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(15),
            }}
          >
            Section 1 Of 2
          </Text>

          <TouchableOpacity onPress={handleSkip}>
            <Text
              style={{
                color: "#0165FC",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(15),
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <ProgressBar
          width={RFValue(300)}
          height={RFValue(6)}
          progress={progress}
          style={{
            borderRadius: 60,
            borderColor: "transparent",
            color: "#0165FC",
            marginVertical: RFValue(5),
          }}
          unfilledColor="#B0CFFE"
        />

        <Text
          style={{
            width: RFValue(320),
            height: RFValue(60),
            color: "#000",
            fontFamily: "Poppins-SemiBold",
            fontSize: RFValue(18),
            marginTop: RFValue(8),
          }}
        >
          Upload a photo of your medical report or any medicine image
        </Text>

        <Text
          style={{
            width: RFValue(320),
            height: RFValue(40),
            color: "#929292",
            fontFamily: "Poppins-Medium",
            fontSize: RFValue(12),
            marginVertical: RFValue(5),
          }}
        >
          Please upload a photo of your medical report or any image containing
          information about your medication.
        </Text>

        <TouchableOpacity
          onPress={handleUploadDoc}
          style={{
            position: "relative",
            width: RFValue(300),
            height: RFValue(200),
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            borderWidth: RFValue(1),
            borderColor: "#0165FC",
            borderRadius: 8,
          }}
        >
          <View>
            <Icon
              type={Icons.Ionicons}
              name="document-text"
              size={RFValue(50)}
              style={{
                margin: RFValue(5),
                color: "#0165FC",
                textAlign: "center",
              }}
            />

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  width: RFValue(240),
                  height: RFValue(30),
                  textAlign: "center",
                  top: RFValue(10),
                  fontFamily: "Poppins-SemiBold",
                  fontSize: RFValue(15),
                  textAlign: "center",
                }}
              >
                Select File or drag and drop file
              </Text>

              <Text
                style={{
                  width: RFValue(195),
                  height: RFValue(25),
                  alignSelf: "center",
                  fontFamily: "Poppins-Regular",
                  color: "#929292",
                  fontSize: RFValue(13),
                  textAlign: "center",
                  marginTop: RFValue(5),
                }}
              >
                for eg. pdf ,png, jpg, jpeg only
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: RFValue(15),
          }}
        >
          <View
            style={{
              flex: 1,
              height: RFValue(1),
              backgroundColor: "#929292",
            }}
          />
          <View>
            <Text
              style={{
                width: RFValue(20),
                height: RFValue(20),
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
                color: "#929292",
                marginHorizontal: RFValue(5),
              }}
            >
              OR
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: RFValue(1),
              backgroundColor: "#929292",
            }}
          />
        </View>

        <TouchableOpacity
          onPress={handleOpenCamera}
          style={{
            width: RFValue(300),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: RFValue(4),
            borderColor: "#0165FC",
            borderWidth: RFValue(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: RFValue(8),
            }}
          >
            <Icon
              type={Icons.Feather}
              name="camera"
              size={RFValue(20)}
              style={{
                margin: RFValue(5),
                color: "#0165FC",
              }}
            />

            <Text
              style={{
                color: "#0165FC",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
                marginStart: RFValue(4),
              }}
            >
              Open Camera & Take Photo
            </Text>
          </View>
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
}

export default UploadRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: RFValue(8),
  },
  btn: {
    bottom: RFValue(-150),
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(10),
    margin: RFValue(15),
  },
});
