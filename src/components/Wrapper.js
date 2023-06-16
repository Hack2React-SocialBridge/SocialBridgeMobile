import { SafeAreaView, Platform, StatusBar } from "react-native";

export default function Wrapper({ style, ...props }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        ...style
      }}
      {...props}
    />
  );
}
