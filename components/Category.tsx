import React from "react";
import { Text, View, Image } from "react-native";

export const Category = (props) => {
  const { imageUri, name } = props;
  return (
    <View
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
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
          source={{
            uri: imageUri,
          }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};