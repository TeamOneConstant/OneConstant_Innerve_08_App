import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";
import globalStyles from "../../Style/index";
import { RFValue } from "react-native-responsive-fontsize";
import Icon, { Icons } from "../../Utils/Icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import * as Location from "expo-location";

const { height } = Dimensions.get("window");

const CompleteProfile = ({ navigation }) => {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [selectedGender, setSelectedGender] = useState();
  const [loading, setLoading] = useState();
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleName = (name) => {
    if (name !== "") {
      setName(name);
    }
  };

  const handleEmail = (email) => {
    if (email !== "") {
      setEmail(email);
    }
  };

  const handleAddress = (address) => {
    if (address !== "") {
      setAddress(address);
    }
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Location permission denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(JSON.stringify(location));
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      console.log(addressResponse[0]);
      setAddress(addressResponse[0].formattedAddress);
    } catch (error) {
      console.error("Error requesting location permission:", error);
    }
  };

  return (
    <ScrollView
      componentContainerStyle={{
        flex: 1,
        height: height,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          height: height,
          backgroundColor: "#fff",
        }}
      >
        <Text style={[globalStyles.topBoldText, { textAlign: "center" }]}>
          Complete Your Profile
        </Text>
        <Text style={[globalStyles.smallText, { textAlign: "center" }]}>
          Please take a moment to complete your profile with accurate and
          up-to-date information.
        </Text>
        <Text style={[styles.fieldText]}>Full Name</Text>
        <View style={styles.inputBack}>
          <Icon
            type={Icons.Octicons}
            name="person"
            size={RFValue(20)}
            style={{
              margin: RFValue(5),
              color: "#0165FC",
            }}
          />
          <TextInput
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(14),
              color: "black",
              marginHorizontal: RFValue(10),
            }}
            underlineColorAndroid="transparent"
            placeholder="Enter your Full Name"
            keyboardType="name"
            placeholderTextColor="#989898"
            autoCapitalize="none"
            onChangeText={handleName}
          />
        </View>
        <Text style={[styles.fieldText]}>Date of Birth</Text>

        <TouchableOpacity style={styles.inputBack} onPress={showDatepicker}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              type={Icons.Fontisto}
              name="date"
              size={RFValue(20)}
              style={{
                margin: RFValue(5),
                color: "#0165FC",
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
                color: "#989898",
                marginHorizontal: RFValue(10),
              }}
            >
              {date === null
                ? "Enter your Date of Birth"
                : date.getDate() +
                  "/" +
                  Number(date.getMonth()) +
                  1 +
                  "/" +
                  date.getFullYear()}
            </Text>
          </View>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={mode}
            onChange={onChange}
            dateFormat="DD/MM/YYYY"
          />
        )}

        <Text style={[styles.fieldText]}>Gender</Text>
        <View style={styles.inputBack}>
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="gender-male"
            size={RFValue(20)}
            style={{
              margin: RFValue(5),
              color: "#0165FC",
            }}
          />
          <Picker
            style={{ width: width * 0.8 }}
            enabled={true}
            dropdownIconColor={"black"}
            itemStyle={{ fontFamily: "Poppins-Medium", color: "black" }}
            ref={pickerRef}
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGender(itemValue)
            }
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>
        <Text style={[styles.fieldText]}>Email</Text>
        <View style={styles.inputBack}>
          <Icon
            type={Icons.Ionicons}
            name="mail-outline"
            size={RFValue(20)}
            style={{
              margin: RFValue(5),
              color: "#0165FC",
            }}
          />
          <TextInput
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(14),
              color: "black",
              marginHorizontal: RFValue(10),
            }}
            underlineColorAndroid="transparent"
            placeholder="Enter your Email ID"
            keyboardType="email-address"
            placeholderTextColor="#989898"
            autoCapitalize="none"
            onChangeText={handleEmail}
          />
        </View>
        <Text style={[styles.fieldText]}>Address</Text>
        <View style={styles.inputBack}>
          <Icon
            type={Icons.Ionicons}
            name="location-outline"
            size={RFValue(20)}
            style={{
              margin: RFValue(5),
              color: "#0165FC",
            }}
          />
          {location ? (
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
                color: "black",
                marginHorizontal: RFValue(10),
              }}
            >
              {address}
            </Text>
          ) : (
            <TextInput
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
                color: "black",
                marginHorizontal: RFValue(10),
              }}
              underlineColorAndroid="transparent"
              placeholder="Enter your address"
              keyboardType="name-phone-pad"
              placeholderTextColor="#989898"
              autoCapitalize="none"
              onChangeText={handleAddress}
            />
          )}
        </View>
        <TouchableHighlight onPress={getLocation}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: RFValue(15),
            }}
          >
            <Icon
              type={Icons.FontAwesome}
              name="send"
              size={RFValue(18)}
              style={{
                margin: RFValue(5),
                color: "#0165FC",
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: RFValue(14),
                color: "black",
                marginHorizontal: RFValue(10),
              }}
            >
              Use my current location
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            marginTop: RFValue(50),
            marginBottom: RFValue(30),
            paddingHorizontal: RFValue(20),
            paddingVertical: RFValue(10),
            alignSelf: "center",
            backgroundColor: "#0165FC",
            borderRadius: RFValue(8),
            borderWidth: RFValue(1),
            borderColor: "#fff",
            width: width * 0.9,
            marginHorizontal: RFValue(15),
          }}
          // disabled={!accepted}
          onPress={() => navigation.navigate("Home")}
          underlayColor="#929292"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loading ? (
              <ButtonLoading></ButtonLoading>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    {
                      fontSize: RFValue(15),
                      marginStart: RFValue(4),
                      textTransform: "none",
                      fontFamily: "Poppins-Medium",
                      color: "white",
                    },
                  ]}
                >
                  Continue
                </Text>
                <Icon
                  type={Icons.AntDesign}
                  name="arrowright"
                  size={26}
                  style={{
                    margin: RFValue(4),
                    color: "white",
                  }}
                />
              </View>
            )}
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CompleteProfile;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  inputBack: {
    marginHorizontal: RFValue(15),
    // width: width * 0.9,
    height: RFValue(50),
    borderColor: "#E3E6ED",
    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    alignItems: "center",
    flexDirection: "row",
    padding: RFValue(8),
    marginVertical: RFValue(8),
  },
  fieldText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(14),
    color: "black",
    marginHorizontal: RFValue(15),
  },
});
