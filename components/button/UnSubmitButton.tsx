import React from "react";
import { TextProps, ViewStyle } from "react-native";
import { Button } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";

type UnSubmitButtonProps = {
  onPress: (event: React.FormEvent<HTMLFormElement> | any) => void;
  style: ViewStyle;
  children: RenderProp<TextProps> | React.ReactText;
};

export const UnSubmitButton = (props: Partial<UnSubmitButtonProps>) => (
  <Button {...props} style={[props.style]} appearance="outline">
    {props.children}
  </Button>
);
