import { View, Image, StyleSheet, Button, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Request } from "./utils";

export default function Profile() {
  const [profile, setProfile] = useState({});

  const init = async () => {
    try {
      const response = await Request.requestAsync({
        method: "GET",
        path: "/info",
      });
      setProfile(response);
    } catch (err) {
      console.log({ err });
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Image
        style={styles.photo}
        source={require("./assets/photo.png")}
      ></Image>
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>AD </Text>
        <Text
          style={{
            backgroundColor: "#e9e9e9",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
            padding: 3,
          }}
        >
          {profile.firstName}
        </Text>
        <Text style={{ fontSize: 25 }}>SOYAD </Text>
        <Text
          style={{
            backgroundColor: "#e9e9e9",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
            padding: 3,
          }}
        >
          {profile.surName}
        </Text>
        <Text style={{ fontSize: 25 }}>DOĞUM YILI </Text>
        <Text
          style={{
            backgroundColor: "#e9e9e9",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
            padding: 3,
          }}
        >
          {profile.birthyear}
        </Text>
        <Text style={{ fontSize: 25 }}>TELEFON </Text>
        <Text
          style={{
            backgroundColor: "#e9e9e9",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
            padding: 3,
          }}
        >
          {profile.phone}
        </Text>
        <Text style={{ fontSize: 25 }}>E-MAİL </Text>
        <Text
          style={{
            backgroundColor: "#e9e9e9",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
            padding: 3,
          }}
        >
          {profile.email}
        </Text>
        <Text style={{ fontSize: 25 }}>ŞİFRE </Text>
        <Text
          style={{
            backgroundColor: "#e9e9e9",
            fontSize: 20,
            borderWidth: 1,
            borderColor: "grey",
            padding: 3,
          }}
        >
          {profile.password}
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#07032E",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    height: "90%",
    width: "100%",
    marginTop: "10%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40,
  },
});
