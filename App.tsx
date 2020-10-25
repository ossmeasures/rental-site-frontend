import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { light, mapping } from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation/app.navigator";
import { AppRoute } from "./navigation/AppRoutes";
import { default as theme } from "./theme.json"; // <-- Import app theme

export default (): React.ReactFragment => {
  const isAuthorized: boolean = false;

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider mapping={mapping} theme={{ ...light, ...theme }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator
              initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH}
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};
