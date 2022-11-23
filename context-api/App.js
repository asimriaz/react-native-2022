// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as BlogProvider } from "./src/context/BlogContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import IndexScreen from "./src/screens/IndexScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { navigationRef } from "./src/screens/RootNavigation";
import Dashboard from "./src/screens/Dashboard";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator>
				<Stack.Screen name="Index" component={IndexScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default () => (
	<AuthProvider>
		<BlogProvider>
			<App />
		</BlogProvider>
	</AuthProvider>
);
