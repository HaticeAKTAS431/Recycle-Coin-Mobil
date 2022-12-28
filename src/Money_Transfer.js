import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import Btn from "./Btn";
import Input from "./Custom_Input";
import { Request } from "./utils";
import { buttonColor2, buttonColor3 } from "./constants";
import { ToastAndroid } from "react-native";

const Money_Transfer = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await Request.requestAsync({
      method: "GET",
      path: "/info",
    });
    setUser(response);
  };

  const moneyTransfer = async (data) => {
    return Request.requestAsync({
      method: "POST",
      path: "/money-transfer",
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
      <View style={styles.Card}>
        <Text style={{ fontSize: 50, marginTop: 30, fontWeight: "bold" }}>
          {user.balance} C
        </Text>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          {user.firstName} {user.surName}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
          }}
        >
          {user.hash}
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "black",
            marginTop: 20,
          }}
        >
          Transfer
        </Text>
        <Formik
          initialValues={{ amount: "", hash: "" }}
          onSubmit={async (values, { resetForm }) => {
            await moneyTransfer({
              hash: values.hash,
              transferType: 1,
              transferAmount: values.amount,
            });
            await getUser();
            resetForm({ values: "" });
            ToastAndroid.show("Transfer successful", ToastAndroid.BOTTOM);
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <SafeAreaView>
              <Text>Amount </Text>
              <Input
                value={values.amount}
                onChangeText={handleChange("amount")}
                keyboardType="creditCardNumber"
              />
              <Text>SHA-256 Address</Text>
              <Input value={values.hash} onChangeText={handleChange("hash")} />
              <Btn
                style={{ marginTop: 20 }}
                bgColor={buttonColor2}
                Press={handleSubmit}
                textColor="white"
                btnLabel="Send Coin"
              />
            </SafeAreaView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Money_Transfer;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#07032E",
    alignItems: "center",
  },
  Card: {
    alignItems: "center",
    backgroundColor: "white",
    height: "30%",
    width: "95%",
    marginTop: "2%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "62%",
    width: "95%",
    marginTop: "5%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
