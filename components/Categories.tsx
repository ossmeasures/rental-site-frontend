import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Category } from "./Category";

export const Categories = (): any => {
  const categories = [
    {
      name: "crane",
      image: require("../assets/crane.png"),
    },
    {
      name: "tankerTruck",
      image: require("../assets/tankerTruck.png"),
    },
    {
      name: "parts",
      image: require("../assets/parts.png"),
    },
    {
      name: "van",
      image: require("../assets/van.png"),
    },
    {
      name: "bulldozer",
      image: require("../assets/bulldozer.png"),
    },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((item) => {
        return <Category key={item.name} name={item.name} image={item.image} />;
      })}
    </ScrollView>
  );
};
