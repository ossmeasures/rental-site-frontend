import React, { useEffect, useState } from "react";
import { ListRenderItemInfo, StyleSheet } from "react-native";
import {
  Divider,
  Layout,
  List,
  ListItem,
  ListItemElement,
  Text,
} from "@ui-kitten/components";
import { AboutScreenProps } from "../../navigation/home.navigator";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { APP_NAME } from "../../constants";
import { storage } from "../../storage/storage";
import { RentalActionData } from "../../data/rental-action.model";

export const AboutScreen = (props: AboutScreenProps): SafeAreaLayoutElement => {
  const [rentalItems, setRentalItems] = useState<RentalActionData[]>();
  const fetchRentalItems = () => {
    storage
      .getAllDataForKey("rental")
      .then((ret: RentalActionData[]) => {
        // ロードに成功したら
        // alert(ret.name + " is " + ret.status);
        console.log(ret);
        setRentalItems(ret);
      })
      .catch((err) => {
        // ロードに失敗したら
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            // 見つかんなかった場合の処理を書こう
            break;
          case "ExpiredError":
            // キャッシュ切れの場合の処理を書こう
            break;
        }
      });
  };

  const renderTodo = ({
    item,
    index,
  }: ListRenderItemInfo<RentalActionData>): ListItemElement => (
    <ListItem style={styles.item} onPress={() => alert("item detail")}>
      <Text category="s1">{item.address}</Text>
      <Text appearance="hint" category="c1">
        {item.buildingName}
      </Text>
    </ListItem>
  );

  // 初回ロード時、第二引数の値が変わった時実行
  useEffect(() => {
    fetchRentalItems();
  }, []);
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar title={APP_NAME} onBackPress={props.navigation.goBack} />
      <Divider />
      <Layout style={styles.container}>
        <List style={styles.list} data={rentalItems} renderItem={renderTodo} />
      </Layout>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    // backgroundColor: "background-basic-color-1",
  },
  item: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 12,
  },
});
