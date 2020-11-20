import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Category } from "./Category";
import * as Animatable from "react-native-animatable";
import { useAssets } from "expo-asset";
import { Text } from "react-native";
import { categories } from "../data/categories";

const DURATION = 800;
export const Categories = (props: {
  selectedId: number;
  setSelectedId: any;
}): any => {
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
