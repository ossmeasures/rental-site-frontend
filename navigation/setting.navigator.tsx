import React from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { SettingTabNavigationProp } from "./home.navigator";
import { AppRoute } from "./AppRoutes";
import { SettingScreen } from "../screens/setting";

type SettingNavigatorParams = {
  [AppRoute.SETTING]: undefined;
};

export interface SettingScreenProps {
  navigation: CompositeNavigationProp<
    SettingTabNavigationProp,
    StackNavigationProp<SettingNavigatorParams, AppRoute.SETTING>
  >;
  route: RouteProp<SettingNavigatorParams, AppRoute.SETTING>;
}

const Stack = createStackNavigator<SettingNavigatorParams>();

export const SettingNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoute.SETTING} component={SettingScreen} />
  </Stack.Navigator>
);
