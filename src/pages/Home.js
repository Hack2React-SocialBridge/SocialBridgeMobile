import { FlatList, View, Text, Pressable, Image } from "react-native";
import Wrapper from "../components/Wrapper";

import { Svg, Path } from "react-native-svg";

function Header({ openDrawer, openProfile }) {
  return (
    <View
      style={{
        width: "100%",
        height: 90,
        paddingHorizontal: 16,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Pressable
        style={{ height: "100%", justifyContent: "center" }}
        onPress={openDrawer}
      >
        <Svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M0 1.5H32M0 9H32M0 16.5H32" stroke="#212124" strokeWidth="3"/>
        </Svg>
      </Pressable>
      <Pressable
        style={{
          height: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
        onPress={openProfile}
      >
        <View style={{ alignItems: 'flex-end', marginHorizontal: 8}}>
          <Text style={{fontFamily: 'HelveticaBold', fontSize: 16, lineHeight: 14}}>Nazwa</Text>
          <Text style={{fontFamily: 'Helvetica', fontSize: 14, lineHeight: 14}}>Zobacz swój profil</Text>
        </View>
        <Image
          style={{ borderRadius: 100 }}
          source={require("./../../assets/avatar.png")}
        />
      </Pressable>
    </View>
  );
}

export default function Home({ route, navigation }) {
  return (
    <Wrapper style={{ backgroundColor: "#ff0333" }}>
      <Header openDrawer={() => navigation.openDrawer()} />
    </Wrapper>
  );
}
