import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RentalActionData } from "../../data/rental-action.model";
import { Item } from "../../components/Item";
import { Toolbar } from "../../components/Toolbar";
import { EdgeInsets, useSafeArea } from "react-native-safe-area-context";

type RentalActionDataAndItem = RentalActionData & Item;

type OrderStatus =
  | "レンタル中" //オレンジ
  | "配送中" //オレンジ
  | "返却済み" //グレー
  | "未レンタル" //グレー
  | "注文処理中"; //グレー

export const HistoryDetailScreen = (): SafeAreaLayoutElement => {
  const insets: EdgeInsets = useSafeArea();
  const navigation = useNavigation();
  const route = useRoute();
  const item: RentalActionDataAndItem = route.params["item"];
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Divider />
      <Layout style={styles.container}>
        <ScrollView>
          <Toolbar appearance="control" onBackPress={navigation.goBack} />
          <View style={{ flexDirection: "row" }}>
            <Image
              style={[styles.appBar, { paddingTop: insets.top }]}
              source={item.image}
            />
            <Text style={styles.title}>status</Text>
          </View>
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
        </ScrollView>
      </Layout>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 16,
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
  appBar: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
