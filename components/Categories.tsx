import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Category } from "./Category";

export const Categories = (props: {
  selectedId: number;
  setSelectedId: any;
}): any => {
  const categories = [
    {
      id: 1,
      name: "crane",
      image: require("../assets/crane.png"),
    },
    {
      id: 2,
      name: "tankerTruck",
      image: require("../assets/tankerTruck.png"),
    },
    {
      id: 3,
      name: "parts",
      image: require("../assets/parts.png"),
    },
    {
      id: 4,
      name: "van",
      image: require("../assets/van.png"),
    },
    {
      id: 5,
      name: "bulldozer",
      image: require("../assets/bulldozer.png"),
    },
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({ item, index }) => {
        return (
          <Category
            key={index}
            name={item.name}
            image={item.image}
            onPress={() => {
              props.setSelectedId(item.id);
            }}
            selected={props.selectedId === item.id}
          />
        );
      }}
    />
  );
};
//
