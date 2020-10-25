import React from "react";
import { StyleSheet, TextProps, ViewStyle } from "react-native";
import { Button } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";

const styles = StyleSheet.create({
  base: {
    shadowColor: "#FFB08D",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
  },
});

type SubmitButtonProps = {
  onPress: (event: React.FormEvent<HTMLFormElement> | any) => void;
  style: ViewStyle;
  children: RenderProp<TextProps> | React.ReactText;
};

export const SubmitButton = (props: Partial<SubmitButtonProps>) => (
  <Button {...props} style={[styles.base, props.style]}>
    {props.children}
  </Button>
);
