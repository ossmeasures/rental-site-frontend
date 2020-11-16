import React from "react";
import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import { useAssets } from "expo-asset";

const ITEM_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  containerStyle: {
    width: ITEM_WIDTH / 2.3,
    height: ITEM_WIDTH / 1.7,
    borderRadius: 8,
    padding: 0,
  },
  imageStyle: {
    width: ITEM_WIDTH / 2.3,
    flex: 3,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: "hidden",
  },
  imageWrapperStyle: {
    flex: 1,
  },
  wrapperStyle: {
    flex: 1,
    padding: 0,
  },
  viewStyle: {
    padding: 10,
    flex: 1,
  },
});

export const Item = (props) => {
  const { image, name, category, price } = props;
  const [assets] = useAssets([image]);

  if (!assets) {
    return (
      <Card
        containerStyle={styles.containerStyle}
        wrapperStyle={styles.wrapperStyle}
      ></Card>
    );
  }
  return (
    <Card
      containerStyle={styles.containerStyle}
      wrapperStyle={styles.wrapperStyle}
    >
      <Image style={styles.imageStyle} source={image} />
      <View style={styles.viewStyle}>
        <Text style={{ fontSize: 14 }}>{name}</Text>
        <Text
          style={{
            color: "gray",
            fontSize: 12,
          }}
        >
          {category}
        </Text>
        <Text style={{ fontSize: 12 }}>¥{price.toLocaleString()}</Text>
      </View>
    </Card>
  );
};
