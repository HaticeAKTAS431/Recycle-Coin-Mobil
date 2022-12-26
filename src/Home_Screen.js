import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Request } from "./utils";

const Home_Screen = () => {
  const [user, setUser] = useState({});

  const init = async () => {
    try {
      const response = await Request.requestAsync({
        method: "GET",
        path: "/info",
      });
      setUser(response);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ marginVertical: 50, fontSize: 35, fontWeight: "bold" }}>
          {user.balance}
        </Text>
      </View>
      <View style={styles.container1}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          SHA-256 Address
        </Text>
        <Text>address</Text>
      </View>
      <View style={styles.container2}>
        <Text style={{ fontSize: 20, marginTop: 10 }}> geçmiş 1</Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}> geçmiş 1</Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}> geçmiş 1</Text>
      </View>
    </SafeAreaView>
  );
};
export default Home_Screen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#07032E",
    alignItems: "center",
    width: "100%",
  },
  container: {
    backgroundColor: "white",
    height: "35%",
    width: "62%",
    marginTop: "1%",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    padding: 40,
    alignItems: "center",
  },
  container1: {
    backgroundColor: "white",
    height: "20%",
    width: "90%",
    marginTop: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container2: {
    backgroundColor: "white",
    height: "35%",
    width: "90%",
    marginTop: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
