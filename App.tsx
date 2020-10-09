import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        title="click me!"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Greeting name="ハセシュン" />
      <Greeting name="こーへー" />
      <Greeting name="にっしー" />
    </View>
  );
}

const Greeting = (props: { name: string }) => {
  return (
    <View>
      <Text>Hello {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
