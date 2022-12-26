import * as React from "react";
import { CurrentService } from "./utils";
import { StackActions } from "@react-navigation/native";

const LogoutScreen = (props) => {
  React.useEffect(() => {
    CurrentService.clearStorageAsync();
    props.navigation.dispatch(StackActions.replace("Welcome"));
  }, []);

  return <></>;
};

export default LogoutScreen;
