import React, {useEffect

} from "react";
import { StatusBar } from "expo-status-bar";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	Image,
} from "react-native";

const ImageDetailsScreen = ({ route, navigation }) => {
	console.log(
		`Details-----------------------------------------------------------------`
	);
	console.log(route.params);
	console.log(
		`-----------------------------------------------------------------`
	);

	useEffect(() => {
		// navigation.setOptions({
		// 	title: "Hello",
		// });
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.title}>Details</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default ImageDetailsScreen;
