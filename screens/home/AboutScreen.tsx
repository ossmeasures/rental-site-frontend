import React, { useEffect, useState } from "react";
import { ListRenderItemInfo, StyleSheet, Image } from "react-native";
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
import { Item } from "../../components/Item";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native-animatable";

// テスト用データ
export const data: (RentalActionData & Item)[] = [
  {
    id: "1",
    name: "2tダンプ",
    image: require("../../assets/0f62134bf3e8ef07bc0f4f43076a3204.jpg"),
    category: "トラック",
    price: 150000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description:
      "準中型ＭＴ免許ＯＫ　２トン２ｔベース１．５トン１．５ｔ積載　パネルバン左扉ありリア観音扉　全低床　ディーゼルＮＯＸｐｍ法適合車　車検時記録簿１６枚あり　全高２７３ｃｍトラック　３人乗り　ＭＴ５速",
    postalCode: "273-0000",
    prefectures: "千葉県",
    municipality: "船橋市",
    address: "丸々区一丁目１−１−１",
    buildingName: "",
  },
  {
    id: "2",
    name: "2tトラッククレーン",
    image: require("../../assets/1afd850e68d4297b622ab28d01a4b2ac.jpg"),
    category: "クレーン",
    price: 250000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    postalCode: "999-9999",
    prefectures: "東京都",
    municipality: "江東区",
    address: "丸々区一丁目１−１−１",
    buildingName: "",
  },
  {
    id: "3",
    name: "ワンボックス",
    image: require("../../assets/2b45c503eec0ec1bd12c27d911b2e230.jpg"),
    category: "バン",
    price: 8000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    postalCode: "123-4567",
    prefectures: "北海道",
    municipality: "帯広市",
    address: "丸々区一丁目１−１−１",
    buildingName: "",
  },
  {
    id: "4",
    name: "油圧ショベルA型",
    image: require("../../assets/8ce94c3bf2b79dbf5c771da11e08941f.jpg"),
    category: "油圧ショベル",
    price: 120000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    postalCode: "888-1111",
    prefectures: "新潟県",
    municipality: "新潟市",
    address: "丸々区一丁目１−１−１",
    buildingName: "",
  },
];

export const AboutScreen = (props: AboutScreenProps): SafeAreaLayoutElement => {
  const isFocused = useIsFocused();

  const [rentalItems, setRentalItems] = useState<RentalActionData[]>(data);
  const fetchRentalItems = () => {
    storage
      .getAllDataForKey("rental")
      .then((ret: RentalActionData[]) => {
        console.log(ret);
        const items = [...rentalItems, ...ret];
        setRentalItems(items);
      })
      .catch((err) => {
        // ロードに失敗したら
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            break;
          case "ExpiredError":
            break;
        }
      });
  };

  const renderTodo = ({
    item,
    index,
  }: ListRenderItemInfo<RentalActionData & Item>): ListItemElement => (
    <ListItem style={styles.item} onPress={() => alert(`item.id: ${item.id}`)}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text category="s1">{item.name}</Text>
          <Text appearance="hint" category="c1">
            {item.postalCode}
          </Text>
          <Text appearance="hint" category="c1">
            {item.prefectures} {item.municipality}
          </Text>
          <Text appearance="hint" category="c1">
            {item.address} {item.buildingName}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", flex: 1 }}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 10 }}
            resizeMode="cover"
            source={item.image}
          />
        </View>
      </View>
    </ListItem>
  );

  // 初回ロード時、第二引数の値が変わった時実行
  useEffect(() => {
    fetchRentalItems();
  }, [props, isFocused]);
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
    // justifyContent: "center",
    // alignItems: "center",
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
