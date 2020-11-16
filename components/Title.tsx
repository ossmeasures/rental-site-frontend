import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

export const Title = (props: { title: string }) => (
  <View style={styles.text}>
    <Text>{props.title}</Text>
  </View>
);

export const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignItems: "flex-start",
    // paddingLeft: 20,
    padding: 20,
  },
});
