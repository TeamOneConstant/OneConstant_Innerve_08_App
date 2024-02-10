import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;

    for (let i = 1; i <= integerPart; i++) {
      stars.push(
        <FontAwesome key={i} name="star" size={RFValue(22)} color="#FFD700" />
      );
    }

    if (decimalPart > 0) {
      stars.push(
        <FontAwesome
          key={integerPart + 1}
          name="star-half-full"
          size={RFValue(18)}
          color="#FFD700"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 1; i <= remainingStars; i++) {
      stars.push(
        <FontAwesome
          key={integerPart + 1 + i}
          name="star-o"
          size={RFValue(18)}
          color="#FFD700"
        />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>{renderStars()}</View>
      <Text style={styles.ratingNumber}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: RFValue(145),
    height: RFValue(25),
    gap: RFValue(15),
    top: RFValue(10),
    flexDirection: "row",
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
    gap: RFValue(5),
  },
  ratingNumber: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#000",
    marginTop: 2,
  },
});

export default Rating;
