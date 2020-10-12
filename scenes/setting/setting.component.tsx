import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { SettingScreenProps } from "../../navigation/Setting.navigator";
import { Toolbar } from "../../components/toolbar.component";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/safe-area-layout.component";
import { MenuIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";

export const SettingScreen = (
  props: SettingScreenProps
): SafeAreaLayoutElement => (
  <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
    <Toolbar
      title={APP_NAME}
      backIcon={MenuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category="h1">SETTING ⚙</Text>
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
});
