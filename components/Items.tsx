import React from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Item } from "./Item";

export type Item = {
  name: string;
  image: ImageSourcePropType;
  category: string;
  price: number;
};

export const Items = (props: { items: Item[] }): any => {
  const items = props.items;
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => {
        return <Item {...item} />;
      }}
      keyExtractor={(item) => item.name}
      numColumns={2}
      columnWrapperStyle={styles.listView}
    />
  );
};

var styles = StyleSheet.create({
  listView: {
    flex: 1,
    justifyContent: "center",
  },
});
