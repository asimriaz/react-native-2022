import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthentication } from "../store/user";

const LoginScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("clark@test.com");
	const [password, setPassword] = useState("passclark");
	const { token, user } = useSelector((state) => state.user);
	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<TextInput
				style={styles.input}
				onChangeText={setEmail}
				value={email}
				placeholder="Email"
			/>
			<TextInput
				secureTextEntry
				style={styles.input}
				onChangeText={setPassword}
				value={password}
				placeholder="Password"
			/>
			<Button
				title="Login"
				style={styles.button}
				onPress={() => {
					dispatch(getUserAuthentication({ email, password }));
					console.log(user)
					if(token){
						navigation.navigate("DashBoard");
					}
				}}
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
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	button: {
		margin: 15,
		padding: 10,
	},
});

export default LoginScreen;
