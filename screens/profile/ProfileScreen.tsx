import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Input, Layout } from "@ui-kitten/components";
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

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={APP_NAME}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider />
      <Input
        style={styles.filterInput}
        placeholder="Search"
        value={query}
        accessoryLeft={SearchIcon}
        onChangeText={onChangeQuery}
      />
      <Title title="Categories" />
      <Layout>
        <View>
          <Categories />
        </View>
      </Layout>
      <Title title="Items" />
      <Layout>
        <View>
          <Items items={items} />
        </View>
      </Layout>
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
  text: {
    justifyContent: "center",
    alignItems: "flex-start",
    // paddingLeft: 20,
    padding: 20,
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
