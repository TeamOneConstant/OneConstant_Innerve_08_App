import { StyleSheet, Dimensions } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

const globalStyles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "white" },
  nav: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(6),
    marginBottom: RFValue(20),
    flexDirection: "row",
    alignItems: "center",
  },
  nav_image: {
    height: RFValue(22),
    width: RFValue(22),
    resizeMode: "contain",
    marginStart: RFValue(12),
  },
  btn: {
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(8),
  },
  topBoldText: {
    fontFamily: "Poppins-SemiBold",
    color: "black",
    paddingVertical: RFValue(5),
    fontSize: RFValue(22),
    marginTop: RFValue(10),
    marginHorizontal: RFValue(15),
  },
  smallText: {
    fontFamily: "Poppins-Medium",
    color: "#929292",
    paddingVertical: RFValue(5),
    fontSize: RFValue(14),
    marginHorizontal: RFValue(15),
  },
  btn_abs: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    marginTop: RFValue(10),
    marginBottom: RFValue(20),
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(12),
    backgroundColor: "#FFBE18",
    borderRadius: RFValue(8),
    borderWidth: 1,
    width: width * 0.92,
    marginHorizontal: RFValue(16),
  },

  inputBack: {
    margin: RFValue(15),
    width: width * 0.9,
    height: RFValue(50),
    borderColor: "#E3E6ED",
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(8),
    alignItems: "center",
    flexDirection: "row",
    paddingStart: RFValue(10),
    paddingEnd: RFValue(30),
  },
});

export default globalStyles;
