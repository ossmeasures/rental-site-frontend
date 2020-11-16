import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const Category = (props) => {
  const { image, name, backgroundColor } = props;
  return (
    <View style={styles.container}>
      <Image style={[styles.imageContainer]} source={image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "gray",
  },
  text: {
    fontSize: 10,
    paddingTop: 4,
  },
});
