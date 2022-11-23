import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/AuthContext";

const LoginScreen = () => {
	const { state, signin, ResolveSignIn } = useContext(Context);
	//console.log(useContext(Context));
	useEffect(() => {
		ResolveSignIn();
	}, []);

	const [email, setEmail] = useState("clark@test.com");
	const [password, setPassword] = useState("passclark");
	return (
		<View style={styles.container}>
			<Input
				label="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize={"none"}
				autoCorrect={false}
			/>
			<Input
				label="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			{state.error ? (
				<Text style={{ color: "red" }}>{state.error}</Text>
			) : null}
			<Button title="Login" onPress={() => signin({ email, password })} />
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
		// alignItems: 'center',
		// marginBottom: 250,
	},
});
