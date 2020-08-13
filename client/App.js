// import "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let HomeScreen = function ({ navigation }) {
  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: 39.8283,
        longitude: -98.5795,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      showsUserLocation={true}
    >
      {/* {this.state.markers.map(marker => (
    <Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))} */}
    </MapView>
  );
};

// <MapView>
  // {this.state.markers.map(marker => (
  //   <Marker
  //     coordinate={marker.latlng}
  //     title={marker.title}
  //     description={marker.description}
  //   />
  // ))}
// </MapView>

let CalendarScreen = function ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Calendar goes here</Text>
    </View>
  );
};

let DetailsScreen = function ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
};

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-map" : "md-map";
            } else if (route.name === "Details") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Calendar") {
              iconName = focused ? "md-calendar" : "ios-calendar";
            }
            return <Icon name={iconName} type="ionicon" color="#00aef3" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#00aef3",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    );
  }
}

let App = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#00aef3",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="VOTE DEM" component={MyApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
