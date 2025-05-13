import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home.js';
import Cadastro from '../components/Cadastro.js';
import Alterar from '../components/Alterar.js';

const Stack = createStackNavigator();

export default function Rotar() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Alterar" component={Alterar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
