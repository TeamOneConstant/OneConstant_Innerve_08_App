import { useFonts } from "expo-font";
import React, { useCallback, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AvailabilityTable from "../../Components/DoctorAvailability";
import Icon, { Icons } from "../../Utils/Icons";
// import DoctorAvailabilityTable from "../../Components/DoctorAvailability";

const { width, height } = Dimensions.get("window");

const DoctorData = [
  {
    id: "1",
    day: "Monday",
    time: "9:00 AM - 1:00 PM",
    hospital: "VN Desai Hospital",
  },
  {
    id: "2",
    day: "Tuesday",
    time: "9:00 AM - 1:00 PM",
    hospital: "Hinduja Hospital",
  },
  {
    id: "3",
    day: "Wednesday",
    time: "9:00 AM - 1:00 PM",
    hospital: "JJ Hospital",
  },
  {
    id: "4",
    day: "Thursday",
    time: "9:00 AM - 1:00 PM",
    hospital: "Unity General Hospital",
  },
  {
    id: "5",
    day: "Friday",
    time: "9:00 AM - 1:00 PM",
    hospital: "Shastri Hospital",
  },
  {
    id: "6",
    day: "Saturday",
    time: "9:00 AM - 1:00 PM",
    hospital: "KEM Hospital",
  },
  {
    id: "7",
    day: "Sunday",
    time: "9:00 AM - 11:00 AM",
    hospital: "VN Desai Hospital",
  },
];

function DoctorDetail({ navigation, routes }) {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const { docName, specialization } = routes.params;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#fff"} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: width * 0.9,
            alignItems: "center",
            margin: RFValue(10),
          }}
        >
          <TouchableHighlight
            onPress={() => navigation.navigate("HospitalDetail")}
            style={{
              width: RFValue(40),
              height: RFValue(40),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: RFValue(50),
              borderColor: "#E3E6ED",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={require("../../assets/images/tabler_arrow-up.png")}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
          </TouchableHighlight>

          <Text
            style={{
              fontSize: RFValue(20),
              fontFamily: "Poppins-Medium",
              color: "#000",
            }}
          >
            Doctor Details
          </Text>

          <View
            style={{
              width: RFValue(40),
              height: RFValue(40),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: RFValue(50),
              borderColor: "#E3E6ED",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={require("../../assets/images/share_img.png")}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            width: width,
            // height: height,
            flex: 1,
            flexGrow: 1,
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: width * 0.9,
                height: RFValue(100),
                margin: RFValue(5),
                display: "flex",
                flexDirection: "row",
                gap: RFValue(20),
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: RFValue(100),
                  height: RFValue(100),
                  borderRadius: RFValue(50),
                  left: 0,
                }}
              >
                <Image
                  source={require("../../assets/images/doctor_img.png")}
                  style={{
                    width: RFValue(100),
                    height: RFValue(100),
                    borderRadius: RFValue(50),
                  }}
                />
              </View>

              <View
                style={{
                  margin: RFValue(10),
                  display: "flex",
                  flexDirection: "column",
                  //   gap: RFValue(2),
                }}
              >
                {/* Verify Badge */}
                <View
                  style={{
                    width: RFValue(125),
                    height: RFValue(25),
                    backgroundColor: "rgba(1, 101, 252, 0.2)",
                    borderWidth: 1,
                    borderColor: "#E3E6ED",
                    borderRadius: RFValue(40),
                    display: "flex",
                    flexDirection: "row",
                    // padding: RFValue(5),
                    justifyContent: "center",
                    alignItems: "center",
                    // gap: RFValue(4),
                  }}
                >
                  <Icon
                    type={Icons.MaterialIcons}
                    name="verified"
                    size={RFValue(18)}
                    color="#0165FC"
                  />

                  <Text
                    numberOfLines={1}
                    style={{
                      width: RFValue(70),
                      height: RFValue(15),
                      justifyContent: "center",
                      alignSelf: "center",
                      textAlign: "center",
                      color: "#0165FC",
                      fontFamily: "Poppins-Medium",
                      fontSize: RFValue(10),
                    }}
                  >
                    Verified Doctor
                  </Text>
                </View>

                <Text
                  style={{
                    margin: RFValue(5),
                    width: RFValue(170),
                    height: RFValue(30),
                    fontFamily: "Poppins-Medium",
                    fontSize: RFValue(20),
                  }}
                >
                  {docName}
                </Text>

                <Text
                  style={{
                    width: RFValue(120),
                    height: RFValue(20),
                    color: "#929292",
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(12),
                  }}
                >
                  {specialization}
                </Text>
              </View>
            </View>

            <View
              style={{
                margin: RFValue(10),
                width: width * 0.9,
                height: RFValue(2),
                backgroundColor: "#E3E6ED",
              }}
            />

            <View
              style={{
                // margin: RFValue(5),
                width: width * 0.9,
                height: RFValue(120),
                display: "flex",
                flexDirection: "row",
                columnGap: RFValue(16),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: RFValue(60),
                  height: RFValue(60),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: "rgba(1, 101, 252, 0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RFValue(100),
                  }}
                >
                  <Image
                    source={require("../../assets/images/medical_img.png")}
                    style={{ width: RFValue(25), height: RFValue(25) }}
                  />
                </View>
                <Text
                  style={{
                    width: RFValue(50),
                    height: RFValue(20),
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    fontSize: RFValue(15),
                    color: "#0165FC",
                  }}
                >
                  10+
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(12),
                    color: "#000",
                  }}
                >
                  Year Exp
                </Text>
              </View>

              <View
                style={{
                  width: RFValue(60),
                  height: RFValue(60),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: "rgba(1, 101, 252, 0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RFValue(100),
                  }}
                >
                  <Image
                    source={require("../../assets/images/patients_img.png")}
                    style={{ width: RFValue(25), height: RFValue(25) }}
                  />
                </View>
                <Text
                  style={{
                    width: RFValue(50),
                    height: RFValue(20),
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    fontSize: RFValue(15),
                    color: "#0165FC",
                  }}
                >
                  750+
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(12),
                    color: "#000",
                  }}
                >
                  Patients
                </Text>
              </View>

              <View
                style={{
                  width: RFValue(60),
                  height: RFValue(60),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: "rgba(1, 101, 252, 0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RFValue(100),
                  }}
                >
                  <Image
                    source={require("../../assets/images/stars-received.png")}
                    style={{ width: RFValue(25), height: RFValue(25) }}
                  />
                </View>
                <Text
                  style={{
                    width: RFValue(50),
                    height: RFValue(20),
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    fontSize: RFValue(15),
                    color: "#0165FC",
                  }}
                >
                  4.9
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(12),
                    color: "#000",
                  }}
                >
                  Rating
                </Text>
              </View>

              <View
                style={{
                  width: RFValue(60),
                  height: RFValue(60),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: "rgba(1, 101, 252, 0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RFValue(100),
                  }}
                >
                  <Image
                    source={require("../../assets/images/rating_img.png")}
                    style={{ width: RFValue(20), height: RFValue(20) }}
                  />
                </View>
                <Text
                  style={{
                    width: RFValue(50),
                    height: RFValue(20),
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    fontSize: RFValue(15),
                    color: "#0165FC",
                  }}
                >
                  435
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: RFValue(12),
                    color: "#000",
                  }}
                >
                  Review
                </Text>
              </View>
            </View>

            <Text
              style={{
                // margin: RFValue(10),
                left: RFValue(20),
                fontFamily: "Poppins-Medium",
                fontSize: RFValue(18),
                // justifyContent: "flex-start",
                alignSelf: "flex-start",
                textAlign: "left",
                color: "#000",
              }}
            >
              About
            </Text>

            <Text
              style={{
                // margin: RFValue(60),
                width: width * 0.9,
                height: RFValue(80),
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
                textAlign: "left",
                color: "#929292",
              }}
            >
              Dr. Olivia Bennett, a seasoned physician at St. Mary's Hospital,
              found herself facing a day filled with both peculiar cases and
              heartwarming encounters. As she walked into the hospital, she
              couldn't have anticipated read More.
            </Text>

            <Text
              style={{
                margin: RFValue(10),
                left: RFValue(10),
                fontFamily: "Poppins-Medium",
                fontSize: RFValue(18),
                // justifyContent: "flex-start",
                alignSelf: "flex-start",
                textAlign: "left",
                color: "#000",
              }}
            >
              Available
            </Text>

            <View
              style={{
                width: width * 0.9,
                left: RFValue(5),
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                Days
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                Time
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                Hospital Name
              </Text>
            </View>

            <View
              style={{
                width: width * 0.9,
                height: RFValue(2),
                backgroundColor: "#E3E6ED",
              }}
            />

            <AvailabilityTable doctorData={DoctorData} />
          </View>
        </ScrollView>
        <TouchableHighlight style={[styles.btn]}>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(15),
              textAlign: "center",
            }}
          >
            Book Appointment
          </Text>
        </TouchableHighlight>
      </SafeAreaView>
    </>
  );
}

export default DoctorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    // justifyContent: "center",
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
