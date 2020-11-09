import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Input, Layout, Text } from "@ui-kitten/components";
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

export const ProfileScreen = (
  props: ProfileScreenProps
): SafeAreaLayoutElement => {
  const [query, setQuery] = React.useState<string>("");
  const [items, setItems] = React.useState<Item[]>(allItems);

  const onChangeQuery = (query: string): void => {
    // const nextTodos: Todo[] = allTodos.filter((todo: Todo): boolean => {
    //   return todo.title.toLowerCase().includes(query.toLowerCase());
    // });
    // setTodos(nextTodos);
    // setQuery(query);
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
      <View style={styles.text}>
        <Text>Category</Text>
      </View>
      <Layout>
        <View>
          <Categories />
        </View>
      </Layout>
      <View style={styles.text}>
        <Text>Items</Text>
      </View>
      <Layout>
        <View>
          <Items items={items} />
        </View>
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
