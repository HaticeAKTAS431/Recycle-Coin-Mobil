import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "./Btn";
import { buttonColor2, buttonColor3 } from "./constants";
import { Formik } from "formik";
import Input from "./Custom_Input";
import { Request } from "./utils";

const SignUp_Screen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
        ></Image>
        <View style={styles.container}>
          <Text style={{ fontWeight: "bold", fontSize: 30, color: "black" }}>
            WELCOME{" "}
          </Text>
          <Formik
            initialValues={{
              firstName: "",
              surName: "",
              identityNo: "",
              birthyear: "",
              phone: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              try {
                const response = await Request.requestAsync({
                  method: "POST",
                  path: "/register",
                  data: values,
                });
                if (response) {
                  props.navigation.navigate("Login");
                }
              } catch (err) {
                console.log({ err: err.message });
              }
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <SafeAreaView>
                <Input
                  placeholder="Name..."
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                />
                <Input
                  placeholder="Surname..."
                  value={values.surName}
                  onChangeText={handleChange("surName")}
                />
                <Input
                  placeholder="TC No..."
                  value={values.identityNo}
                  onChangeText={handleChange("identityNo")}
                  keyboardType="phone-pad"
                />
                <Input
                  placeholder="Birthday Date..."
                  value={values.birthyear}
                  onChangeText={handleChange("birthyear")}
                  keyboardType="birthdate-full"
                />
                <Input
                  placeholder="Phonenumber..."
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  keyboardType="phone-pad"
                />
                <Input
                  placeholder="E-mail..."
                  value={values.email}
                  onChangeText={handleChange("email")}
                  keyboardType="email-address"
                />

                <Input
                  placeholder="Password..."
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secureTextEntry={true}
                />
                <Btn
                  bgColor={buttonColor2}
                  Press={handleSubmit}
                  textColor="white"
                  btnLabel="Sign Up"
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>
                    Already have an account ?
                  </Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Login")}
                  >
                    <Text
                      style={{
                        color: "yellow ",
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp_Screen;
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#07032E",
    alignItems: "center",
  },
  logo: {
    marginTop: 30,
    marginRight: 30,
  },
  container: {
    backgroundColor: "white",
    height: "80%",
    width: "100%",
    marginTop: "7%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
});
