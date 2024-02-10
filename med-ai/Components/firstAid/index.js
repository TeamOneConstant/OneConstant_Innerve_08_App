import React, { useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const BulletPoints = ({ aidData }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        // marginHorizontal: RFValue(15),
        // marginRight: RFValue(20),
        // gap: RFValue(10),
      }}
    >
      {aidData.map((item, index) => (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            top: RFValue(10),
            marginHorizontal: RFValue(15),
          }}
        >
          <View
            style={{
              width: width * 0.9,
              display: "flex",
              flexDirection: "row",
              gap: RFValue(10),
            }}
          >
            <Text
              style={{
                color: "#0165FC",
                fontSize: RFValue(16),
              }}
            >
              {"\u25CF"}
            </Text>

            <Text
              style={{
                color: "#000",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
              }}
            >
              {item}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default BulletPoints;
