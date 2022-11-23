import React from "react";
import { StatusBar } from "expo-status-bar";
import DATA from "../assets/data.json";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	Image,
} from "react-native";

const ImageScreen = ({ navigation }) => {
	//const renderItem = ;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Image
							style={{
								height: 75,
								width: 75,
								resizeMode: "contain",
								borderRadius: 10,
								alignSelf: "center",
							}}
							source={{ uri: item.image }}
						/>
						<Text
							style={styles.title}
							onPress={() => {
								console.log(
									`Press-----------------------------------------------------------------`
								);
								console.log(item);
								console.log(
									`----------------------------------------------------------------------`
								);
								navigation.setOptions({ title: "Updated!" });
								navigation.navigate("ImgDetails", {
									...item,
								});
							}}>
							{`${item.name.title} ${item.name.first} ${item.name.last}`}
						</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
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
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#808080",
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
	},
	title: {
		fontSize: 22,
		alignSelf: "center",
	},

	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
});

export default ImageScreen;
