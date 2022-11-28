import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Button,
	FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../store/user";

const DashBoardScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { list } = useSelector((state) => state.user);

	const [users, setUsers] = useState([]);

	useEffect(() => {
		dispatch(getUserDetails());
		if (list.length !== 0) {
			setUsers([...users, ...list]);
		}
	}, []);

	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			{/* <Text>Home Screen Yo</Text>
			<Text>{list.length}</Text> */}

			<FlatList
				data={list}
				keyExtractor={(i) => i._id}
				renderItem={({ item, index }) => (
					<View style={styles.container}>
						{/* 
                        <Text>
							<Text style={styles.header}>{"_Id"} : </Text>
							<Text>{item._id}</Text>
						</Text> */}
						<Text>
							<Text style={styles.header}>{index + 1} : </Text>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("Details", { ...item })
								}>
								<Text
									style={
										styles.link
									}>{`${item.name.title}. ${item.name.first} ${item.name.last}`}</Text>
							</TouchableOpacity>
						</Text>
						{/* <Text>
							<Text style={styles.header}>{"email"} : </Text>
							<Text>{item.email}</Text>
						</Text> */}
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	link: {
		color: "blue",
		textDecorationLine: "underline",
		fontSize: 20,
	},
	container: {
		marginVertical: 10,
	},
	header: {
		fontWeight: "bold",
		fontSize: 20,
	},
});

export default DashBoardScreen;
