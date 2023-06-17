import { FlatList, View, Text } from "react-native";
import Header from "../components/Header";
import Post from '../components/Post';

export default function Home({ route, navigation }) {
  const DATA = [{}, {}, {}, {}];
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={(data) => (
          <Post data={data} />
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
