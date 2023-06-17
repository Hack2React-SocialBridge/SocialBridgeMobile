import Header from "../components/Header";
import { FlatList, View, Text } from "react-native";

export default function Home({ route, navigation }) {
  const DATA = [{}, {}, {}, {}];
  return (
    <View style={{ backgroundColor: "#ff0333", flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        scrollEnabled={false}
        data={DATA}
        renderItem={(e) => (
          <View
            style={{ width: 20, height: 1000, backgroundColor: "#fff" }}
          ></View>
        )}
        ListHeaderComponent={
          <Header
            navigation={navigation}
            title={
              <Text style={{ fontFamily: "HelveticaBold", fontSize: 26 }}>
                Aktualności
              </Text>
            }
          />
        }
      ></FlatList>
    </View>
  );
}
