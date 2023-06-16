import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";

import User from './screens/User.js'
import Shop from './screens/Shop.js'
import Favorite from './screens/Favorite.js'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();



const Stack = createNativeStackNavigator();

export default function App() {
 
  return(
    <NavigationContainer>
      {/* <MinhaTab/>  1forma navgetion */}
      {/* <MinhaStack/>2 forma navgetion  */}
      <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
    {/* <Tab.Navigator>
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator> */}

      
function MinhaStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}

export function MinhaTab(){
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'User') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Favorite'){
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            

            
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}