import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import Post from "../components/Post";

function ArrowSvg() {
  return (
    <Svg
      width='35'
      height='22'
      viewBox='0 0 35 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M11.2781 20L2.27808 11M2.27808 11L34.2781 11M2.27808 11L11.2781 2'
        stroke='white'
        strokeWidth='3'
      />
    </Svg>
  );
}

function ProfileHeaderBackground({ children }) {
  const image = require("../../assets/headerBackground.png");
  const gradient = require("../../assets/headerGradient.png");

  const height = 170 + 32 + StatusBar.currentHeight;

  return (
    <ImageBackground
      style={{
        position: "absolute",
        top: -StatusBar.currentHeight,
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
          <View style={{ height: StatusBar.currentHeight }}></View>
          {children}
          <View style={{ height: 32 }}></View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

function ProfileHeader({ navigation, title }) {
  return (
    <>
      <View style={{ height: 170 + 32 }}></View>
      <ProfileHeaderBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingBottom: 32,
            marginTop: StatusBar.currentHeight,
          }}
        >
          <Pressable
            style={{ height: "100%", justifyContent: "center" }}
            onPress={() => navigation.goBack()}
          >
            <ArrowSvg />
          </Pressable>
        </View>
      </ProfileHeaderBackground>  
    </>
  );
}

function Tags({ data }) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
      {data.map((tag) => (
        <View
          style={{
            backgroundColor: "#83838333",
            marginRight: 5,
            marginBottom: 7,
            borderRadius: 100,
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontFamily: "HelveticaBold",
              fontSize: 14,
              color: "#454545",
            }}
          >
            {tag}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function NGOProfile({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("O nas");
  const categories = ["O nas", "Aktualności", "Wydarzenia", "Projekty"];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ProfileHeader navigation={navigation} />
      <Image
        source={require("../../assets/NGOProfileAvatar.png")}
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          top: 140,
          left: 20,
        }}
      />
      <View style={{ marginTop: 60, paddingHorizontal: 22 }}>
        <Text style={{ fontFamily: "HelveticaBold", fontSize: 24 }}>
          Fundacja Kołobrzeg Spa
        </Text>
        <Tags data={["Spa", "Odpoczynek", "Regeneracja"]} />
        <Text
          style={{ fontFamily: "Helvetica", fontSize: 16, color: "#838383" }}
        >
          Łączy nas pasja do Kołobrzegu. Chcemy mieć wymierny wpływ na jego
          pozytywny wizerunek...
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <Pressable
            style={{
              width: "48%",
              paddingVertical: 7,
              backgroundColor: "#E76565",
              borderRadius: 100,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontFamily: "Helvetica", fontSize: 18, color: "#fff" }}
            >
              Obserwuj
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: "48%",
              paddingVertical: 7,
              borderWidth: 1,
              backgroundColor: "#fff",
              borderRadius: 100,
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Helvetica", fontSize: 18 }}>
              Wyślij wiadomość
            </Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal={true}
          style={{ marginTop: 30 }}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => (
            <Pressable
              style={{
                height: 40,
                justifyContent: "center",
                borderBottomWidth: 4,
                borderBottomColor:
                  activeCategory === category ? "#E76565" : "#fff",
                marginRight: 28,
              }}
              key={category}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 16,
                  color: activeCategory === category ? "#E76565" : "#878787",
                }}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <NGOProfileSubviews activeCategory={activeCategory} />
    </ScrollView>
  );
}

function NGOProfileSubviews({ activeCategory }) {
  function RenderPosts() {
    return [{}, {}, {}, {}].map((data) => <Post data={data} />);
  }

  function AboutUs() {
    function Images() {
      return (
        <View style={{marginTop: 15}}>
          <Image
            source={require("../../assets/headerBackground.png")}
            style={{ width: "100%", height: undefined, aspectRatio: 3 / 2, borderRadius: 15 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 22,
            }}
          >
            <Image
              source={require("../../assets/headerBackground.png")}
              style={{ width: "47%", height: undefined, aspectRatio: 1 / 1, borderRadius: 15 }}
            />
            <Image
              source={require("../../assets/headerBackground.png")}
              style={{ width: "47%", height: undefined, aspectRatio: 1 / 1, borderRadius: 15 }}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={{ paddingHorizontal: 22, paddingVertical: 20 }}>
        <Text style={{ fontSize: 18, fontFamily: "HelveticaBold" }}>
          Nasz Cel
        </Text>
        <Text style={{ fontSize: 16, fontFamily: "Helvetica" }}>
          Łączy nas pasja do Kołobrzegu. Chcemy mieć wymierny wpływ na jego
          pozytywny wizerunek. Z tej potrzeby w 2010 roku założyliśmy Fundację
          Kołobrzeg Polskie Centrum SPA, która od 2017 r. nosi nazwę Kołobrzeg
          SPA. Nasi fundatorzy to firmy i właściciele hoteli oraz obiektów.
          Razem pragniemy by Kołobrzeg stał się wiodącym i najbardziej
          popularnym ośrodkiem SPA w Polsce, miejscem pozwalającym na
          wyciszenie, odpoczynek i regenerację sił.
        </Text>
        <Images />
      </View>
    );
  }

  function Component() {
    return <View></View>;
  }

  const categoryComponents = {
    "O nas": <AboutUs />,
    Aktualności: <RenderPosts />,
    Wydarzenia: <Component />,
    Projekty: <Component />,
  };

  return categoryComponents[activeCategory] || null;
}
