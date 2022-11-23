import { View, Text, Button, FlatList,  } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {

	const value = useContext(BlogContext);
	const { state, addBlogPost } = useContext(BlogContext);
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(e) => e.id}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
			<Button
				title="Go to Login"
				onPress={() => navigation.navigate("Login")}
			/>
			{/* <Button
				title="Go to List"
				onPress={() => navigation.navigate("List")}
			/> */}
		</View>
	);
};

export default IndexScreen;
