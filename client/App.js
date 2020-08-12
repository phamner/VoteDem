import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

    </View>
  );
}

let DetailsScreen = function({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
          options={{ title: 'Overview' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'All the Deets' }}
        />

      </Stack.Navigator>
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
