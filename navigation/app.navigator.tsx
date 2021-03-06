import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigator } from "./auth.navigator";
import { HomeNavigator } from "./home.navigator";
import { AppRoute } from "./AppRoutes";
import { HistoryDetailScreen } from "../screens/history";

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
  [AppRoute.HISTORY_DETAIL]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
  props: Partial<StackNavigatorProps>
): React.ReactElement => (
  <Stack.Navigator {...props} headerMode="none">
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
    <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
    <Stack.Screen name={AppRoute.HISTORY_DETAIL} component={HistoryDetailScreen} />
  </Stack.Navigator>
);
