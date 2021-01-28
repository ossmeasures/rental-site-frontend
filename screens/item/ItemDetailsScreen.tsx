import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Button } from "@ui-kitten/components";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { EdgeInsets, useSafeArea } from "react-native-safe-area-context";
import { ImageOverlay } from "../../components/ImageOverlay";
import { Item } from "../../components/Item";
import RentalActionModal from "../../components/RentalActionModal";

import { SafeAreaLayoutElement } from "../../components/SafeAreaLayout";
import { Toolbar } from "../../components/Toolbar";
import { AppRoute } from "../../navigation/AppRoutes";
import { ItemNavigatorParams } from "../../navigation/item.navigator";

export type ItemDetailScreenProps = {
  item: Item;
};

type NP = StackNavigationProp<ItemNavigatorParams, AppRoute.ITEM_DETAILS>;
type RP = RouteProp<ItemNavigatorParams, AppRoute.ITEM_DETAILS>;

export const ItemDetailsScreen = (): SafeAreaLayoutElement => {
  const insets: EdgeInsets = useSafeArea();

  const navigation = useNavigation<NP>();
  const route = useRoute<RP>();
  const item = route.params.item;

  return (
    <React.Fragment>
      <Layout style={styles.container}>
        <ScrollView>
          <ImageOverlay
            style={[styles.appBar, { paddingTop: insets.top }]}
            source={item.image}
          >
            <Toolbar appearance="control" onBackPress={navigation.goBack} />
          </ImageOverlay>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>¥{item.price.toLocaleString()}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.description}>年式　{item.modelYear}</Text>
            <Text style={styles.description}>走行距離　{item.mileage}</Text>
            <Text style={styles.description}>排気量　{item.displacement}</Text>
            <Text style={styles.description}>
              修復歴　{item.hasRepairHistory ? "あり" : "なし"}
            </Text>
            <Text style={styles.description}>
              保証　{item.hasWarranty ? "あり" : "なし"}
            </Text>
            <Text style={styles.description}>ミッション　{item.mission}</Text>
          </View>
        </ScrollView>
        <RentalActionModal item={item} />
      </Layout>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 4,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  appBar: {
    height: 390,
  },
  title: {
    fontSize: 42,
    fontWeight: "800",
    marginVertical: 16,
  },
  category: {
    fontSize: 24,
    marginVertical: 4,
  },
  price: {
    fontSize: 24,
    marginVertical: 4,
  },
  description: {
    fontSize: 18,
    color: "gray",
    marginVertical: 4,
  },
  rentalButton: {
    marginBottom: 10,
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
  },
});
