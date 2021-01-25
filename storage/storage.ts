import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

export const storage = new Storage({
  // 最大容量, 1000がデフォルト
  size: 1000,

  // AsyncStorageを使う（WEBでもRNでも）。
  // セットしないとリロードでデータが消えるよ。
  storageBackend: AsyncStorage,

  // （たぶん）キャッシュの期限。デフォルトは一日(1000 * 3600 * 24 milliseconds).
  // nullにも設定できて、期限なしの意味になるよ。
  defaultExpires: 1000 * 3600 * 24,

  // メモリにキャッシュするかどうか。デフォルトは true。
  enableCache: true,

  // リモートシンクの設定（だと思う。）
  sync: {
    // これについては後述
  },
});
