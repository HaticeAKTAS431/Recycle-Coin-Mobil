import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Request } from "./utils";
import { useIsFocused } from "@react-navigation/native";

const Home_Screen = () => {
  const [user, setUser] = useState({});
  const [transferHistory, setTransferHistory] = useState([]);
  const isFocused = useIsFocused();

  const getUser = async () => {
    const response = await Request.requestAsync({
      method: "GET",
      path: "/info",
    });
    setUser(response);
  };

  const getTransferHistory = async () => {
    const response = await Request.requestAsync({
      method: "GET",
      path: "/money-transfer",
      params: { limit: 3 },
    });
    setTransferHistory(response);
  };

  const init = async () => {
    try {
      await getUser();
      await getTransferHistory();
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    init();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ marginVertical: 45, fontSize: 50, fontWeight: "bold" }}>
          {user.balance} C
        </Text>
      </View>
      <View style={styles.container1}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginHorizontal: 50,
            marginTop: 10,
          }}
        >
          SHA-256 Address
        </Text>
        <Text style={{ padding: 10, fontSize: 20 }}>{user.hash}</Text>
      </View>
      <View style={styles.container2}>
        {transferHistory.map((histroy) => {
          return (
            <Text key={histroy.id} style={{ fontSize: 20, marginTop: 10 }}>
              {histroy.senderFirstName}
            </Text>
          );
        })}
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
