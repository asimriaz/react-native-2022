import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ImageDetailsScreen from "./screens/ImageDetailsScreen";
import ImageScreen from "./screens/ImageScreen";



const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Image" component={ImageScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen
					name="ImgDetails"
					component={ImageDetailsScreen}
					options={({ route }) => ({
						title: route.params.name.first,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
