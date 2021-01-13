import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, CheckBox, Layout } from "@ui-kitten/components";
import { Formik, FormikProps } from "formik";
import { SignInScreenProps } from "../../navigation/auth.navigator";
import { AppRoute } from "../../navigation/AppRoutes";
import { FormInput } from "../../components/FormInput";
import { EyeIcon, EyeOffIcon } from "../../assets/icons";
import { SignInData, SignInSchema } from "../../data/sign-in.model";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SignInButton } from "../../components/button/DesignedButtons";
import RentalActionModal from "../../components/RentalActionModal";


export const SignInScreen = (props: SignInScreenProps) => {
  const [shouldRemember, setShouldRemember] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const onFormSubmit = (values: SignInData): void => {
    navigateHome();
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignUp = (): void => {
    props.navigation.navigate(AppRoute.SIGN_UP);
  };

  const navigateResetPassword = (): void => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = (props): React.ReactElement => {
    const IconComponent = passwordVisible ? EyeIcon : EyeOffIcon;
    return (
      <TouchableWithoutFeedback onPress={onPasswordIconPress}>
        <IconComponent {...props} />
      </TouchableWithoutFeedback>
    );
  };

  const renderForm = (props: FormikProps<SignInData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id="email"
        style={styles.formControl}
        placeholder="Email"
        keyboardType="email-address"
      />
      <FormInput
        id="password"
        style={styles.formControl}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
        accessoryRight={renderPasswordIcon}
      />
      <View style={styles.resetPasswordContainer}>
        <CheckBox
          style={styles.formControl}
          checked={shouldRemember}
          onChange={setShouldRemember}
        >
          Remember Me
        </CheckBox>
        <Button
          appearance="ghost"
          status="basic"
          onPress={navigateResetPassword}
        >
          Forgot password?
        </Button>
      </View>

      <SignInButton
        style={{ marginVertical: 24 }}
        onPress={props.handleSubmit}
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require("../../assets/constructionItem.jpeg")}
      />
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={SignInData.empty()}
          validationSchema={SignInSchema}
          onSubmit={onFormSubmit}
        >
          {renderForm}
        </Formik>
        <RentalActionModal />
        <Button
          style={styles.noAccountButton}
          appearance="ghost"
          status="basic"
          onPress={navigateSignUp}
        >
          Don't have an account?
        </Button>
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
  resetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: "center",
  },
});
