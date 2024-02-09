import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import DoctorCard from "../../Components/doctor/DoctorCard";
import HospitalCard from "../../Components/hospital/HospitalCard";

const { width, height } = Dimensions.get("window");

function Home() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Describe");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#fff"} />
        <View
          style={{
            position: "relative",
            width: width,
            height: RFValue(360),
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: RFValue(15),
              left: RFValue(25),
              width: RFValue(280),
              height: RFValue(60),
              rowGap: RFValue(10),
            }}
          >
            <Text
              style={{
                width: RFValue(110),
                height: RFValue(25),
                fontSize: RFValue(23),
                fontFamily: "Poppins-Medium",
                textAlign: "left",
                color: "#000",
              }}
            >
              Dombivli
            </Text>
            <Text
              style={{
                width: RFValue(250),
                height: RFValue(20),
                fontSize: RFValue(14),
                fontFamily: "Poppins-Regular",
                textAlign: "left",
                color: "#8b8b8b",
              }}
            >
              Gharda circle, gymkhana road, Sag..
            </Text>
          </View>

          <View
            style={{
              width: RFValue(45),
              height: RFValue(45),
              top: RFValue(20),
              left: width * 0.8,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: RFValue(100),
              borderWidth: RFValue(2),
              borderColor: "#fff",
            }}
          >
            <Image
              source={require("../../assets/images/notif_black.png")}
              style={{
                width: RFValue(25),
                height: RFValue(25),
                margin: RFValue(10),
              }}
            />
          </View>

          <View
            style={{
              width: width * 0.9,
              height: RFValue(200),
              backgroundColor: "#0165FC",
              borderRadius: RFValue(10),
              top: RFValue(50),
              // alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                position: "absolute",
                top: RFValue(35),
                left: RFValue(25),
                width: RFValue(220),
                height: RFValue(90),
                fontSize: RFValue(20),
                fontFamily: "Poppins-Regular",
                textAlign: "left",
                zIndex: 1,
                color: "#fff",
              }}
            >
              AI Unveiling Your Personalized Medical Story
            </Text>

            <Image
              source={require("../../assets/images/ai-doc.png")}
              style={{
                position: "absolute",
                left: RFValue(-30),
                width: RFValue(350),
                height: RFValue(200),
              }}
            />

            <TouchableWithoutFeedback onPress={handleNavigate}>
              <View
                style={{
                  position: "absolute",
                  top: RFValue(125),
                  left: RFValue(25),
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: RFValue(2),
                  alignItems: "center",
                  backgroundColor: "#fff",
                  width: RFValue(145),
                  height: RFValue(40),
                  borderRadius: RFValue(5),
                  gap: RFValue(2),
                }}
              >
                <Image
                  source={require("../../assets/images/star-fill.png")}
                  style={{
                    width: RFValue(20),
                    height: RFValue(20),
                  }}
                />

                <Text
                  style={{
                    width: RFValue(140),
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(12),
                  }}
                >
                  Describe your disease
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              width: width * 0.9,
              height: RFValue(45),
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: RFValue(10),
              alignItems: "center",
              alignContent: "center",
              gap: RFValue(10),
              top: RFValue(60),
              left: RFValue(8),
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                width: RFValue(70),
                height: RFValue(40),
                borderRadius: RFValue(5),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0165FC",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                }}
              >
                All
              </Text>
            </View>

            <View
              style={{
                width: RFValue(70),
                height: RFValue(40),
                borderRadius: RFValue(5),
                borderWidth: RFValue(1),
                borderColor: "#D3D3D3",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                }}
              >
                Near
              </Text>
            </View>

            <View
              style={{
                width: RFValue(70),
                height: RFValue(40),
                borderRadius: RFValue(5),
                borderWidth: RFValue(1),
                borderColor: "#D3D3D3",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                }}
              >
                Doctors
              </Text>
            </View>

            <View
              style={{
                width: RFValue(70),
                height: RFValue(40),
                borderRadius: RFValue(5),
                borderWidth: RFValue(1),
                borderColor: "#D3D3D3",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                }}
              >
                Hospital
              </Text>
            </View>
          </View>

          <View style={{ marginTop: RFValue(10) }}>
            <View
              style={{
                width: width * 0.9,
                height: RFValue(35),
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-between",
                // padding: RFValue(10),
                alignItems: "center",
                top: RFValue(60),
                // left: RFValue(8),
                backgroundColor: "transparent",
                zIndex: 1,
              }}
            >
              <Text
                style={{
                  width: RFValue(150),
                  height: RFValue(35),
                  fontFamily: "Poppins-Regular",
                  color: "#000",
                }}
              >
                Recommendation
              </Text>

              <Text
                style={{
                  width: RFValue(50),
                  height: RFValue(35),
                  fontFamily: "Poppins-Regular",
                  color: "#0165FC",
                }}
              >
                See all
              </Text>
            </View>

            <ScrollView
              contentContainerStyle={{
                marginTop: RFValue(50),
                backgroundColor: "#fff",
                width: width * 0.9,
                borderRadius: RFValue(10),
                alignSelf: "center",
                justifyContent: "center",
                gap: RFValue(10),
                paddingBottom: RFValue(10),
              }}
            >
              {/* <DoctorCard />
              <HospitalCard /> */}
            </ScrollView>
          </View>
          <LinearGradient
            colors={["#0051FE", "#5C3FFB", "#A378FF", "#AC87FF"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.circularBackground}
          >
            <Image
              source={require("../../assets/images/star-white.png")}
              style={{
                width: RFValue(20),
                height: RFValue(20),
                backgroundColor: "transparent",
              }}
            />
            {/* <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/images/star-white.png")}
                style={{ width: RFValue(10), height: RFValue(10) }}
              />
              <Image
                source={require("../../assets/images/star-white.png")}
                style={{ width: RFValue(10), height: RFValue(10) }}
              />
            </View> */}
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  circularBackground: {
    position: "absolute",
    left: width * 0.8,
    top: height * 0.89,
    width: RFValue(49),
    height: RFValue(49),
    borderRadius: RFValue(100),
    paddingTop: RFValue(19),
    paddingBottom: RFValue(18),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
});
