import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("window");

const CustomPicker = ({ label, selectedValue, onValueChange, items }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openPicker = () => {
    setModalVisible(true);
  };

  const closePicker = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.inputBack} onPress={openPicker}>
        <Text style={styles.selectedValue}>
          {selectedValue ? selectedValue : "Select"}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closePicker}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Picker
              style={styles.picker}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => {
                onValueChange(itemValue, itemIndex);
                closePicker();
              }}
            >
              {items.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    textAlign: "left",
    color: "black",
    width: width * 0.9,
  },
  inputBack: {
    width: width * 0.9,
    height: 50,
    borderColor: "#E3E6ED",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    marginTop: 8,
  },
  selectedValue: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "black",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 10,
    // padding: 8,
  },
  picker: {
    width: width - 32,
  },
});

export default CustomPicker;
