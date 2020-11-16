import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Input } from "@ui-kitten/components";
import { ProfileScreenProps } from "../../navigation/profile.navigator";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";
import { Categories } from "../../components/Categories";
import { Item, Items } from "../../components/Items";
import { items as allItems } from "../../components/itemList";
import { Title } from "../../components/Title";
import { ScrollView } from "react-native-gesture-handler";

export const ProfileScreen = (
  props: ProfileScreenProps
): SafeAreaLayoutElement => {
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

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={APP_NAME}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider />
      <ScrollView>
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
        <Items items={items} />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export const styles = StyleSheet.create({
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
