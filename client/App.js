import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import AllEvents from './Components/AllEvents';
import Calendar from './Components/Calendar';
import Map from './Components/Map';
import NearMe from './Components/NearMe';
import MyTabBar from './Components/MyTabBar';

// let StackScreen = function() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'My home' }}
//       />
//     </Stack.Navigator>
//   );
// }

let HomeScreen = function({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Icon name="md-beer" type="ionicon" color="#887700" />

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      /> */}

    </View>
  );
}


let DetailsScreen = function({ route, navigation }) {
  /* 2. Get the param */
  // const { itemId } = route.params;
  // const { otherParam } = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}



    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// initialRouteName="Home"

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-map' : 'md-map';
            } else if (route.name === 'Details') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }

            return <Icon name={iconName} type="ionicon" color="red" />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>



      {/* <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#0079d3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      > */}
        {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
          options={{title: 'My Home'}}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'All the Deets' }}
        /> */}

      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
























// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       test: []
//     }
//   }
//   render(){
//     const Tab = createBottomTabNavigator();

//     return (
//       <NavigationContainer>

//         <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  
//           <Tab.Screen name="All Events" component={AllEvents} />
//           <Tab.Screen name="Near Me" component={NearMe} />
//           <Tab.Screen name="Map" component={Map} />
//           <Tab.Screen name="Calendar" component={Calendar} />
  
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }


// export default App;
