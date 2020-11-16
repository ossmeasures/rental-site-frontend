import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { styles } from "../screens/profile/ProfileScreen";

export const Title = (props: { title: string }) => (
  <View style={styles.text}>
    <Text>{props.title}</Text>
  </View>
);
