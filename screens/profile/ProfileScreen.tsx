import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Divider, Layout, Text } from "@ui-kitten/components";
import { ProfileScreenProps } from "../../navigation/profile.navigator";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { MenuIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";

export const ProfileScreen = (
  props: ProfileScreenProps
): SafeAreaLayoutElement => (
  <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
    <Toolbar
      title={APP_NAME}
      backIcon={MenuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category="h1">PROFILE</Text>
      <Avatar
        style={styles.avatar}
        size="giant"
        source={require("../../assets/profile.jpeg")}
      />
    </Layout>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
  },
});
