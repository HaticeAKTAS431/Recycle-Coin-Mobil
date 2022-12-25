// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import Login from './src/Login_Screen';
import SignUp from './src/SignUp_Screen';
import Home from './src/Home_Screen';
import ForgotPassword from './src/ForgotPassword_Screen';
import DrawerMenu from './src/Drawer_Menu';
import Verification  from './src/Verification_Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}/*navigator eklendikten sonra çıkan üst sekmeyi kapatır */}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;