import { Button } from "@ui-kitten/components/ui";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { FormInput } from "./FormInput";
import { Formik } from "formik";
import { RentalActionData, RentalActionSchema } from "../data/rental-action.model";
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

const RentalActionModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.button}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>レンタル手続き</Text>

            <Text style={styles.modalText}>位置情報</Text>
            
            <View ><Text style={styles.modalText}>郵便番号</Text>
            <Formik initialValues={RentalActionData.empty()}
          validationSchema={RentalActionSchema}
          onSubmit={() => alert("登録処理です")}
        >
          <FormInput
        id="postalCode"
        style={styles.formControl}
        placeholder="例）9999999"
        keyboardType="number-pad"
      /></Formik>
        </View>
            <View ><Text style={styles.modalText}>都道府県</Text><Text>□</Text></View>
            <View ><Text style={styles.modalText}>市区町村</Text><Text>□</Text></View>
            <View ><Text style={styles.modalText}>番地</Text><Text>□</Text></View>
            <View ><Text style={styles.modalText}>建物名</Text><Text>□</Text></View>


            <Text style={styles.modalText}>レンタル期間</Text><Text>□</Text>
            

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Button
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        レンタルする
      </Button>
      <Text style={styles.textStyle}>Show Modal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 0.9,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
  },
  formControl:{
      marginVertical: 4,
  }
});

export default RentalActionModal;
