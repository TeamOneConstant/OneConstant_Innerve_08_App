import React, { useMemo, useRef, useState, useEffect } from "react";

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
import DoctorCard from "../../Components/doctor/DoctorCard";
import { getDoctorList } from "../../API/describe";
import Icon, { Icons } from "../../Utils/Icons";
const { width, height } = Dimensions.get("window");

const DoctorList = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);

  // useEffect(() => {
  //   async function fetchDoctors() {
  //     try {
  //       const doctorList = await getDoctorList();
  //       console.log(doctorList);
  //       const simplifiedDoctorList = JSON.parse(doctorList).map((doctor) => ({
  //         id: doctor.id,
  //         name: doctor.user.full_name,
  //         rating: doctor.rating,
  //         specialization: doctor.speciality.join(", "), // Assuming specialization is an array
  //       }));

  //       setDoctors(simplifiedDoctorList);
  //     } catch (error) {
  //       console.error("Error fetching doctor list:", error);
  //     }
  //   }
  //   fetchDoctors();
  // }, [doctors]);

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            // top: RFValue(height * 0.05),
            width: RFValue(40),
            height: RFValue(40),
            alignContent: "flex-start",
            alignSelf: "flex-start",
            paddingHorizontal: RFValue(15),
          }}
        >
          <TouchableHighlight
            style={{
              width: RFValue(40),
              height: RFValue(40),
              top: RFValue(height * 0.01),

              alignSelf: "flex-start",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: RFValue(50),
              borderColor: "#E3E6ED",
              borderWidth: 1,
              backgroundColor: "#fff",
            }}
          >
            <Icon type={Icons.AntDesign} name="arrowleft" color="black" />
          </TouchableHighlight>

          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              left: RFValue(width / 2.8),
              top: RFValue(-25),
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                width: RFValue(150),
                fontSize: RFValue(18),
                fontFamily: "Poppins-Medium",
                textAlign: "center",
              }}
            >
              Doctor List
            </Text>
          </View>

          <View
            style={{
              width: width * 0.9,
              height: RFValue(45),
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              //   padding: RFValue(10),
              alignItems: "center",
              alignContent: "center",
              gap: RFValue(10),
              top: RFValue(10),
              //   left: RFValue(8),
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

          <View
            style={{
              top: RFValue(50),
              gap: RFValue(20),
            }}
          >
            <DoctorCard
              // key={index}
              id={5}
              docName={"Abhishek Khandare"}
              ratings={3.9}
              specialization={"MBBS"}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DoctorList;

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
