import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Rating from "../rating/Rating";
import Icon, { Icons } from "../../Utils/Icons";

const { width, height } = Dimensions.get("window");
const DoctorCard = ({ docImage, docName, ratings, specialization }) => {
  function ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }
  return (
    <View
      style={{
        width: width * 0.9,
        height: RFValue(200),
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: RFValue(10),
        borderWidth: RFValue(2),
        borderColor: "#E3E6ED",
        padding: RFValue(10),
        boxShadow: "0px 6px 16px 0px rgba(227, 230, 237, 0.25)",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: RFValue(120),
            height: RFValue(128),
            borderRadius: RFValue(5),
            overflow: "hidden",
          }}
        >
          <Image
            source={docImage}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: RFValue(5),
            }}
          />
        </View>

        <View
          style={{
            marginLeft: RFValue(10),
            marginTop: RFValue(-15),
            //   height: RFValue(150),
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              width: RFValue(125),
              height: RFValue(30),
              backgroundColor: "rgba(1, 101, 252, 0.2)",
              borderWidth: 1,
              borderColor: "#E3E6ED",
              borderRadius: RFValue(40),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
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
                paddingTop: RFValue(1),
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
              // marginVertical: RFValue(5),
              top: RFValue(5),
              width: RFValue(170),
              fontFamily: "Poppins-Medium",
              fontSize: RFValue(20),
            }}
          >
            {docName}
          </Text>

          <Text
            style={{
              // top: RFValue(5),
              width: RFValue(120),
              color: "#929292",
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(12),
            }}
          >
            {specialization}
          </Text>

          <Rating rating={ratings} />
        </View>
      </View>

      <View
        style={{
          // top: RFValue(20),
          width: width * 0.8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: RFValue(10),
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              //   width: RFValue(125),
              height: RFValue(40),
              marginRight: RFValue(5),
              backgroundColor: "#fff",
              borderRadius: RFValue(5),
              borderColor: "#0165FC",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#0165FC",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(12),
              }}
            >
              View Details
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              flex: 1,
              height: RFValue(40),
              marginLeft: RFValue(5),
              backgroundColor: "#0165FC",
              borderRadius: RFValue(5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(12),
              }}
            >
              Book Appointment
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;
