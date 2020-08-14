// import "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import axios from "axios";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190424142524369756.png",
          modified_date: 1566938920,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190424142524369756.png",
          address_lines: "",
          locality: "Washington",
          region: "DC",
          country: "US",
          postal_code: "20016",
          latitude: 38.9374808,
          longitude: -77.0852258,
          is_virtual: false,
          summary: "",
          end_date: 1558216800,
          start_date: 1558195200,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in DC to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "DC Watch Party - Biden for President Campaign Kickoff",
          browser_url: "https://www.mobilize.us/joebiden/event/91462/",
          timezone: "America/New_York",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190426172018337732.png",
          modified_date: 1558565383,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190426172018337732.png",
          address_lines: "Veterans Memorial Building",
          locality: "Cedar Rapids",
          region: "IA",
          country: "US",
          postal_code: "52401",
          latitude: 41.9767108,
          longitude: -91.6711345,
          is_virtual: false,
          summary: "",
          end_date: 1556649000,
          start_date: 1556641800,
          description:
            "Joe Biden is headed to Cedar Rapids! Join us on Tuesday, April 30th for a campaign stop at the Veterans Memorial Building.",
          title: "Cedar Rapids, IA: Campaign Stop with Joe Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91476/",
          timezone: "America/Chicago",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190426172316131257.png",
          modified_date: 1558565387,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190426172316131257.png",
          address_lines: "Grand River Center",
          locality: "Dubuque",
          region: "IA",
          country: "US",
          postal_code: "52001",
          latitude: 42.4980503,
          longitude: -90.6552213,
          is_virtual: false,
          summary: "",
          end_date: 1556668800,
          start_date: 1556664300,
          description:
            "Joe Biden is headed to Dubuque! Join us on Tuesday, April 30th for a campaign stop at the Grand River Center.",
          title: "Dubuque, IA: Campaign Stop with Joe Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91477/",
          timezone: "America/Chicago",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190426172545801283.png",
          modified_date: 1558565390,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190426172545801283.png",
          address_lines: "Big Grove Brewery & Taproom",
          locality: "Iowa City",
          region: "IA",
          country: "US",
          postal_code: "52240",
          latitude: 41.64672,
          longitude: -91.5328497,
          is_virtual: false,
          summary: "",
          end_date: 1556735400,
          start_date: 1556730900,
          description:
            "Joe Biden is headed to Iowa City! Join us on Wednesday, May 1st for a campaign stop at Big Grove Brewery & Taproom.",
          title: "Iowa City, IA: Campaign Stop with Joe Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91478/",
          timezone: "America/Chicago",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190424142614221490.png",
          modified_date: 1572127222,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190424142614221490.png",
          address_lines: "",
          locality: "Navarre",
          region: "FL",
          country: "US",
          postal_code: "32566",
          latitude: 30.4109342,
          longitude: -86.9123217,
          is_virtual: false,
          summary: "",
          end_date: 1572127200,
          start_date: 1572112800,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in [CITY] to watch live as Joe kicks off our campaign in Philadelphia, PA.\r\n\r\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "Fighten for Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91479/",
          timezone: "America/Chicago",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_4_20190424142603731968.png",
          modified_date: 1566938914,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_4_20190424142603731968.png",
          address_lines: "",
          locality: "Lewes",
          region: "DE",
          country: "US",
          postal_code: "19958",
          latitude: 38.7419365,
          longitude: -75.1756282,
          is_virtual: false,
          summary: "",
          end_date: 1558209600,
          start_date: 1558195200,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in Lewes, DE to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "Biden campaign kick off watch party",
          browser_url: "https://www.mobilize.us/joebiden/event/91493/",
          timezone: "America/New_York",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190427211224406818.png",
          modified_date: 1558565393,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_%21_20190427211224406818.png",
          address_lines: "River Center",
          locality: "Des Moines",
          region: "IA",
          country: "US",
          postal_code: "50309",
          latitude: 41.5810251,
          longitude: -93.6189182,
          is_virtual: false,
          summary: "",
          end_date: 1556758800,
          start_date: 1556749800,
          description:
            "Joe Biden is headed to Des Moines! Join us on Wednesday, May 1st for a campaign stop at the River Center.",
          title: "Des Moines, IA: Campaign Stop with Joe Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91539/",
          timezone: "America/Chicago",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_2_20190424142534661554.png",
          modified_date: 1566938915,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_2_20190424142534661554.png",
          address_lines: "",
          locality: "Olive Branch",
          region: "MS",
          country: "US",
          postal_code: "38654",
          latitude: 34.977819,
          longitude: -89.8277664,
          is_virtual: false,
          summary: "",
          end_date: 1558207800,
          start_date: 1558197000,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in Olive Branch to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "North Mississippi Pop Up 4 Joe Kick Off Watch Party",
          browser_url: "https://www.mobilize.us/joebiden/event/91556/",
          timezone: "America/Chicago",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_6_20190424142624956285.png",
          modified_date: 1566938926,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_6_20190424142624956285.png",
          address_lines: "",
          locality: "Atlanta",
          region: "GA",
          country: "US",
          postal_code: "30307",
          latitude: 33.7708173,
          longitude: -84.3526081,
          is_virtual: false,
          summary: "",
          end_date: 1558222200,
          start_date: 1558216800,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in Atlanta, Georgia to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title:
            "Joe Biden for President Campaign Kick Off Rally in Atlanta, GA!",
          browser_url: "https://www.mobilize.us/joebiden/event/91614/",
          timezone: "America/New_York",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190424142614221490.png",
          modified_date: 1566938916,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190424142614221490.png",
          address_lines: "",
          locality: "Seattle",
          region: "WA",
          country: "US",
          postal_code: "98107",
          latitude: 47.6683603,
          longitude: -122.3769582,
          is_virtual: false,
          summary: "",
          end_date: 1558231200,
          start_date: 1558227600,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in Seattle, WA to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "Campaign Kickoff Watch Party in Seattle, WA",
          browser_url: "https://www.mobilize.us/joebiden/event/91622/",
          timezone: "America/Los_Angeles",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_4_20190424142603731968.png",
          modified_date: 1566938927,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_4_20190424142603731968.png",
          address_lines: "",
          locality: "Crownsville",
          region: "MD",
          country: "US",
          postal_code: "21032",
          latitude: 39.0279108,
          longitude: -76.6528,
          is_virtual: false,
          summary: "",
          end_date: 1558209600,
          start_date: 1558195200,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in Crownsville, MD to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "Biden Campaign Kick Off Watch Party!",
          browser_url: "https://www.mobilize.us/joebiden/event/91651/",
          timezone: "America/New_York",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190502181646303530.png",
          modified_date: 1558565411,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190502181646303530.png",
          address_lines: "Hyatt Park Community Center",
          locality: "Columbia",
          region: "SC",
          country: "US",
          postal_code: "29203",
          latitude: 34.038634,
          longitude: -81.042218,
          is_virtual: false,
          summary: "",
          end_date: 1557005400,
          start_date: 1556998200,
          description:
            "Joe Biden is headed to Columbia! Join us on Saturday, May 4th for a campaign stop at the Hyatt Park Community Center. Doors open at 3:30 pm.",
          title: "Columbia, SC: Campaign Stop with Joe Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91778/",
          timezone: "America/New_York",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190504221923202255.png",
          modified_date: 1558565426,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190504221923202255.png",
          address_lines:
            "International Union of Painters and Allied Trades District Council 16",
          locality: "Henderson",
          region: "NV",
          country: "US",
          postal_code: "89014",
          latitude: 36.0770298,
          longitude: -115.0693036,
          is_virtual: false,
          summary: "",
          end_date: 1557264600,
          start_date: 1557253800,
          description:
            "Joe Biden is headed to Nevada! Join us on Tuesday, May 7th for a campaign stop at the International Union of Painters and Allied Trades District Council 16. Doors open at 11:30 am.",
          title: "Henderson, NV: Campaign Stop with Joe Biden",
          browser_url: "https://www.mobilize.us/joebiden/event/91903/",
          timezone: "America/Los_Angeles",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190424142614221490.png",
          modified_date: 1566938934,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_5_20190424142614221490.png",
          address_lines: "",
          locality: "Bellingham",
          region: "WA",
          country: "US",
          postal_code: "98225",
          latitude: 48.7562157,
          longitude: -122.4894588,
          is_virtual: false,
          summary: "",
          end_date: 1558234800,
          start_date: 1558227600,
          description:
            "Our team is coming together across the country to launch Joe’s campaign for President on May 18th. Join supporters in Bellingham, WA to watch live as Joe kicks off our campaign in Philadelphia, PA.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title:
            "Biden For President Campaign Kick Off Watch Party In Bellingham, WA",
          browser_url: "https://www.mobilize.us/joebiden/event/91995/",
          timezone: "America/Los_Angeles",
          __v: 0,
        },
        {
          featured_image_url:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_4_20190424142603731968.png",
          modified_date: 1566938915,
          venue:
            "https://mobilizeamerica.imgix.net/uploads/event/3x2thumbnail_4_20190424142603731968.png",
          address_lines: "",
          locality: "Boston",
          region: "MA",
          country: "US",
          postal_code: "02115",
          latitude: 42.3484207,
          longitude: -71.0842022,
          is_virtual: false,
          summary: "",
          end_date: 1558207800,
          start_date: 1558197000,
          description:
            "We're coming together across the country to launch Joe's campaign for President on May 18th. Join fellow supporters in Boston, MA to watch live as Joe formally kicks off his campaign in Philadelphia.\n\nMore details will be provided shortly. Click here to return to JoeBiden.com.",
          title: "Biden for President Campaign Kick Off Watch Party in Boston!",
          browser_url: "https://www.mobilize.us/joebiden/event/92009/",
          timezone: "America/New_York",
          __v: 0,
        },
      ],
    };
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 39.8283,
          longitude: -98.5795,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {this.state.eventData.map((marker, index) => (
          // console.log(marker)
          <Marker
            key={index}
            // coordinate={marker.longitude,marker.latitude},
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            // coordinates={
            //   latitude:marker.latitude,
            //   longitude:marker.longitude
            // },
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}

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
  constructor(props) {
    super(props);
    this.state = {
      test: [],
    };
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount called.");
    // axios.get('/events')
    // .then(function (response) {
    //   // handle success
    //   // this.setState({events: response})
    //   console.log('response');
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    // });
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
