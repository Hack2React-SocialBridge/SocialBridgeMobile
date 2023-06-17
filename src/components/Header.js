import {
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Svg, Path } from "react-native-svg";

function HamburgerSvg() {
  return <Svg
    width='32'
    height='18'
    viewBox='0 0 32 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path d='M0 1.5H32M0 9H32M0 16.5H32' stroke='#fff' strokeWidth='3' />
  </Svg>;
}

function HeaderBackground({ children }) {
  const image = require("../../assets/headerBackground.png");
  const gradient = require("../../assets/headerGradient.png");

  const height = 170 + 32 + (StatusBar.currentHeight || 0);

  return (
    <ImageBackground
      style={{
        top: -(StatusBar.currentHeight || 0),
        width: "100%",
        height: height,
      }}
      source={image}
      resizeMode='cover'
    >
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={gradient}
        resizeMode='cover'
      >
        <View style={{ flex: 1 }}>
          <View style={{ height: StatusBar.currentHeight || 0 }}></View>
          {children}
          <View style={{ height: 32 }}></View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

export default function Header({ navigation, title }) {
  const name = "Anastazja";

  return (
    <>
      <HeaderBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingBottom: 32,
            marginTop: StatusBar.currentHeight || 0,
          }}
        >
          <Pressable
            style={{ height: "100%", justifyContent: "center" }}
            onPress={() => navigation.openDrawer()}
          >
            <HamburgerSvg />
          </Pressable>
          <Pressable
            style={{
              height: "100%",
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("Profil NGO")}
          >
            <View style={{ alignItems: "flex-end", marginHorizontal: 8 }}>
              <Text
                style={{
                  fontFamily: "HelveticaBold",
                  fontSize: 16,
                  lineHeight: 14,
                  color: "#fff",
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 14,
                  lineHeight: 14,
                  color: "#fff",
                }}
              >
                Zobacz swój profil
              </Text>
            </View>
            <Image
              style={{ borderRadius: 100 }}
              source={require("./../../assets/avatar.png")}
            />
          </Pressable>
        </View>
        <View
          style={{
            height: 64,
            position: "absolute",
            width: "100%",
            borderTopWidth: 32,
            borderBottomWidth: 32,
            borderColor: "#fff",
            bottom: StatusBar.currentHeight? -32: 0,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        ></View>
      </HeaderBackground>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: StatusBar.currentHeight || 32,
          paddingHorizontal: 22,
          backgroundColor: "transparent",
          bottom: 0,
        }}
      >
        {title}
      </View>
    </>
  );
}
