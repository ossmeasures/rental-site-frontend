import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
import { Category } from "../../components/Category";

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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category name="Profile" imageUri="https://picsum.photos/200/300" />
          <Category
            name="Notification"
            imageUri="https://picsum.photos/200/300/?blur=1"
          />
          <Category
            name="Siri"
            imageUri="https://picsum.photos/200/300/?blur=3"
          />
        </ScrollView>
        {/* <Image source={craneLogo} style={{ width: 305, height: 159 }} /> */}
      </View>
    </Layout>
    <View style={styles.text}>
      <Text>Items</Text>
    </View>
    <View>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Category name="Profile" imageUri="https://picsum.photos/200/300" />
          <Category name="Profile" imageUri="https://picsum.photos/200/300" />
        </View>
        <View style={styles.innerContainer}>
          <Category
            name="Siri"
            imageUri="https://picsum.photos/200/300/?blur=3"
          />
          <Category
            name="Siri"
            imageUri="https://picsum.photos/200/300/?blur=3"
          />
        </View>
        <View style={styles.innerContainer}>
          <Category
            name="Notification"
            imageUri="https://picsum.photos/200/300/?blur=1"
          />
          <Category
            name="Notification"
            imageUri="https://picsum.photos/200/300/?blur=1"
          />
        </View>
      </ScrollView>
      {/* <Image source={craneLogo} style={{ width: 305, height: 159 }} /> */}
    </View>
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
