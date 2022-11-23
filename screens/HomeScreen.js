import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Details")}>
				<Text style={styles.link}>Details</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	link: {
		color: "blue",
		textDecorationLine: "underline",
		fontSize: 20,
	},
});

export default HomeScreen;
