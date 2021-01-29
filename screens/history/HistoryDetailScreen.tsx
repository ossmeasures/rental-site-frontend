import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { MenuIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";
import { useRoute } from "@react-navigation/core";

export const HistoryDetailScreen = (
): SafeAreaLayoutElement => {
    const route = useRoute();
  const item = route.params["item"];
    return <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
    <Divider />
    <Layout style={styles.container}>
      <Text category="h1">レンタル済み商品{item.name} ⚙</Text>
    </Layout>
  </SafeAreaLayout>
};

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
