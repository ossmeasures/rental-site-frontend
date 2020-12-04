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
import { items as allItems } from "../../data/items";
import { Title } from "../../components/Title";
import { FlatList } from "react-native-gesture-handler";
import { AppRoute } from "../../navigation/AppRoutes";
import { Item } from "../../components/Item";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ItemTabNavigationProp } from "../../navigation/home.navigator";
import { categories } from "../../data/categories";

type NP = CompositeNavigationProp<
  ItemTabNavigationProp,
  StackNavigationProp<ItemNavigatorParams, AppRoute.ITEM>
>;

type FilterProps = { query: string; categoryId: number };
const filterBy = (props: FilterProps) => {
  const { query, categoryId } = props;
  const ALL_CATEGORY = 0;

  if (categoryId === ALL_CATEGORY) {
    return allItems.filter((item) => item.name.includes(query));
  }

  const selectedCategory = categories.find((c) => c.id === categoryId);

  return allItems
    .filter((item) => item.name.includes(query))
    .filter((item) => item.category === selectedCategory.name);
};

/**
 * 重機の一覧画面
 */
export const ItemScreen = (): SafeAreaLayoutElement => {
  const [query, setQuery] = React.useState<string>("");
  const [items, setItems] = React.useState<Item[]>(allItems);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(0);

  const navigation = useNavigation<NP>();

  const onChangeQuery = (query: string): void => {
    setQuery(query);
    const filtered = filterBy({ query, categoryId: selectedCategoryId });
    setItems(filtered);
  };

  // TODO: クリーンアップ処理を正しく実装してメモリリークを抑える
  React.useEffect(() => {
    let loading = true;
    const fetchAndSetItem = () => {
      const filtered = filterBy({ query, categoryId: selectedCategoryId });
      if (loading) setItems(filtered);
    };
    fetchAndSetItem();
    return () => (loading = false);
  }, [selectedCategoryId]);

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
            <Categories
              selectedId={selectedCategoryId}
              setSelectedId={setSelectedCategoryId}
            />
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
