// import * as React from 'react';
// import { View, Text, TouchableOpacity, Button } from 'react-native';

// const MyTabBar = function({ state, descriptors, navigation }) {
//   return (
//     <View style={{
//         flexDirection: 'row',
//         height: 75,
//         backgroundColor: 'powderblue'
//         }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// // function MyTabBar({ navigation }) {
// //   return (
// //     <Button
// //       title="Go somewhere"
// //       onPress={() => {
// //         // Navigate using the `navigation` prop that you received
// //         navigation.navigate('SomeScreen');
// //       }}
// //     />
// //   );
// // }

// export default MyTabBar;
