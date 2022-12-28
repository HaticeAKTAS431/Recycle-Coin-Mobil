import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import Btn from "./Btn";
import Input from "./Custom_Input";
import { Request } from "./utils";
import { buttonColor2, buttonColor3 } from "./constants";
import { ToastAndroid } from "react-native";

const SSS = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await Request.requestAsync({
      method: "GET",
      path: "/info ",
    });
    setUser(response);
  };

  const Recycle = async (data) => {
    return Request.requestAsync({
      method: "POST",
      path: "/recycling-response",
      data,
    });
  };

  const init = async () => {
    try {
      await getUser();
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <SafeAreaView style={styles.root}>
      <Formik
        initialValues={{ materielName: "", materialTypeId: "" }}
        onSubmit={async (values, { resetForm }) => {
          await Recycle({
            materialTypeId: 1,
            materielName: values.materielName,
            materialTypeId: values.materialTypeId,
          });
          await getUser();
          resetForm({ values: "" });
          ToastAndroid.show("Transfer successful", ToastAndroid.BOTTOM);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <SafeAreaView>
            <Input
              value={values.materielName}
              onChangeText={handleChange("materielName")}
            />
            <Input
              value={values.materialTypeId}
              onChangeText={handleChange("materielTypeId")}
            />
            <Btn
              style={{ marginTop: 20 }}
              bgColor="white"
              Press={handleSubmit}
              textColor="#07032E"
              btnLabel=" Recycle Coin"
            />
          </SafeAreaView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SSS;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#07032E",
    alignItems: "center",
  },
});
