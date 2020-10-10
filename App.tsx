import React from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import { IconRegistry, Layout, Text } from "@ui-kitten/components/ui";
import * as eva from "@eva-design/eva";
import { LoginButton } from "./components/LoginButton";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StyleSheet } from "react-native";
import { BottomTabs } from "./components/BottomTabs";

const HomeScreen = () => (
  <Layout style={styles.container}>
    <Layout style={styles.layout}>
      <Text category="h1">HOME</Text>
      <LoginButton />
    </Layout>
    <Layout style={styles.bottom}>
      <BottomTabs />
    </Layout>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />

    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);
