import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { ProfileScreenProps } from "../../navigation/profile.navigator";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { MenuIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";
import { Categories } from "../../components/Categories";
import { Items } from "../../components/Items";

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
    <View style={styles.text}>
      <Text>Category</Text>
    </View>
    <Layout>
      <View>
        <Categories />
      </View>
    </Layout>
    <View style={styles.text}>
      <Text>Items</Text>
    </View>
    <Layout>
      <View>
        <Items />
      </View>
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
  text: {
    justifyContent: "center",
    alignItems: "flex-start",
    // paddingLeft: 20,
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    margin: 8,
  },
});
