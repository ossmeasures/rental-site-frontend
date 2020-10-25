import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { EdgeInsets, useSafeArea } from "react-native-safe-area-context";
import { Layout, LayoutElement } from "@ui-kitten/components";
import { Formik, FormikProps } from "formik";
import { ResetPasswordScreenProps } from "../../navigation/auth.navigator";
import { AppRoute } from "../../navigation/AppRoutes";
import { FormInput } from "../../components/FormInput";
import { Toolbar } from "../../components/Toolbar";
import {
  ResetPasswordData,
  ResetPasswordSchema,
} from "../../data/reset-password.model";
import { DoneButton } from "../../components/button/DesignedButtons";

export const ResetPasswordScreen = (
  props: ResetPasswordScreenProps
): LayoutElement => {
  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (
    props: FormikProps<ResetPasswordData>
  ): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id="email"
        style={styles.formControl}
        placeholder="Email"
        keyboardType="email-address"
      />
      <DoneButton style={styles.button} onPress={props.handleSubmit} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require("../../assets/constructionItem.jpeg")}
      >
        <Toolbar appearance="control" onBackPress={props.navigation.goBack} />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}
        >
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 24,
  },
});
