import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Category } from "./Category";
import * as Animatable from "react-native-animatable";
import { useAssets } from "expo-asset";
import { Text } from "react-native";

const DURATION = 500;
export const Categories = (props: {
  selectedId: number;
  setSelectedId: any;
}): any => {
  const categories = [
    {
      id: 1,
      name: "crane",
      image: require("../assets/categories/crane.png"),
    },
    {
      id: 2,
      name: "tankerTruck",
      image: require("../assets/categories/tankerTruck.png"),
    },
    {
      id: 3,
      name: "parts",
      image: require("../assets/categories/parts.png"),
    },
    {
      id: 4,
      name: "van",
      image: require("../assets/categories/van.png"),
    },
    {
      id: 5,
      name: "bulldozer",
      image: require("../assets/categories/bulldozer.png"),
    },
  ];

  const [assets] = useAssets(categories.map((item) => item.image));

  if (!assets) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({ item, index }) => {
        return (
          <Animatable.View animation="bounceIn" delay={DURATION + index * 100}>
            <Category
              key={`${item.name}-${index}`}
              name={item.name}
              image={item.image}
              onPress={() => {
                props.setSelectedId(item.id);
              }}
              selected={props.selectedId === item.id}
            />
          </Animatable.View>
        );
      }}
    />
  );
};
//
