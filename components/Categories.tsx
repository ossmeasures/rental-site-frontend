import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Category } from "./Category";
import * as Animatable from "react-native-animatable";
import { useAssets } from "expo-asset";
import { Text } from "react-native";

const DURATION = 800;
export const Categories = (props: {
  selectedId: number;
  setSelectedId: any;
}): any => {
  const categories = [
    {
      id: 1,
      name: "クレーン",
      image: require("../assets/categories/crane.png"),
    },
    {
      id: 2,
      name: "タンカー",
      image: require("../assets/categories/tankerTruck.png"),
    },
    {
      id: 3,
      name: "工具",
      image: require("../assets/categories/parts.png"),
    },
    {
      id: 4,
      name: "バン",
      image: require("../assets/categories/van.png"),
    },
    {
      id: 5,
      name: "ブルドーザー",
      image: require("../assets/categories/bulldozer.png"),
    },
    {
      id: 6,
      name: "ホイルローダ",
      image: require("../assets/categories/wheelLoader.png"),
    },
    {
      id: 7,
      name: "油圧ショベル",
      image: require("../assets/categories/excavator.png"),
    },
    {
      id: 8,
      name: "トラック",
      image: require("../assets/categories/track.png"),
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
      keyExtractor={(item) => item.name}
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
