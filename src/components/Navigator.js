import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Svg, Path } from "react-native-svg";
import Home from "../pages/Home";
import { useLinkBuilder } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigator = createNativeStackNavigator();
const DrawerNavigator = createDrawerNavigator();

// function CustomDrawerItemList({ state, navigation, descriptors }) {
//   const buildLink = useLinkBuilder();

//   const focusedRoute = state.routes[state.index];
//   const focusedDescriptor = descriptors[focusedRoute.key];
//   const focusedOptions = focusedDescriptor.options;

//   const {
//     drawerActiveTintColor,
//     drawerInactiveTintColor,
//     drawerActiveBackgroundColor,
//     drawerInactiveBackgroundColor,
//   } = focusedOptions;

//   return state.routes.map((route, i) => {
//     const focused = i === state.index;

//     const onPress = () => {
//       const event = navigation.emit({
//         type: "drawerItemPress",
//         target: route.key,
//         canPreventDefault: true,
//       });

//       if (!event.defaultPrevented) {
//         navigation.dispatch({
//           ...(focused
//             ? navigation.closeDrawer()
//             : navigation.navigate({ name: route.name, merge: true })),
//           target: state.key,
//         });
//       }
//     };

//     const {
//       title,
//       drawerLabel,
//       drawerIcon,
//       drawerLabelStyle,
//       drawerItemStyle,
//       drawerAllowFontScaling,
//     } = descriptors[route.key].options;

//     return (
//       <DrawerItem
//         key={route.key}
//         label={
//           drawerLabel !== undefined
//             ? drawerLabel
//             : title !== undefined
//             ? title
//             : route.name
//         }
//         icon={drawerIcon}
//         focused={focused}
//         activeTintColor={drawerActiveTintColor}
//         inactiveTintColor={drawerInactiveTintColor}
//         activeBackgroundColor={drawerActiveBackgroundColor}
//         inactiveBackgroundColor={drawerInactiveBackgroundColor}
//         allowFontScaling={drawerAllowFontScaling}
//         labelStyle={drawerLabelStyle}
//         style={drawerItemStyle}
//         to={buildLink(route.name, route.params)}
//         onPress={onPress}
//       />
//     );
//   });
// }

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Pressable
        style={{
          height: 90,
          justifyContent: "center",
          paddingHorizontal: 22,
        }}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <Path
            d='M0 15.2839L15.2839 0L17.8313 2.54732L2.54732 17.8313L0 15.2839Z'
            fill='#212124'
          />
          <Path
            d='M2.54779 7.48411e-05L17.8317 15.284L15.2844 17.8313L0.000466278 2.5474L2.54779 7.48411e-05Z'
            fill='#212124'
          />
        </Svg>
      </Pressable>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function Drawer() {
  return (
    <DrawerNavigator.Navigator
      screenOptions={() => ({
        headerShown: false,
        drawerActiveBackgroundColor: "#E7656573",
        drawerItemStyle: {
          marginHorizontal: 20,
          borderRadius: 18,
          paddingLeft: 25,
          paddingVertical: 2,
        },
        drawerLabelStyle: {
          fontFamily: "Helvetica",
          lineHeight: 18,
          fontSize: 18,
          color: "#212124",
        },
        // @TODO: DrawerIcons
        drawerIcon: () => <Text></Text>,
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <DrawerNavigator.Screen name='Aktualności' component={Home} />
      <DrawerNavigator.Screen name='Kalendarz' component={Home} />
      <DrawerNavigator.Screen name='Mapa' component={Home} />
      <DrawerNavigator.Screen name='NGO' component={Home} />
      <DrawerNavigator.Screen name='Baza Wiedzy' component={Home} />
      <DrawerNavigator.Screen name='Wyszukiwarka' component={Home} />
      <DrawerNavigator.Screen name='Ustawienia' component={Home} />
      <DrawerNavigator.Screen name='Wyloguj się' component={Home} />
    </DrawerNavigator.Navigator>
  );
}

export default function Navigator() {
  return <StackNavigator.Navigator screenOptions={{headerShown: false}}>
    <StackNavigator.Screen name='Drawer' component={Drawer}/>
    <StackNavigator.Screen name='Profil' component={Home}/>
    <StackNavigator.Screen name='Settings' component={Home}/>
  </StackNavigator.Navigator>;
}
