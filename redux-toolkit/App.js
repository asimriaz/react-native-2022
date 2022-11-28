// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './store'
import DashBoardScreen from './screens/DashBoardScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DashBoard'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DashBoard" component={DashBoardScreen} />
        <Stack.Screen name="Details" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//export default App;
export default () => (
  <Provider store={store}>
      <App />
  </Provider>
)