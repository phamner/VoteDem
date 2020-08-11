import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllEvents from './Components/AllEvents';
import Calendar from './Components/Calendar';
import Map from './Components/Map';
import NearMe from './Components/NearMe';
import MyTabBar from './Components/MyTabBar';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      test: []
    }
  }
  render(){
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>

        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  
          <Tab.Screen name="All Events" component={AllEvents} />
          <Tab.Screen name="Near Me" component={NearMe} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Calendar" component={Calendar} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;
