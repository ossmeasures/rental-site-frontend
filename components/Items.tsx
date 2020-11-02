import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Item } from "./Item";

export const Items = (): any => {
  const items = [
    {
      name: "crane a",
      image: require("../assets/0f62134bf3e8ef07bc0f4f43076a3204.jpg"),
    },
    {
      name: "crane b",
      image: require("../assets/1afd850e68d4297b622ab28d01a4b2ac.jpg"),
    },
    {
      name: "handle",
      image: require("../assets/2b45c503eec0ec1bd12c27d911b2e230.jpg"),
    },
    {
      name: "parts a",
      image: require("../assets/8ce94c3bf2b79dbf5c771da11e08941f.jpg"),
    },
    {
      name: "parts b",
      image: require("../assets/22b080faae9bb2bf646ee92ef42b2b4c.jpg"),
    },
    {
      name: "crane c",
      image: require("../assets/75fca98d5ab45ffc1e5d02f4e25435c0.jpg"),
    },
    {
      name: "crane d",
      image: require("../assets/77cf4f40da07636d792d5b9246648232.jpg"),
    },
    {
      name: "crane e",
      image: require("../assets/338cabceba0d935585e0dfdf8ff6ed77.jpg"),
    },
  ];
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => {
        return <Item name={item.name} image={item.image} />;
      }}
      keyExtractor={(item) => item.name}
      numColumns={2}
    />
  );
};
