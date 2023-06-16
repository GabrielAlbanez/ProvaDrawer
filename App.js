import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contatos from './screens/Contatos';
import Agenda from './screens/Agenda';
const Drawer = createDrawerNavigator();

export default function App() {
 
  return(
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Contatos" component={Contatos} />
      <Drawer.Screen name="Agenda" component={Agenda} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

