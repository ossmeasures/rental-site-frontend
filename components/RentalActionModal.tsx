import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { Modal, StyleSheet, Text, View } from "react-native";
import { FormInput } from "./FormInput";
import { Formik, FormikProps } from "formik";
import {
  RentalActionData,
  RentalActionSchema,
} from "../data/rental-action.model";
import {
  RentalActionButton,
  RentalCancelButton,
} from "./button/DesignedButtons";
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

const RentalActionModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderForm = (props: FormikProps<RentalActionData>) => {
    return (
      <React.Fragment>
        <FormInput
          id="postalCode"
          label="郵便番号"
          style={styles.formControl}
          placeholder="例）9999999"
          keyboardType="number-pad"
          maxLength={7}
        />

        <FormInput
          id="prefecture"
          label="都道府県"
          style={styles.formControl}
          placeholder="例）東京都"
          keyboardType="default"
          maxLength={200}
        />

        <FormInput
          id="municipality"
          label="市区町村"
          style={styles.formControl}
          placeholder="例）江東区東陽町"
          keyboardType="default"
          maxLength={200}
        />

        <FormInput
          id="address"
          label="番地"
          style={styles.formControl}
          placeholder="例）１−２−１"
          keyboardType="default"
          maxLength={200}
        />
        <FormInput
          id="buildingName"
          label="建物名"
          style={styles.formControl}
          placeholder="例）〇〇ビル３階３０２号"
          keyboardType="default"
          maxLength={200}
        />
      </React.Fragment>
    );
  };
  return (
    <View style={styles.button}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderView}>
              <Text style={styles.modalText}>レンタル手続き</Text>
            </View>

            <ScrollView>
              <Formik
                initialValues={RentalActionData.empty()}
                validationSchema={RentalActionSchema}
                onSubmit={() => alert("登録処理です")}
              >
                {renderForm}
              </Formik>
            </ScrollView>
            <View style={styles.modalBottom}>
              <View style={styles.container}>
                <RentalCancelButton
                  style={{ flex: 1, marginRight: 10 }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
                <RentalActionButton
                  style={{ flex: 3 }}
                  onPress={() => {
                    alert("レンタル処理を受け付けました");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <RentalActionButton
        onPress={() => {
          setModalVisible(true);
        }}
      />
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
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
  modalHeaderView: {
    // alignItems: "flex-end",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  modalBottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
    fontWeight: "bold",
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
  },
  formControl: {
    marginVertical: 4,
  },
});

export default RentalActionModal;
