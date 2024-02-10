import React, { useRef, useState } from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon, { Icons } from "../../Utils/Icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomPicker from "../../Components/CustomPicker";
import { bookAppointment } from "../../API/describe";

const { width, height } = Dimensions.get("window");

function Booking({ navigation, route }) {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const { docId } = route.params;
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [selectedGender, setSelectedGender] = useState();
  const [selectedUser, setSelectedUser] = useState();
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

  const handleTimeSelection = (selectedTime) => {
    setTime(selectedTime);
  };

  const handleBooking = async () => {
    const id = docId;

    if (
      !date ||
      !time ||
      !selectedUser ||
      !name ||
      !selectedGender ||
      !phone ||
      !age
    ) {
      Alert.alert("Please fill in all fields");
      return;
    }

    try {
      await bookAppointment(
        // docId,
        date,
        time,
        selectedUser,
        name,
        selectedGender,
        phone,
        age
      );

      navigation.navigate("Congratulation");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.headerContainer}>
        <TouchableHighlight style={styles.arrowButton}>
          <Image
            source={require("../../assets/images/tabler_arrow-up.png")}
            style={styles.arrowIcon}
          />
        </TouchableHighlight>

        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            Add Detail
          </Text>
        </View>

        {/*  */}

        <View
          style={{
            top: RFValue(60),
            width: width * 0.9,
            height: RFValue(200),
            border: "1px solid #E3E6ED",
          }}
        >
          <Text
            style={{
              display: "flex",
              flexDirection: "row",
              fontFamily: "Poppins-Regular",
              fontSize: RFValue(20),
            }}
          >
            Book appointment
          </Text>

          <TouchableOpacity
            style={{
              width: width * 0.9,
              top: RFValue(-15),
              height: RFValue(50),
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={showDatepicker}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                alignContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: RFValue(14),
                  color: "black",
                  // marginHorizontal: RFValue(10),
                }}
              >
                {date === null
                  ? "Choose a Day"
                  : date.getDate() +
                    "/" +
                    Number(date.getMonth()) +
                    1 +
                    "/" +
                    date.getFullYear()}
              </Text>

              <Icon
                type={Icons.Fontisto}
                name="date"
                size={RFValue(20)}
                style={{
                  margin: RFValue(5),
                  color: "#000",
                }}
              />
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

          {/* <View
            style={{
              width: width * 0.9,
              height: RFValue(45),
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              gap: RFValue(10),
              top: RFValue(-20),
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0165FC",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                  fontSize: RFValue(13),
                }}
              >
                Today
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                18 Feb
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins-Regular",
                  fontSize: RFValue(13),
                }}
              >
                Monday
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                19 Feb
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins-Regular",
                  fontSize: RFValue(13),
                }}
              >
                Tuesday
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                20 Feb
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                borderWidth: RFValue(1),
                borderColor: "#F00",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "rgba(255, 0, 0, 0.20)",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: RFValue(13),
                }}
              >
                Friday
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                21 Feb
              </Text>
            </View>
          </View> */}
          {[
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "13:00 PM",
            "14:00 PM",
            "15:00 PM",
          ].map((timeSlot, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTimeSelection(timeSlot)}
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: time === timeSlot ? "#0165FC" : "#fff",
              }}
            >
              <Text
                style={{
                  color: time === timeSlot ? "#fff" : "#000",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                {timeSlot}
              </Text>
            </TouchableOpacity>
          ))}

          <View
            style={{
              width: width * 0.9,
              top: RFValue(-25),
              justifyContent: "space-between",
              height: RFValue(50),
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(14),
              }}
            >
              Choose a Time
            </Text>
            <Icon
              type={Icons.AntDesign}
              name="clockcircleo"
              size={RFValue(18)}
              color="#000"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              width: width * 0.9,
              height: RFValue(45),
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              gap: RFValue(10),
              top: RFValue(-20),
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                9:00 AM
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                10: AM
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                borderRadius: RFValue(5),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0165FC",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                11:00 AM
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                12:00
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                13:00
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                14:00
              </Text>
            </View>

            <View
              style={{
                width: RFValue(80),
                height: RFValue(50),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: RFValue(15),
                }}
              >
                15:00
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* Apply scroll view here */}
        <View
          style={{
            position: "absolute",
            width: width * 0.9,
            top: RFValue(270),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomPicker
            label="Booking for"
            selectedValue={selectedUser}
            onValueChange={(itemValue, itemIndex) => setSelectedUser(itemValue)}
            items={[
              { label: "Other", value: "Other" },
              { label: "Self", value: "Self" },
            ]}
          />

          <Text style={[styles.fieldText]}>Name</Text>
          <View style={styles.inputBack}>
            <TextInput
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 15,
                textAlign: "left",
                color: "#000",
                width: width * 0.9,
                marginHorizontal: RFValue(10),
              }}
              underlineColorAndroid="transparent"
              placeholder="Enter your name"
              placeholderTextColor="#000"
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              value={name}
              onChangeText={(ev) => setName(ev.target.value)}
            />
          </View>

          <CustomPicker
            label="Gender"
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGender(itemValue)
            }
            items={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
          />

          <Text style={[styles.fieldText]}>Mobile No.</Text>
          <View style={styles.inputBack}>
            <TextInput
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 15,
                textAlign: "left",
                color: "#000",
                width: width * 0.9,
                marginHorizontal: RFValue(10),
              }}
              underlineColorAndroid="transparent"
              placeholder="+91"
              placeholderTextColor="#000"
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              value={phone}
              onChangeText={(ev) => setPhone(ev.target.value)}
            />
          </View>

          <Text style={[styles.fieldText]}>Age</Text>
          <View style={styles.inputBack}>
            <TextInput
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 15,
                textAlign: "left",
                color: "#000",
                width: width * 0.9,
                marginHorizontal: RFValue(10),
              }}
              underlineColorAndroid="transparent"
              placeholder="Enter your age"
              placeholderTextColor="#000"
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              value={age}
              onChangeText={(ev) => setAge(ev.target.value)}
            />
          </View>
        </View>

        <TouchableHighlight
          style={[styles.btn]}
          onPress={() => navigation.navigate("")}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-Regular",
                fontSize: RFValue(15),
                textAlign: "center",
              }}
            >
              Done
            </Text>
            <Icon
              type={Icons.AntDesign}
              name="arrowright"
              size={20}
              style={{
                margin: RFValue(4),
                color: "white",
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    display: "flex",
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    marginTop: RFValue(10),
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    position: "absolute",
    top: RFValue(5),
    left: RFValue(10),
    width: RFValue(40),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    borderColor: "#E3E6ED",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  arrowIcon: {
    width: RFValue(25),
    height: RFValue(25),
  },
  titleContainer: {
    flex: 1,
    position: "absolute",
    top: RFValue(10),
    left: RFValue(115),
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    width: RFValue(150),
    fontSize: RFValue(18),
    fontFamily: "Poppins-Medium",
  },
  inputBack: {
    margin: RFValue(10),
    width: width * 0.9,
    height: RFValue(50),
    borderColor: "#E3E6ED",
    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    alignItems: "center",
    flexDirection: "row",
    padding: RFValue(8),
  },
  fieldText: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(15),
    textAlign: "left",
    color: "black",
    width: width * 0.9,
  },
  btn: {
    position: "absolute",
    top: height * 0.9,
    width: width * 0.9,
    backgroundColor: "#0165FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(4),
    padding: RFValue(8),
  },
});

export default Booking;
