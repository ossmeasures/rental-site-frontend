import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@ui-kitten/components";

export const Category = (props) => {
  const theme = useTheme();

  const { image, name, onPress, selected } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={[
          styles.imageContainer,
          {
            borderColor: selected ? theme["color-primary-default"] : "gray",
            borderWidth: selected ? 1.5 : 1,
          },
        ]}
        source={image}
      />
      <Text
        style={[
          styles.text,
          {
            color: selected ? theme["color-primary-default"] : "gray",
            fontWeight: selected ? "700" : "300",
            fontSize: selected ? 14 : 10,
          },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
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
