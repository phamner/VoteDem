import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



let HomeScreen = function({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

let CalendarScreen = function({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar goes here</Text>
    </View>
  );
}

let DetailsScreen = function({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       testing: []
//     }
//   }
//   render() {
//     return (
//       <NavigationContainer>
        

//           <Tab.Navigator 
//             initialRouteName="Home"
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;

//                 if (route.name === 'Home') {
//                   iconName = focused ? 'ios-map' : 'md-map';
//                 } else if (route.name === 'Details') {
//                   iconName = focused ? 'ios-list-box' : 'ios-list';
//                 } else if (route.name === 'Calendar') {
//                   iconName = focused ? 'md-calendar' : 'ios-calendar';
//                 }

//                 return <Icon name={iconName} type="ionicon" color="#00aef3" />
//               },
//             })}

//             tabBarOptions={{
//               activeTintColor: '#00aef3',
//               inactiveTintColor: 'gray',
//             }}
//           >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Details" component={DetailsScreen} />
//             <Tab.Screen name="Calendar" component={CalendarScreen} />

//           </Tab.Navigator>




//           {/* <Stack.Screen 
//             name="Home" 
//             component={HomeScreen}  
//             options={{title: 'My Home'}}
//           />
//           <Stack.Screen 
//             name="Details" 
//             component={DetailsScreen} 
//             options={{ title: 'All the Deets' }}
//           /> */}

//         {/* </Stack.Navigator> */}
//       </NavigationContainer>
//     );
//   }
// }

// export default App;







function MyApp() {
    return (
         <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'ios-map' : 'md-map';
                } else if (route.name === 'Details') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                } else if (route.name === 'Calendar') {
                  iconName = focused ? 'md-calendar' : 'ios-calendar';
                }

                return <Icon name={iconName} type="ionicon" color="#00aef3" />
              },
            })}

            tabBarOptions={{
              activeTintColor: '#00aef3',
              inactiveTintColor: 'gray',
            }}
          >
           <Tab.Screen name="Home" component={HomeScreen} />
           <Tab.Screen name="Details" component={DetailsScreen} />
           <Tab.Screen name="Calendar" component={CalendarScreen} />

         </Tab.Navigator>
    )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="MyApp" component={MyApp} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


// function Home() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Feed" component={Feed} />
//         <Tab.Screen name="Messages" component={Messages} />
//       </Tab.Navigator>
//     );
//   }
  
//   function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Profile" component={Profile} />
//           <Stack.Screen name="Settings" component={Settings} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }