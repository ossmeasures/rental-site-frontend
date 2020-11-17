import React from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { ItemTabNavigationProp } from "./home.navigator";
import { AppRoute } from "./AppRoutes";
import { ItemScreen } from "../screens/item";
import {
  ItemDetailScreenProps,
  ItemDetailsScreen,
} from "../screens/item/ItemDetailsScreen";

export type ItemNavigatorParams = {
  [AppRoute.ITEM]: undefined;
  [AppRoute.ITEM_DETAILS]: ItemDetailScreenProps;
};

const Stack = createStackNavigator<ItemNavigatorParams>();

export const ItemNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoute.ITEM} component={ItemScreen} />
    <Stack.Screen name={AppRoute.ITEM_DETAILS} component={ItemDetailsScreen} />
  </Stack.Navigator>
);
