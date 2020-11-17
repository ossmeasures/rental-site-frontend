import { Layout, Button } from "@ui-kitten/components";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { EdgeInsets, useSafeArea } from "react-native-safe-area-context";
import { ImageOverlay } from "../../components/ImageOverlay";
import { Item } from "../../components/Item";

import { SafeAreaLayoutElement } from "../../components/SafeAreaLayout";
import { Toolbar } from "../../components/Toolbar";
import { ItemDetailsScreenProps } from "../../navigation/item.navigator";

export type ItemDetailScreenProps = {
  item: Item;
};
export const ItemDetailsScreen = (
  props: ItemDetailsScreenProps
): SafeAreaLayoutElement => {
  const insets: EdgeInsets = useSafeArea();

  return (
    <React.Fragment>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={props.route.params.item.image}
      >
        <Toolbar appearance="control" onBackPress={props.navigation.goBack} />
      </ImageOverlay>
      <Layout style={styles.container}>
        <Text>{props.route.params.item.name}</Text>
        <Text>{props.route.params.item.category}</Text>
        <Text>{props.route.params.item.price}</Text>
      </Layout>
      <Button onPress={props.navigation.goBack}>レンタルする</Button>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  appBar: {
    height: 390,
  },
});
