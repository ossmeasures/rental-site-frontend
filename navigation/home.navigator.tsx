import React from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TodoNavigator } from "./todo.navigator";
import { ItemNavigator } from "./item.navigator";
import { AppRoute } from "./AppRoutes";
import { AboutScreen, HomeDrawer, HomeTabBar } from "../screens/home";
import {
  CarIcon,
  HomeIcon,
  EyeIcon,
  LayoutIcon,
  SettingIcon,
} from "../assets/icons";
import { SettingScreen } from "../screens/setting";

type HomeDrawerNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.RENTAL_ITEMS]: undefined;
};

type HomeBottomTabsNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.ITEM]: undefined;
  [AppRoute.SETTING]: undefined;
};

export type TodoTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.TODO>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export type ItemTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.ITEM>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export type SettingTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.SETTING>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<
    HomeDrawerNavigatorParams,
    AppRoute.RENTAL_ITEMS
  >;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.RENTAL_ITEMS>;
}

export type BottomHomeScreenProps = BottomTabBarProps & {
  navigation: TodoTabNavigationProp;
};

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

const HomeBottomNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
  <BottomTab.Navigator tabBar={HomeTabBar}>
    <BottomTab.Screen
      name={AppRoute.TODO}
      component={TodoNavigator}
      options={{ title: "TODO", tabBarIcon: LayoutIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.ITEM}
      component={ItemNavigator}
      options={{ title: "ITEM", tabBarIcon: CarIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.SETTING}
      component={SettingScreen}
      options={{ title: "Setting", tabBarIcon: SettingIcon }}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  // @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
  <Drawer.Navigator drawerContent={HomeDrawer}>
    <Drawer.Screen
      name={AppRoute.HOME}
      component={HomeBottomNavigator}
      options={{ title: "RENTAL_ITEMS", drawerIcon: HomeIcon }}
    />
    <Drawer.Screen
      name={AppRoute.RENTAL_ITEMS}
      component={AboutScreen}
      options={{ title: "Rental Items", drawerIcon: EyeIcon }}
    />
  </Drawer.Navigator>
);
