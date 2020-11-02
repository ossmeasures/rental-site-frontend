import React from "react";
import { Text, View, Image, Dimensions } from "react-native";

export const Item = (props) => {
  const ITEM_WIDTH = Dimensions.get("window").width;

  const { image, name } = props;
  return (
    <View
      style={{
        height: ITEM_WIDTH / 2.3,
        width: ITEM_WIDTH / 2.3,
        marginLeft: 20,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover",
          }}
          source={image}
        />
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};
