import React from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Divider, Input } from "@ui-kitten/components";
import { ItemScreenProps } from "../../navigation/item.navigator";
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

export const ItemScreen = (props: ItemScreenProps): SafeAreaLayoutElement => {
  const [query, setQuery] = React.useState<string>("");
  const [items, setItems] = React.useState<Item[]>(allItems);

  const onChangeQuery = (query: string): void => {
    setQuery(query);
    const filtered = allItems.filter((item) => {
      return item.name.includes(query);
    });
    setItems(filtered);
  };

  const [viewableItemIndex, setViewableItemIndex] = React.useState(1);

  const navigateDetails = (itemIndex: number): void => {
    const { [itemIndex]: item } = items;
    props.navigation.navigate(AppRoute.ITEM_DETAILS, { item });
  };

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={APP_NAME}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider />
      <View>
        <Input
          style={styles.filterInput}
          placeholder="Search"
          value={query}
          accessoryLeft={SearchIcon}
          onChangeText={onChangeQuery}
        />
        <Title title="Categories" />
        <Categories
          selectedId={viewableItemIndex}
          setSelectedId={setViewableItemIndex}
        />
        <Title title="Items" />
        <FlatList
          data={items}
          renderItem={({ item, index }) => {
            return <Item {...item} onPress={() => navigateDetails(index)} />;
          }}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.listView}
        />
      </View>
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
