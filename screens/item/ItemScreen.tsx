import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Input } from "@ui-kitten/components";
import { ItemNavigatorParams } from "../../navigation/item.navigator";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";
import { Categories } from "../../components/Categories";
import { items as allItems } from "../../components/itemList";
import { Title } from "../../components/Title";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { AppRoute } from "../../navigation/AppRoutes";
import { Item } from "../../components/Item";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ItemTabNavigationProp } from "../../navigation/home.navigator";

type NP = CompositeNavigationProp<
  ItemTabNavigationProp,
  StackNavigationProp<ItemNavigatorParams, AppRoute.ITEM>
>;

export const ItemScreen = (): SafeAreaLayoutElement => {
  const [query, setQuery] = React.useState<string>("");
  const [items, setItems] = React.useState<Item[]>(allItems);
  const navigation = useNavigation<NP>();

  const onChangeQuery = (query: string): void => {
    setQuery(query);
    const filtered = allItems.filter((item) => item.name.includes(query));
    setItems(filtered);
  };

  const [selectedId, setSelectedId] = React.useState(1);

  const navigateDetails = (itemIndex: number): void => {
    const { [itemIndex]: item } = items;
    navigation.navigate(AppRoute.ITEM_DETAILS, { item });
  };

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={APP_NAME}
        backIcon={MenuIcon}
        onBackPress={navigation.toggleDrawer}
      />
      <Divider />

      <FlatList
        data={items}
        ListHeaderComponent={
          <>
            <Input
              style={styles.filterInput}
              placeholder="Search"
              value={query}
              accessoryLeft={SearchIcon}
              onChangeText={onChangeQuery}
            />
            <Title title="Categories" />
            <Categories selectedId={selectedId} setSelectedId={setSelectedId} />
            <Title title="Items" />
          </>
        }
        renderItem={({ item, index }) => {
          return <Item {...item} onPress={() => navigateDetails(index)} />;
        }}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.listView}
      />
    </SafeAreaLayout>
  );
};

export const styles = StyleSheet.create({
  listView: {
    flex: 1,
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    margin: 8,
  },
  filterInput: {
    marginTop: 16,
    marginHorizontal: 8,
  },
});
