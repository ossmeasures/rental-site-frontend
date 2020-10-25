import React from "react";
import { ViewStyle } from "react-native";
import { SubmitButton } from "./SubmitButton";

type ActionButtonProps = {
  onPress: (event: React.FormEvent<HTMLFormElement> | any) => void;
  style: ViewStyle;
};

export const DoneButton = (props: Partial<ActionButtonProps>) => (
  <SubmitButton {...props}>DONE</SubmitButton>
);

export const SignInButton = (props: Partial<ActionButtonProps>) => (
  <SubmitButton {...props}>SIGN IN</SubmitButton>
);

export const SignUpButton = (props: Partial<ActionButtonProps>) => (
  <SubmitButton {...props}>SIGN UP</SubmitButton>
);
